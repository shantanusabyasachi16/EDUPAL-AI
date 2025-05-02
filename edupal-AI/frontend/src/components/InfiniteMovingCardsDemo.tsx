import { InfiniteMovingCards } from "../components/ui/movingCards";
import { motion } from "framer-motion";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem]  -mt-20 flex flex-col antialiased  bg-[#030303]   items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 p-5"
      >
        <motion.h2
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl p-2 mt-4 sm:mt-6 md:mt-8 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-[length:200%_100%] text-center w-full"
        >
          <div>Trusted By People</div>
          <div>Worldwide</div>
        </motion.h2>
      </motion.div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    author: {
      name: "David Chen",
      handle: "CS Undergrad",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "Went from failing data structures to acing exams thanks to the AI-powered code visualization tools.",
  },
  {
    author: {
      name: "Marcus Lee",
      handle: "CS Sophomore",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    },
    text: "The AI tutor identified gaps in my compiler knowledge I didn't know I had. Saved my semester!",
  },
  {
    author: {
      name: "Carlos Mendez",
      handle: "MS CS Student",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
    },
    text: "The AI research assistant helped me publish my first paper on neural networks while completing my master's.",
  },
  {
    author: {
      name: "Priya Kumar",
      handle: "Freshman CS",
      avatar:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face",
    },
    text: "As a complete beginner, the interactive Python tutor helped me build my first app in just 3 weeks!",
  },
  {
    author: {
      name: "Jamal Williams",
      handle: "CS Junior",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    text: "The algorithm practice platform helped me land a FAANG internship by mastering LeetCode patterns.",
  },
  {
    author: {
      name: "Yuki Tanaka",
      handle: "Game Dev Student",
      avatar:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
    },
    text: "Learned Unity shader programming through the AI mentor - now creating my own VR experiences!",
  },
  {
    author: {
      name: "Aisha Patel",
      handle: "PhD Candidate",
      avatar:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=150&h=150&fit=crop&crop=face",
    },
    text: "The ML debugging assistant cut my research time in half. Finally submitting my dissertation on time!",
  },
  {
    author: {
      name: "Ryan Park",
      handle: "Bootcamp Student",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    },
    text: "Career-switcher to SWE in 6 months thanks to the personalized full-stack curriculum.",
  },
  {
    author: {
      name: "Sophie Martin",
      handle: "CS Freshman",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    },
    text: "Was struggling with Java OOP concepts until the AI tutor broke it down perfectly for my learning style.",
  },
  {
    author: {
      name: "Tyler Nguyen",
      handle: "Senior CS",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face",
    },
    text: "Used the system design simulator to prepare for interviews - got 5 job offers with $120k+ salaries!",
  },
  // 3 Tutor Examples (20%)
  {
    author: {
      name: "Emma Johnson",
      handle: "Algorithm Professor",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "My students' exam averages increased 15% after adopting this platform's AI teaching assistants.",
  },
  {
    author: {
      name: "James Wilson",
      handle: "Systems TA",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=face",
    },
    text: "The automated code review AI helps me provide better feedback to 100+ students each semester.",
  },
  {
    author: {
      name: "Dr. Sofia Rodriguez",
      handle: "ML Professor",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Revolutionized my graduate courses with AI-generated research problem sets tailored to each student.",
  },
];
