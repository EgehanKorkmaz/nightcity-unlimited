"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const TiltCard = ({ children, className, glowClass }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Hareketleri ağırlaştıran ve "oynaklığı" alan fizik ayarları
    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 40 });
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 40 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={cn(
                "relative flex flex-col group bg-cb-black/80 backdrop-blur-sm border border-white/10 p-4 transition-all duration-500",
                glowClass,
                className
            )}
        >
            <div style={{ transform: "translateZ(30px)" }} className="w-full h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
};