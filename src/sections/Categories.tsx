"use client";
import { useState, useRef, useEffect } from 'react';
import { SectionHeader } from "@/components/SectionHeader";
import Modal from 'react-modal';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

{ /* Importing images for design projects */ }
import webImage1 from "@/assets/images/WofgaWebsite.png";
import webImage2 from "@/assets/images/Prep50AI.png";
import webImage3 from "@/assets/images/AIWrite.png";
import uiuxImage1 from "@/assets/images/my-first-design.png";
import uiuxImage2 from "@/assets/images/LANDING-PAGE.png";
import graphicImag2 from "@/assets/images/Cleaning-Service.png";
import graphicImag3 from "@/assets/images/wofga_logo.png";
import graphicImag4 from "@/assets/images/LuxeriousStoreDesign.png";
import graphicImag5 from "@/assets/images/Poster_on_the_floor.png";
import graphicImag6 from "@/assets/images/Chioma's_Birthday.png";
import graphicImag9 from "@/assets/images/RIDLES.png";
import graphicImag12 from "@/assets/images/MAIN_ONE.png";

type DesignProject = {
    id: number;
    title: string;
    category: string;
    image: typeof uiuxImage1;
    description: string;
    tags: string[];
    year: string;
    client: string;
    livePreview?: typeof uiuxImage1;
    link?: string;
};

const designProjects: DesignProject[] = [
    // --- Web Development Projects ---
    {
        id: 101,
        title: "Wofga Digital Official Webpage",
        category: "Web Development",
        image: webImage1,
        description: "A professional, responsive company website for Wofga Digital, built with Next.js and Tailwind CSS. Features a modern UI/UX, optimized performance, and seamless navigation for clients and partners. Currently under active development as a flagship digital presence.",
        tags: ["Next.js", "Tailwind CSS", "Corporate", "Company Website"],
        year: "2025",
        client: "Personal",
        link: "Coming Soon!"
    },
    {
        id: 102,
        title: "Prep50 AI Assistance",
        category: "Web Development",
        image: webImage2,
        description: "An advanced AI-powered learning platform for Prep50, providing personalized study support, real-time analytics, and a secure, scalable architecture. Designed to enhance learning outcomes and streamline educational management.",
        tags: ["AI", "Learning Platform", "React", "Node.js"],
        year: "2025",
        client: "Personal",
        link: "Coming Soon!"
    },
    {
        id: 103,
        title: "Note Vision AI",
        category: "Web Development",
        image: webImage3,
        description: "A productivity tool that leverages AI to transform handwritten or digital notes into Word, PDF, or text documents. Streamlines documentation for students and professionals, saving time and reducing manual effort.",
        tags: ["AI", "Productivity", "Automation"],
        year: "2025",
        client: "Personal",
        link: "Coming Soon!"
    },
    // --- End Web Development Projects ---
    {
        id: 1,
        title: "Fight Like a Champion",
        category: "UI/UX",
        image: uiuxImage1,
        description: "A web app design for a fitness community, focusing on user engagement and seamless navigation.",
        tags: ["Web App", "Figma", "User Flow"],
        year: "2023",
        client: "Boxchampy",
        livePreview: uiuxImage1,
        link: "https://www.figma.com/proto/aF5dtf9nvFO2HYfM12xKDc/my-first-design?node-id=0-1&t=rSfrWvXFrwWkuaJB-1"
    },
    {
        id: 2,
        title: "Deacons Publishers Landing Page",
        category: "UI/UX",
        image: uiuxImage2,
        description: "A modern landing page design for Deacons Publishers, showcasing their team and services.",
        tags: ["Landing Page", "Figma", "Responsive Design"],
        year: "2024",
        client: "Deacons Publishers Ltd",
        livePreview: uiuxImage2,
        link: "https://www.figma.com/proto/nQKt0FyC6BQgiRBHRmuC7m/Deacons-Publishers-website-UI-UX?node-id=1-2&t=yLSL9zicwjL2m7Dd-1"
    },
    {
        id: 3,
        title: "Cleaning Consultants",
        category: "Graphic Design",
        image: graphicImag2,
        description: "A vibrant promotional graphic for a cleaning service, designed to attract new clients through social media.",
        tags: ["Social Media", "Illustration", "Branding"],
        year: "2025",
        client: "JJ Square Triple",
    },
    {
        id: 4,
        title: "Wofga Digital Logo",
        category: "Graphic Design",
        image: graphicImag3,
        description: "A modern and professional logo designed for Wofga Digital Ent., reflecting their digital expertise and brand identity.",
        tags: ["Logo Design", "Branding", "Digital"],
        year: "2025",
        client: "Wofga Digital Ent.",
    },
    {
        id: 5,
        title: "Luxurious Store Design",
        category: "Graphic Design",
        image: graphicImag4,
        description: "A sleek and elegant store design graphic for Luxurious Store, showcasing their premium products and services.",
        tags: ["Store Design", "Branding", "Graphic"],
        year: "2025",
        client: "Ledgen Outfits",
    },
    {
        id: 6,
        title: "Child Dedication",
        category: "Graphic Design",
        image: graphicImag5,
        description: "A joyful and elegant invitation design for a child dedication event, capturing the significance of the occasion.",
        tags: ["Invitation", "Event", "Celebration"],
        year: "2025",
        client: "Mr. Victor Nsikan",
    },
    {
        id: 7,
        title: "Birthday Design",
        category: "Graphic Design",
        image: graphicImag6,
        description: "A vibrant and festive birthday graphic, tailored to celebrate a special day with style and color.",
        tags: ["Birthday", "Celebration", "Graphic"],
        year: "2025",
        client: "Deacons Publishers",
    },
    {
        id: 8,
        title: "Riddles Design",
        category: "Graphic Design",
        image: graphicImag9,
        description: "A fun and engaging design featuring riddles, aimed at boosting interaction on social media platforms.",
        tags: ["Social Media", "Engagement", "Graphic"],
        year: "2024",
        client: "Deacons Publishers",
    },
    {
        id: 9,
        title: "Prep50 Products Promotion",
        category: "Graphic Design",
        image: graphicImag12,
        description: "A promotional graphic for Prep50 products, designed to highlight features and encourage sales.",
        tags: ["E-commerce", "Promotion", "Graphic"],
        year: "2024",
        client: "Prep50",
    },
];

export const CategoriesSection = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = document.querySelector('body');
            if (root) {
                Modal.setAppElement(root);
            }
        }
    }, []);


    const [activeCategory, setActiveCategory] = useState('All');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof designProjects[number] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && event.target instanceof Node && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (modalIsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalIsOpen]);

    const openModal = (project: typeof designProjects[number], index: number) => {
        setSelectedProject(project);
        setCurrentImageIndex(index);
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    const navigateImage = (direction: 'next' | 'prev') => {
        const newIndex = direction === 'next'
            ? (currentImageIndex + 1) % filteredProjects.length
            : (currentImageIndex - 1 + filteredProjects.length) % filteredProjects.length;

        setCurrentImageIndex(newIndex);
        setSelectedProject(filteredProjects[newIndex]);
    };

    const filteredProjects = activeCategory === 'All'
        ? designProjects
        : designProjects.filter(project => project.category === activeCategory);

    return (
        <section id="categories" className="py-16 bg-gray-900/50 backdrop-blur-sm">
            <div className="container">
                <SectionHeader
                    eyebrow="Portfolio Showcase"
                    title="Design Excellence"
                    description="Top-notch design and development"
                />

                {        /* Category filter buttons */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {['All', 'UI/UX', 'Graphic Design', 'Web Development'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`relative px-4 py-2 font-medium transition-colors text-lg ${activeCategory === category
                                ? 'text-white'
                                : 'text-white/60 hover:text-white'
                                }`}
                        >
                            {category}
                            {activeCategory === category && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Projects grid with masonry effect on large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="relative group overflow-x-clip rounded-2xl border-2 border-white/20"
                        >
                            <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden rounded-2xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                                {/* Project info that slides up on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="inline-block px-2 py-1 rounded-md bg-white/10 text-white text-xs mb-2 backdrop-blur-sm">
                                                {project.category}
                                            </span>
                                            <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                        </div>
                                        <button
                                            onClick={() => openModal(project, index)}
                                            className="size-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
                                            aria-label="View project details"
                                        >
                                            <ArrowUpRight className="size-5 text-white" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-white/60 text-lg">No projects found in this category</p>
                    </div>
                )}
            </div>

            {/* Enhanced Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="bg-gray-900 rounded-xl max-w-6xl w-full mx-4 my-8 p-0 outline-none border border-white/10 shadow-2xl shadow-black/50"
                overlayClassName="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
                closeTimeoutMS={300}
            >
                <div ref={modalRef} className="relative">
                    {/* Navigation arrows */}
                    {filteredProjects.length > 1 && (
                        <>
                            <button
                                onClick={() => navigateImage('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 size-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full z-10 backdrop-blur-sm transition-colors"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="size-6 text-white" />
                            </button>
                            <button
                                onClick={() => navigateImage('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 size-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full z-10 backdrop-blur-sm transition-colors"
                                aria-label="Next project"
                            >
                                <ChevronRight className="size-6 text-white" />
                            </button>
                        </>
                    )}

                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 size-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full z-10 backdrop-blur-sm transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="size-6 text-white" />
                    </button>

                    {selectedProject && (
                        <>
                            <div className="aspect-video bg-gray-800 relative">
                                {/* Show either Figma embed or project image */}
                                <Image
                                    src={selectedProject.livePreview || selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                />
                            </div>

                            <div className="p-6 md:p-8 lg:p-10">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="lg:w-2/3">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full bg-gray-800 text-white text-sm">
                                                {selectedProject.category}
                                            </span>
                                            {selectedProject.tags?.map(tag => (
                                                <span key={tag} className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                            {selectedProject.title}
                                        </h2>

                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-white/80 text-lg">{selectedProject.description}</p>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/3 lg:pl-8 lg:border-l lg:border-white/10">
                                        <div className="space-y-6">
                                            {selectedProject.client && (
                                                <div>
                                                    <h4 className="text-white/60 text-sm uppercase tracking-wider mb-1">Client</h4>
                                                    <p className="text-white">{selectedProject.client}</p>
                                                </div>
                                            )}

                                            {selectedProject.year && (
                                                <div>
                                                    <h4 className="text-white/60 text-sm uppercase tracking-wider mb-1">Year</h4>
                                                    <p className="text-white">{selectedProject.year}</p>
                                                </div>
                                            )}

                                            {/* Show link button for projects with a link */}
                                            {selectedProject.link && (
                                                selectedProject.category === "Web Development" && selectedProject.link === "Coming Soon!" ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (typeof window !== 'undefined') {
                                                                import('react-hot-toast').then(({ toast }) => {
                                                                    toast.custom(
                                                                        (t) => (
                                                                            <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 px-6 py-4 rounded-lg shadow-lg">
                                                                                <span className="text-emerald-500 flex items-center gap-2">
                                                                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                                    </svg>
                                                                                    Coming Soon!
                                                                                </span>
                                                                            </div>
                                                                        ),
                                                                        { duration: 4000, position: 'top-center' }
                                                                    );
                                                                });
                                                            }
                                                        }}
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                                    >
                                                        <span>View Link</span>
                                                        <ArrowUpRight className="size-4" />
                                                    </button>
                                                ) : (
                                                    <a
                                                        href={selectedProject.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                                    >
                                                        <span>
                                                            View Prototype
                                                        </span>
                                                        <ArrowUpRight className="size-4" />
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </section>
    );
};
