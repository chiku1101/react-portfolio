// Vercel Serverless Function for Spotify API
// This file should be in the /api folder for Vercel deployment

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
    const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
      return res.status(500).json({ error: 'Spotify credentials not configured' });
    }

    // Get access token using refresh token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN
      })
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to refresh access token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Try to get currently playing track
    const currentlyPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (currentlyPlayingResponse.status === 204 || currentlyPlayingResponse.status === 404) {
      // No track currently playing, get recently played tracks
      const recentlyPlayedResponse = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (!recentlyPlayedResponse.ok) {
        throw new Error('Failed to fetch recently played tracks');
      }

      const recentlyPlayedData = await recentlyPlayedResponse.json();
      
      if (recentlyPlayedData.items && recentlyPlayedData.items.length > 0) {
        const track = recentlyPlayedData.items[0].track;
        const playedAt = new Date(recentlyPlayedData.items[0].played_at);
        const timeAgo = getTimeAgo(playedAt);

        return res.status(200).json({
          isPlaying: false,
          track: {
            name: track.name,
            artist: track.artists.map(a => a.name).join(', '),
            album: track.album.name,
            image: track.album.images[0]?.url,
            url: track.external_urls.spotify,
            timeAgo: timeAgo
          }
        });
      }
    } else if (currentlyPlayingResponse.ok) {
      // Currently playing track
      const currentlyPlayingData = await currentlyPlayingResponse.json();
      const track = currentlyPlayingData.item;

      return res.status(200).json({
        isPlaying: true,
        track: {
          name: track.name,
          artist: track.artists.map(a => a.name).join(', '),
          album: track.album.name,
          image: track.album.images[0]?.url,
          url: track.external_urls.spotify,
          timeAgo: 'Now playing'
        }
      });
    }

    // Fallback if no data available
    return res.status(200).json({
      isPlaying: false,
      track: null
    });

  } catch (error) {
    console.error('Spotify API Error:', error);
    return res.status(500).json({ error: 'Failed to fetch Spotify data' });
  }
}

function getTimeAgo(date) {
  const now = new Date();
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
}
