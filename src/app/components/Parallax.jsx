"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Press_Start_2P, Pixelify_Sans } from "next/font/google";
import './ellipse.css'

const presstart = Press_Start_2P({   
    subsets: ['latin'],
    weight: '400', 
})

const pixel = Pixelify_Sans({   
    subsets: ['latin'], 
})

function Parallax() {

    const [background, setBackground] = useState(20)

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
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
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


    return (
        <div className="">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#f0c721, #de7a23 ${background}%, #7F5938, #18110f)` }} className='h-[110vh] w-[100%] relative'>
                <img ref={frontlayer} className='absolute w-[100%] z-[23] bottom-[-81px]' src="/images/bgpics/layer-1.svg" />
                <img ref={midlayer} className='absolute w-[100%] z-[22] bottom-[-870px]' src="/images/bgpics/layer-22.svg" />
                <img ref={backlayer} className='absolute w-[100%] z-[21] bottom-[-1000px]' src="/images/bgpics/layer-3.svg" />
                <div ref={copy} className="absolute bottom-[0%] left-[50%] transform translate-x-[-50%] translate-y-[200%]  z-[24] flex justify-center items-center text-center flex-col opacity-0">
                    <h1 className={`${presstart.className} text-[#FFFDD0] text-6xl`}>Sobenna Onwumelu</h1>
                    <span className={`${pixel.className} p-[1rem] rounded-[0.5rem] `}>
                        <span className="loading">Now Loading</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Parallax