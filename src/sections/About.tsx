"use client";
import React, { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import BookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import PhpIcon from "../assets/icons/php.svg";
import JavascriptIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import ChromeIcon from "../assets/icons/chrome.svg";
import GithubIcon from "../assets/icons/github.svg";
import MapImage from "../assets/images/map.png";
import SmileEmoji from "../assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import Head from 'next/head';
import { ScrollAnimation } from "@/components/ScrollAnimation";

const toolboxItems = [
  {
    name: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    name: 'PHP',
    iconType: PhpIcon,
  },
  {
    name: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    name: 'CSS3',
    iconType: CssIcon,
  },
  {
    name: 'React',
    iconType: ReactIcon,
  },
  {
    name: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    name: 'Github',
    iconType: GithubIcon,
  },
]

const hobbies = [
  {
    title: 'Browsing',
    emoji: '🌐',
    left: "5%",
    top: "5%",
  },
  {
    title: 'Photography',
    emoji: '📸',
    left: "50%",
    top: "5%",
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "10%",
    top: "35%",
  },
  {
    title: 'Coding',
    emoji: '💻',
    left: "35%",
    top: "40%",
  },
  {
    title: 'Music',
    emoji: '🎶',
    left: "70%",
    top: "45%",
  },
  {
    title: 'Fitness',
    emoji: '🏋️',
    left: "5%",
    top: "65%",
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "45%",
    top: "70%",
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <ScrollAnimation>
          <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Hey there! 👋 I'm Anthony Anso, a passionate web developer and a problem solver, dedicated to building impactful digital solutions. When not coding, you'll find me exploring tech trends or optimizing workflows ⚙️. Let's create something extraordinary together." />
        </ScrollAnimation>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[300px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[300px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the tecnologies and tools I used to craft digital experiencies." />
              <ToolboxItems items={toolboxItems} itemsWrapperClassname="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassname="animate-move-right [animation-duration:15s]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-5 gap-8">
            <Card className="h-[300px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="My Hobbies" description="Explore my interests and hobbies beyound the digital realm." classname="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title}
                    className={"inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"}
                    style={{
                      left: hobby.left, top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    whileDrag={{ scale: 1.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[300px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={MapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-grey-950/30 after:blur-sm">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={SmileEmoji} alt="Smile Emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};