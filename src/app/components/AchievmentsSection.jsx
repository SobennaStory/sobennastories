"use client";

import React from 'react'
import dynamic from 'next/dynamic';

const AnimtedNumbers = dynamic(() => {return import("react-animated-numbers")}, {ssr: false});

const achievmentsList = [
    {
        metric: "Metric",
        value: "10",
        postfix: "+"
    },
    {
        prefix: "~",
        metric: "Metric2",
        value: "2",
    },
    {
        metric: "Metric3",
        value: "5",
    },
    {
        metric: "Metric4",
        value: "8",
        postfix: "+",
    },
]
const AchievmentsSection = () => {
  return (
    <div
        className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'
    >
        <div
            className='border-[#33353F border rounded-md py-8 px-16 flex flex-row items-center justify-between]'
        >
            {achievmentsList.map((achievment, index) => {
                return(
                    <div
                        key={index}
                        className= "flex flex-col items-center justify-center mx-4"
                        >
                        <h2 className='text-white text-4xl font-bold flex flex-row'>
                            {achievment.prefix}
                            <AnimtedNumbers
                                includeComma
                                animateToNumber={parseInt(achievment.value)}
                                locale="en-US"
                                className='text-white text-4xl font-bold'
                                configs={((_, index)=>{
                                    return {
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1),
                                    };
                                })}
                            />
                            {achievment.postfix}
                        </h2>
                        <p
                            className='text-[#ADB7BE] text-base'>
                            {achievment.metric}
                        </p>

                    </div>

                )

            })}
        </div>
    </div>
  )
}

export default AchievmentsSection