import { motion } from "framer-motion";

const certifications = [
  {
    title: "Front-End Development By Meta",
    issuer: "Meta",
    year: "2024",
    image: "https://i.redd.it/mqufvvsxdx481.png", 
    link: "https://coursera.org/share/993388de08843ef24bbad1639ce14435", 
  },
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    year: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
    link: "https://trailhead.salesforce.com/credentials/aiassociate",
  },
  {
    title: "Python Developer Certification IIT Madras Pravartak",
    issuer: "IIT Madras Pravartak",
    year: "2024",
    image: "https://iitmpravartak.org.in/new_home/images/iit-logo.png",
    link: "https://media.licdn.com/dms/image/v2/D5622AQFb5OjZBQ6xiw/feedshare-shrink_800/feedshare-shrink_800/0/1724952249764?e=1741219200&v=beta&t=gJbJBAcxsCoj9PqLh4Kkqappj9FM0uJX4qJwDw100gM",
  },
];

const Certifications = () => {
  return (
    <motion.div
      className="py-20 px-4 bg-gray-950 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.h1
        className="my-20 text-center text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
            whileHover={{ scale: 1.05 }}
          >
            {/* Circular Certification Image */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-24 h-24 object-cover rounded-full mb-4 transition-opacity duration-300 group-hover:opacity-80"
            />
            {/* Certification Title */}
            <h3 className="text-xl font-semibold mb-1 text-center">{cert.title}</h3>
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
