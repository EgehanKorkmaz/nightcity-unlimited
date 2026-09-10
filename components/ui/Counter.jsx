"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function Counter({ value, suffix = "+" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Sayıyı ayrıştır (örn: "10+" -> 10)
    const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
    const extraText = value.replace(/[0-9]/g, ""); // Varsa ek metinler

    useEffect(() => {
        if (!isInView) return;

        let startTime = null;
        const duration = 2000; // 2 saniyede tamamlansın

        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // EaseOut Quartic formülü ile pürüzsüz yavaşlama hissi
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easeProgress * numericValue));

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                setCount(numericValue);
            }
        };

        requestAnimationFrame(animateCount);
    }, [isInView, numericValue]);

    return (
        <span ref={ref} className="inline-block">
            {count}{extraText}
        </span>
    );
}