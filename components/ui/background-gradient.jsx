"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "5, 5, 5",
    gradientBackgroundEnd = "10, 10, 15",
    firstColor = "0, 240, 255",
    secondColor = "252, 238, 10",
    thirdColor = "206, 43, 47",
    fourthColor = "0, 240, 255",
    fifthColor = "252, 238, 10",
    pointerColor = "206, 43, 47", // Kırmızı mouse takipçisi
    size = "50vw",
    blendingValue = "hard-light",
    children,
    className,
    interactive = true,
    containerClassName,
}) => {
    const interactiveRef = useRef(null);

    const curX = useRef(0);
    const curY = useRef(0);
    const tgX = useRef(0);
    const tgY = useRef(0);

    useEffect(() => {
        document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
        document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, [
        gradientBackgroundStart, gradientBackgroundEnd, firstColor, secondColor,
        thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue
    ]);

    // Mouse pozisyonunu global window üzerinden dinliyoruz
    useEffect(() => {
        const handleMouseMove = (event) => {
            tgX.current = event.clientX;
            tgY.current = event.clientY;
        };

        if (interactive) {
            window.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [interactive]);

    useEffect(() => {
        let animationFrameId;
        const move = () => {
            if (interactiveRef.current) {
                curX.current = curX.current + (tgX.current - curX.current) / 20;
                curY.current = curY.current + (tgY.current - curY.current) / 20;

                // Mouse'u ortalamak için transform uyguluyoruz
                interactiveRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px) translate(-50%, -50%)`;
            }
            animationFrameId = requestAnimationFrame(move);
        };
        move();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    return (
        <div className={cn("w-full h-full absolute overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,rgb(var(--gradient-background-start)),rgb(var(--gradient-background-end)))]", containerClassName)}>
            <svg className="hidden">
                <defs>
                    {/* Ultrawide monitörler için kesilmeyi önleyen genişletilmiş sınırlar */}
                    <filter id="blurMe" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={cn("", className)}>{children}</div>
            <div className={cn("gradients-container h-full w-full blur-lg opacity-60", isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]")}>
                <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:center_center] animate-first opacity-100"></div>
                <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-400px)] animate-second opacity-100"></div>
                <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%+400px)] animate-third opacity-100"></div>
                <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"></div>
                <div className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"></div>
                {interactive && (
                    <div ref={interactiveRef} className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-[40%] h-[40%] top-0 left-0 opacity-70 pointer-events-none"></div>
                )}
            </div>
        </div>
    );
};