"use client";
import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="text-center mb-28 sm:mb-0 max-w-[50rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1709037813912-f2b0cfa924e4?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white objet-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Ricardo.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 shadow-lg shadow-gray-300 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me Here
          <BsArrowRight className="group-hover:translate-x-1 opacity-70 transition" />
        </Link>
        <a
          className="cursor-pointer border border-black/10 group bg-white rounded-full flex items-center gap-2 px-7 py-3 focus:scale-110 hover:scale-110 active:scale-105 transition"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 opacity-60 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/inu-jung-b80054219/"
          target="_blank"
          className="cursor-pointer bg-white rounded-full border border-black/10 flex items-center text-gray-700 p-4 hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-50 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/inudev3"
          target="_blank"
          className="cursor-pointer bg-white rounded-full border border-black/10 flex text-[1.35rem] items-center text-gray-700 p-4 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-gray-50 active:scale-105 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
