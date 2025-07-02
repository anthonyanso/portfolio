"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface HeroOrbitProps {
    size: number;
    rotation: number;
    animationType?: "ping" | "slowspin" | "none" | "spin" | "pulse" | "bounce" | "orbit";
}

export const HeroOrbit = ({
    children,
    size,
    rotation,
    animationType = "none",
}: PropsWithChildren<HeroOrbitProps>) => {
    // Only apply framer-motion animation if animationType is "orbit"
    const isOrbit = animationType === "orbit";

    return (
        <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20"
            animate={isOrbit ? { rotate: 360 } : {}}
            initial={isOrbit ? { rotate: 0 } : {}}
            transition={isOrbit ? { repeat: Infinity, duration: 4, ease: "linear" } : {}}
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <div
                className="flex items-start justify-start"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    width: "100%",
                    height: "100%",
                }}
            >
                <div
                    className="inline-flex"
                    style={{
                        transform: `rotate(${-rotation}deg)`,
                    }}
                >
                    {children}
                </div>
            </div>
        </motion.div>
    );
};