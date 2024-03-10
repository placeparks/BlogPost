"use client"
import React from "react"
import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"

export default function Home() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut"
        }}
      className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Mirac.eth Blog
      </motion.h1>
      <p className=" font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Dive into a world of insights, stories, and ideas.<br/>Join us on a journey of discovery and inspiration.</p>

    </LampContainer>
  )
}
