import React from "react";
import { RiReactjsLine, RiBugLine, RiCloudLine, RiLinksLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiPython, 
  SiJavascript,
  SiDocker,
  SiEthereum,
  SiSolidity,
  SiLinux
} from "react-icons/si";
import { FaNodeJs, FaShieldAlt, FaLock } from "react-icons/fa";
import { BiLogoPostgresql, BiNetworkChart } from "react-icons/bi";
import { HiCode } from "react-icons/hi";
import { motion } from "framer-motion";

const Technologies = ({ id }) => {
  // Core Technologies
  const coreTechnologies = [
    { Icon: RiReactjsLine, name: "React", link: "https://react.dev/" },
    { Icon: TbBrandNextjs, name: "Next.js", link: "https://nextjs.org/" },
    { Icon: SiMongodb, name: "MongoDB", link: "https://www.mongodb.com/" },
    { Icon: SiExpress, name: "Express.js", link: "https://expressjs.com/" },
    { Icon: FaNodeJs, name: "Node.js", link: "https://nodejs.org/" },
    { Icon: BiLogoPostgresql, name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { Icon: SiPython, name: "Python", link: "https://www.python.org/" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { Icon: SiJavascript, name: "JavaScript", link: "https://www.javascript.com/" },
  ];

  // Cybersecurity Tools
  const securityTools = [
    { Icon: BiNetworkChart, name: "Wireshark", link: "https://www.wireshark.org/" },
    { Icon: SiLinux, name: "Kali Linux", link: "https://www.kali.org/" },
    { Icon: RiBugLine, name: "Burp Suite", link: "https://portswigger.net/burp" },
    { Icon: FaShieldAlt, name: "OWASP", link: "https://owasp.org/" },
    { Icon: FaLock, name: "Metasploit", link: "https://www.metasploit.com/" },
  ];

  // Blockchain Technologies
  const blockchainTech = [
    { Icon: SiSolidity, name: "Solidity", link: "https://soliditylang.org/" },
    { Icon: SiEthereum, name: "Ethereum", link: "https://ethereum.org/" },
    { Icon: HiCode, name: "Hardhat", link: "https://hardhat.org/" },
    { Icon: RiLinksLine, name: "Web3.js", link: "https://web3js.readthedocs.io/" },
  ];

  // Cloud & DevOps
  const cloudDevOps = [
    { Icon: RiCloudLine, name: "Azure", link: "https://azure.microsoft.com/" },
    { Icon: SiDocker, name: "Docker", link: "https://www.docker.com/" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const TechnologyGrid = ({ technologies, delay = 0 }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delay } }
      }}
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
    >
      {technologies.map(({ Icon, name, link }, index) => (
        <motion.a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center p-6 border border-gray-200 hover:border-gray-300 transition-colors group"
        >
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-700 group-hover:text-gray-900 transition-colors mb-3" />
          <span className="text-sm md:text-base text-gray-600 text-center font-normal tracking-airy">
            {name}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );

  return (
    <section id={id} className="py-20 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-16 tracking-airier"
        >
          Technologies
        </motion.h2>

        {/* Core Technologies */}
        <div className="mb-16">
          <TechnologyGrid technologies={coreTechnologies} />
        </div>

        {/* Specializations Section */}
        <div className="space-y-16">
          {/* Cybersecurity Tools */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 tracking-airier"
            >
              Security
            </motion.h3>
            <TechnologyGrid technologies={securityTools} delay={0.1} />
          </div>

          {/* Blockchain Technologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 tracking-airier"
            >
              Blockchain
            </motion.h3>
            <TechnologyGrid technologies={blockchainTech} delay={0.1} />
          </div>

          {/* Cloud & DevOps */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-normal text-gray-900 mb-8 tracking-airier"
            >
              Cloud & DevOps
            </motion.h3>
            <TechnologyGrid technologies={cloudDevOps} delay={0.1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
