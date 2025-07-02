'use client';
import React from 'react';
import EmojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';
import GrainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import {HeroOrbit} from "@/components/HeroOrbit";

export const HeroSection = () => {
    return(
        <div className={"py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"} id='home'>
            <div className={"absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none"}>
                <div className={"absolute inset-0 -z-30 opacity-5"} style={{
                    backgroundImage: `url(${GrainImage.src})`
                }}></div>
                <div className={"size-[520px] hero-ring"}></div>
                <div className={"size-[720px] hero-ring"}></div>
                <div className={"size-[920px] hero-ring"}></div>
                <div className={"size-[1120px] hero-ring"}></div>
                <HeroOrbit size={700} rotation={-75}>
                    <StarIcon  className={"size-28 text-emerald-300/20 animate-spin [animation-duration:5s]"} />
                </HeroOrbit>
                <HeroOrbit size={450} rotation={20}>
                    <StarIcon  className={"size-12 text-emerald-300 animate-pulse"} />
                </HeroOrbit>
                <HeroOrbit size={490} rotation={98}>
                    <StarIcon  className={"size-8 text-emerald-300 animate-ping"} />
                </HeroOrbit>
                <HeroOrbit size={350} rotation={-14}>
                    <SparkleIcon  className={"size-8 text-emerald-300/20 animate-spin [animation-duration:3s]"} />
                </HeroOrbit>
                <HeroOrbit size={360} rotation={79}>
                    <SparkleIcon  className={"size-5 text-emerald-300/20 animate-spin"} />
                </HeroOrbit>
                <HeroOrbit size={430} rotation={178}>
                    <SparkleIcon  className={"size-10 text-emerald-300/20 animate-ping"} />
                </HeroOrbit>
                <HeroOrbit size={510} rotation={144}>
                    <SparkleIcon  className={"size-14 text-emerald-300/20 animate-pulse"} />
                </HeroOrbit>
                <HeroOrbit size={510} rotation={90}>
                    <div className={"size-3 rounded-full bg-emerald-300/20 animate-bounce"}></div>
                </HeroOrbit>
                <HeroOrbit size={420} rotation={-41}>
                    <div className={"size-2.5 rounded-full bg-emerald-300/20 animate-bounce"}></div>
                </HeroOrbit>
                <HeroOrbit size={550} rotation={-5}>
                    <div className={"size-2 rounded-full bg-emerald-300/20 animate-bounce"}></div>
                </HeroOrbit>
            </div>
            <div className={"container after:pointer-events-auto relative z-10"}>
                <div className={"flex flex-col items-center"}>
                    <Image
                        src={EmojiImage}
                        className={"size-[100px]"}
                        alt={"Person Peeking from behind laptop"}
                        draggable={false}
                    />
                    <div className={"bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"}>
                        <div className={"bg-green-500 size-2.5 rounded-full relative"}>
                            <div className={"bg-green-500 absolute inset-0 rounded-full animate-ping-large"}></div>
                        </div>
                        <div className={"text-sm font-medium select-text"}>Available for new projects</div>
                    </div>
                </div>
                <div className={"max-w-lg mx-auto"}>
                    <h1 className={"font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide select-text"}>
                        Building Exceptional User experiences
                    </h1>
                    <p className={"mt-4 text-center text-white/60 md:text-lg select-text"}>
                        I specialise in transforming designs into functional, high-performing web applications, Lets discuss your next project.
                    </p>
                </div>
                <div className={"flex flex-col md:flex-row justify-center items-center mt-8 gap-4"}>
                    <button
                        type="button"
                        className={"inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl after:pointer-events-none cursor-pointer"}
                        tabIndex={0}
                        onClick={() => {
                            const section = document.getElementById('categories');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <span className={"font-semibold select-none"}> Explore My WorK </span>
                        <ArrowDown className={"size-4"} />
                    </button>
                    <button
                        type="button"
                        className={"inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl after:pointer-events-none cursor-pointer"}
                        tabIndex={0}
                        onClick={() => {
                            const section = document.getElementById('contact');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <span>👋</span>
                        <span className={"font-semibold select-none"}>Lets Connect </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
