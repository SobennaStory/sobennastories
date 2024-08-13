"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Press_Start_2P, Pixelify_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import './ellipse.css'

const presstart = Press_Start_2P({   
    subsets: ['latin'],
    weight: '400', 
})

const pixel = Pixelify_Sans({   
    subsets: ['latin'], 
})


function Parallax() {

    const [background, setBackground] = useState(20);
    const [isLoading, setIsLoading] = useState(true);

    const parallaxRef = useRef(null);
    const backlayer= useRef(null);
    const midlayer = useRef(null);
    const frontlayer = useRef(null);
    const copy = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "2500 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                        if (self.progress > 0.9) {
                            setIsLoading(false);
                        } else {
                            setIsLoading(true);
                        }
                    },
                },
            });
            tl.to(
                frontlayer.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                midlayer.current,
                {
                    y: "-=890",
                },
                0
            );
            tl.to(
                backlayer.current,
                {
                    y: "-=1000",
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "-250%",
                    opacity: 1
                },
                0
            );
        });
        return () => ctx.revert();
    }, []);

    const handleClick = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#f0c721, #de7a23 ${background}%, #7F5938, #18110f)` }} className='h-[110vh] w-[100%] relative'>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
                <motion.div 
                    className="text-center cursor-pointer"
                    onClick={handleClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ transformOrigin: 'center center' }}
                >
                    <p className={`${presstart.className} text-[#FFFDD0] text-sm mb-2`}>Click me to scroll!</p>
                    <motion.div
                        animate={{
                            y: [0, 5, -2, 0],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="flex justify-center"
                    >
                        <ChevronDownIcon className="h-6 w-6 text-[#FFFDD0]" />
                    </motion.div>
                </motion.div>
            </div>
                <img ref={frontlayer} className='absolute w-[100%] z-[23] bottom-[-81px]' src="/images/bgpics/layer-1.svg" />
                <img ref={midlayer} className='absolute w-[100%] z-[22] bottom-[-870px]' src="/images/bgpics/layer-22.svg" />
                <img ref={backlayer} className='absolute w-[100%] z-[21] bottom-[-1000px]' src="/images/bgpics/layer-3.svg" />
                <div ref={copy} className="absolute bottom-[0%] left-[50%] transform translate-x-[-50%] translate-y-[200%]  z-[24] flex justify-center items-center text-center flex-col opacity-0">
                    <h1 className={`${presstart.className} text-[#FFFDD0] text-6xl`}>Sobenna Onwumelu</h1>
                    <span className={`${pixel.className} p-[1rem] rounded-[0.5rem] `}>
                        {isLoading ? (
                            <span className="loading">Now Loading</span>
                        ) : (
                            <span>Loaded. Enjoy!</span>
                        )}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Parallax