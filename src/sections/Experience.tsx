import React from 'react';

export const ExperienceSection: React.FC = () => {
    return (
        <section className="py-16 lg:py-24 overflow-x-clip font-sans bg-[#0B1120] text-white">
            <div className="container mx-auto px-4 flex flex-wrap justify-between">
                {/* Left Column */}
                <div className="flex-1 min-w-[300px] mb-12 lg:mb-0">
                    <div className={"bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"}>
                        <h1 className='text-3xl font-bold mb-4 '>Experience</h1>
                    </div>
                    <div className="text-3xl text-sky-400 font-extrabold">3+</div>
                    <p className="mb-6 text-white/50">Years of experience.</p>
                    <div className="text-3xl text-sky-400 font-extrabold">20+</div>
                    <p className="text-white/50">Satisfied Clients.</p>
                </div>

                {/* Right Column */}
                <div className="flex-1 min-w-[300px] max-w-xl">
                    <div className={"bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text"}>
                        <h2 className='text-xl font-bold uppercase mb-2'>Problem Solver</h2>
                        <span>&bull;</span>
                    </div>
                    <p className="mb-4 leading-relaxed text-white/50">
                        I enjoy solving problems with clean, scalable solutions. I have a genuine passion for inspiring design.
                    </p>
                    <p className="leading-relaxed text-white/50">
                        I have a strong foundation in graphic and interactive design, and an interest in user-centred branding and
                        visual systems, understanding their potential within digital spaces.
                    </p>
                </div>
            </div>

            {/* Brand Logos */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
                <img src="https://cdn.simpleicons.org/google/BCBCBCF7" alt="Google" className="h-8 w-8" />
                <img src="https://cdn.simpleicons.org/facebook/BCBCBCF7" alt="Facebook" className="h-8 w-8" />
                <img src="https://cdn.simpleicons.org/spotify/BCBCBCF7" alt="Spotify" className="h-8 w-8" />
                <img src="https://cdn.simpleicons.org/nike/BCBCBCF7" alt="Nike" className="h-8 w-8" />
                <img src="https://cdn.simpleicons.org/slack/BCBCBCF7" alt="Slack" className="h-8 w-8" />
            </div>
        </section>
    );
};
