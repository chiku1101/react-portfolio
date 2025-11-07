import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";

const certifications = [
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB, Inc.",
    year: "2025",
    Icon: SiMongodb,
    link: "https://lnkd.in/gHVZsdFg",
  },
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
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-16 tracking-airier"
        >
          Certifications
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 bg-white hover:shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                {cert.Icon ? (
                  <cert.Icon className="w-12 h-12 md:w-14 md:h-14 text-green-600" />
                ) : (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-14 h-14 md:w-16 md:h-16 object-contain"
                  />
                )}
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-lg md:text-xl font-normal text-gray-900 mb-3 tracking-airier leading-tight">
                  {cert.title}
                </h3>
                <div className="flex flex-col items-center space-y-1">
                  <p className="text-base text-gray-600 tracking-airy font-normal">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 tracking-airy font-normal">
                    {cert.year}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
