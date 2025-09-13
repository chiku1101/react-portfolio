import { motion } from "framer-motion";

const certifications = [
	{
		title: "Salesforce AI Associate",
		issuer: "Salesforce",
		year: "2024",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
		link: "https://trailblazer.me/id/your-certificate-link",
	},
	{
		title: "Microsoft Azure AI Fundamentals (AI-900)",
		issuer: "Microsoft",
		year: "2024",
		image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
		link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=455&cvid=f+w1qZ9L9RXMgTWJGy6PGw==",
	},
	{
		title: "Microsoft Azure Fundamentals (AZ-900)",
		issuer: "Microsoft",
		year: "2024",
		image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
		link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=yvFhsgKJsDi9+q1X5GZG6w==",
	},
];

const Certifications = () => {
	return (
		<motion.div
			className="py-20 px-4 bg-black text-white"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true }} // Ensures animation happens only once when in view
		>
			{/* Section Heading */}
			<motion.h1
				className="my-20 text-center text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }} // Ensures animation happens only once
			>
				Certifications
			</motion.h1>

			{/* Certifications List */}
			<motion.div
				className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				initial="hidden"
				whileInView="visible"
				variants={{
					visible: {
						transition: { staggerChildren: 0.2 },
					},
				}}
				viewport={{ once: true }} // Ensures animation happens only once
			>
				{certifications.map((cert, index) => (
					<motion.a
						key={index}
						href={cert.link}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:shadow-purple-500/30"
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
						whileInView="visible"
						viewport={{ once: true }} // Ensures animation happens only once
						whileHover={{ scale: 1.05 }}
					>
						{/* Circular Certification Image */}
						<img
							src={cert.image}
							alt={cert.title}
							className="w-24 h-24 object-cover rounded-full mb-4 transition-opacity duration-300 group-hover:opacity-80"
						/>
						{/* Certification Title */}
						<h3 className="text-xl font-semibold mb-1 text-center">
							{cert.title}
						</h3>
						{/* Certification Details */}
						<p className="text-sm text-gray-400">
							{cert.issuer} • {cert.year}
						</p>
					</motion.a>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Certifications;
