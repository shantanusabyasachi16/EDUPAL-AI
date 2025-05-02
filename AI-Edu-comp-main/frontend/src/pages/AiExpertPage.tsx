import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Link, useNavigate } from "react-router-dom";

import cn1Image from "../assets/cn1.jpg";
import cn2Image from "../assets/cn2.jpg";
import cn3Image from "../assets/cn3.jpg";

import cn5Image from "../assets/cn5.jpg";
import pic1Image from "../assets/pic1.png";
import pic2Image from "../assets/pic2.png";
import pic3Image from "../assets/pic3.png";
import pic5Image from "../assets/pic5.png";
import pic6Image from "../assets/pic6.png";

import img6Image from "../assets/img6.png";
import img7Image from "../assets/img7.png";

import img8Image from "../assets/img8.png";
import Footer from "./../components/Footer";

const aiExperts = [
  {
    name: "Dr. Sarah Chen",
    title: "Operating System Expert",
    description:
      "Specializing in kernel development and system optimization for modern hardware",
    specialty: "Operating Systems",
    image: pic6Image,
    cardStyle: "from-purple-500/20 to-indigo-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/os"
  },
  {
    name: "Prof. James Wilson",
    title: "OOP Principles Expert",
    description:
      "Author of modern design pattern implementations and SOLID principle methodologies",
    specialty: "Object-Oriented Programming",
    image: img6Image,
    cardStyle: "from-blue-500/20 to-cyan-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/oops"
  },
  {
    name: "Dr. Maya Patel",
    title: "Data Structure Expert",
    description:
      "Developed innovative algorithms for efficient data organization and memory management",
    specialty: "Data Structures",
    image: img7Image,
    cardStyle: "from-emerald-500/20 to-teal-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/dsa"
  },
  {
    name: "Alex Rodriguez",
    title: "Computer Networking Expert",
    description:
      "Pioneer in network architecture design and protocol optimization",
    specialty: "Computer Networks",
    image: cn1Image,
    cardStyle: "from-pink-500/20 to-rose-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/computer-networking"
  },
  {
    name: "Dr. Kenji Tanaka",
    title: "AI & ML Expert",
    description:
      "Leading researcher in machine learning model optimization and deployment",
    specialty: "Artificial Intelligence",
    image: cn2Image,
    cardStyle: "from-amber-500/20 to-orange-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/aiml"
  },
  {
    name: "Dr. Olivia Washington",
    title: "Database System Expert",
    description:
      "Designed scalable database architectures for enterprise applications",
    specialty: "Database Systems",
    image: cn3Image,
    cardStyle: "from-red-500/20 to-rose-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/dbms"
  },
  {
    name: "Prof. David Kim",
    title: "Cyber Security",
    description:
      "Expert in AI-driven threat detection and secure system design for modern applications",
    specialty: "Cyber Security",
    image: img8Image,
    cardStyle: "from-violet-500/20 to-purple-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/cyber-security"
  },
  {
    name: "Emma Johnson",
    title: "C & C++",
    description:
      "Specializes in high-performance AI programming and low-level system optimization",
    specialty: "C & C++",
    image: cn5Image,
    cardStyle: "from-blue-500/20 to-indigo-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/c-&-cpp"
  },
  {
    name: "Dr. Michael Zhang",
    title: "Internet Of Things",
    description:
      "Develops AI-powered IoT networks for smart automation and real-time analytics",
    specialty: "AI Research",
    image: pic5Image,
    cardStyle: "from-teal-500/20 to-green-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/iot"
  },
  {
    name: "Sophia Martinez",
    title: "Computer Architecture",
    description:
      "Designs hardware-efficient AI systems for optimized computing performance",
    specialty: "AI Programming",
    image: pic3Image,
    cardStyle: "from-gray-500/20 to-slate-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/computer-architecture"
  },
  {
    name: "Dr. Thomas Lee",
    title: "Cloud Computing",
    description:
      "Builds scalable AI infrastructure on cloud platforms for seamless deployment",
    specialty: "Explainable AI",
    image: pic2Image,
    cardStyle: "from-fuchsia-500/20 to-pink-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/cloud-computing"
  },
  {
    name: "Dr. Aisha Nkosi",
    title: "Data Science & Analytics",
    description:
      "Leverages AI for predictive modeling and data-driven decision-making",
    specialty: "Healthcare AI",
    image: pic1Image,
    cardStyle: "from-cyan-500/20 to-blue-600/20",
    buttonStyle: "bg-purple-500 hover:bg-purple-600",
    chatPath: "/data-science"
  },
];

export const AiExpert = ({ experts = aiExperts }) => {
  const navigate = useNavigate();

  const handleExpertClick = (chatPath:any) => {
    navigate(chatPath);
  };

  return (
    <div className="bg-[#030303] px-4 py-8 md:px-8 lg:px-12 text-center !pb-15">
      <motion.h1
        initial={{
          backgroundPosition: "200% 50%",
          opacity: 0.5,
        }}
        whileInView={{
          backgroundPosition: "0% 50%",
          opacity: 1,
        }}
        transition={{
          duration: 1.9,
          ease: "easeInOut",
        }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-6 md:pt-10 p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-[length:200%_100%]"
      >
        Meet Our AI-Subject Experts
      </motion.h1>

      <div className="mt-6 md:mt-10 text-center">
        <Link to="/">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group px-6 sm:px-8 py-2 sm:py-3 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 backdrop-blur-sm border border-white/10 rounded-full" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-400/30 to-rose-400/30 rounded-full" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
            <span className="relative z-10 text-white font-medium tracking-wide text-xs sm:text-sm md:text-base">
              Back to Home
            </span>
          </motion.button>
        </Link>
      </div>

      <div className="grid bg-[#030303] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
        {experts.map((expert, index) => (
          <motion.div
            key={expert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 },
            }}
            className="h-full"
          >
            <Card className="h-full overflow-hidden bg-gray-900 border-gray-800 relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${expert.cardStyle} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
              />

              <div className="relative p-3 sm:p-4 flex flex-col h-full">
                <div className="relative w-full mb-3 sm:mb-4 overflow-hidden aspect-[4/3]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover rounded-lg transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <CardContent className="p-0 flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base font-medium mb-1 sm:mb-2">
                    {expert.title}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {expert.description}
                  </p>
                </CardContent>

                <CardFooter className="p-0 pt-3 sm:pt-4">
                  <motion.button
                    onClick={() => handleExpertClick(expert.chatPath)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${expert.buttonStyle} text-white text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-md w-full transition-colors duration-300`}
                  >
                    Start conversation
                  </motion.button>
                </CardFooter>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-80">
        {" "}
        <Footer />
      </div>
    </div>
  );
};