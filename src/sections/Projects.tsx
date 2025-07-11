import darkSaasLandingPage from "@/assets/images/deacons.png";
import lightSaasLandingPage from "@/assets/images/affilaite.png";
import grainImge from "@/assets/images/grain.jpg";
import CheckBox from '@/assets/icons/check-circle.svg';
import ArrowUp from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from "@/components/SectionHeader";
import Image from 'next/image';
import { ScrollAnimation } from "@/components/ScrollAnimation";


const portfolioProjects = [
  {
    company: "Deacons Publishers Ltd",
    year: "2024",
    title: "Deacons Publishers Official Page",
    results: [
      { title: "Responsive PHP/JS site" },
      { title: "Career application system" },
      { title: "App download page" },
      { title: "UI/UX enhancements" },
      { title: "SEO-optimized routing" }
    ],
    link: "https://deaconspublishers.ng/",
    image: darkSaasLandingPage,
  },
  {
    company: "Deacons Publishers Ltd",
    year: "2024",
    title: "Affiliate Sales Management System",
    results: [
      { title: "Auto order tracking" },
      { title: "Dynamic 70/30 commissions" },
      { title: "Central admin controls" },
      { title: "Real-time revenue updates" },
      { title: "Secure database" },
    ],
    link: "https://affiliate1.mommacare.com.ng",
    image: lightSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className={"pb-16 mt-20 pt-10 lg:py-24"} id="project">
      <div className={"container"}>
        <ScrollAnimation>
          <SectionHeader
            eyebrow="Real-world Results"
            title="Featured Projects"
            description="See how I transformed concepts into engaging digital experiences."
          />
          <div className={" md:mt-20 flex flex-col mt-10 gap-20"}>
            {portfolioProjects.map((project, projectIndex) => (
              <div
                key={project.title}
                className={
                  "mt-5 bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 md:pt-12 md:px-10 pt-8 lg:pt-16 lg:px-20 after:pointer-events-none sticky"
                }
                style={{
                  top: `calc(${projectIndex * 50}px + 45px)`
                }}
              >
                <div className={"absolute inset-0 -z-10 opacity-5"} style={{
                  backgroundImage: `url(${grainImge.src})`,
                }}></div>
                <div className={"lg:grid lg:grid-cols-2 lg:gap-16 "}>
                  <div className={"lg:pb-16"}>
                    <div className={"bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"}>
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className={"font-serif size-2xl mt-2 md:mt-5 md:text-4xl"}>{project.title}</h3>
                    <hr className={"border-t-2 border-white/5 mt-4 md:mt-5"} />
                    <ul className={"flex flex-col gap-4 mt-4 md:mt-5"}>
                      {project.results.map((result, index) => (
                        <li
                          key={`${project.title}-result-${index}`}
                          className={"flex gap-2 text-sm md:text-base text-white/50"}
                        >
                          <CheckBox className={"size-5 md:size-6"} />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link}>

                      <button className={"bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"}>
                        <span>Visit Live Site</span>
                        <ArrowUp className={"size-4"} />
                      </button>
                    </a>
                  </div>
                  <div className={"relative"}>
                    <Image src={project.image} alt={project.title} className={"mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
