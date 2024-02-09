"use client";

import React, {useState} from "react";
import {Github8BitIcon, GithubIcon, LinkedIn8BitIcon} from '../../../public/svgs';
import {LinkedInIcon} from '../../../public/svgs';
import Link from "next/link";
import Image from "next/image";
import { Orbitron, Press_Start_2P, Pixelify_Sans } from 'next/font/google';
import { motion } from "framer-motion";







const orbitron = Orbitron({
  subsets: ['latin'],
});

const presstart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
});

const pixel = Pixelify_Sans({
  subsets: ['latin'],
});

const shakeAnimation = {
  hover: { x: [0, -10, 10, -10, 10, 0] },
};

const SocialIcon = ({ href, children }) => (
  <Link href={href}>
    <motion.div
      className="cursor-pointer"
      whileHover="hover"
      variants={shakeAnimation}
    >
      {children}
    </motion.div>
  </Link>
);


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/send";

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSONdata,
  };
  const response = await fetch (endpoint, options);
  const resData = await response.json();
  console.log(resData);
  if (response.status === 200){
    console.log('Message sent.');
    setEmailSubmitted(true);
  };
}
  return (
    <section id = 'contact' className="grid md:grid-cols-2 my-12 relative md:my-12 py-24 gap-4">
      <div className="flex items-center justify-center">
        <div className="socials flex flex-row gap-2">
          <SocialIcon href="https://github.com/SobennaStory">
            <Github8BitIcon />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/sobenna">
            <LinkedIn8BitIcon />
          </SocialIcon>
        </div>
      </div>
      <div>
          <h2 className={`${pixel.className} text-4xl text-center text-white mt-4`}>
            Write to Me
          </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className={`${orbitron.className} text-white mb-2 block text-sm `}
            >
              Your Email
            </label>

            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="ben@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className={`${orbitron.className} text-white mb-2 block text-sm `}
            >
              Subject
            </label>

            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello Ben!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className={`${orbitron.className} text-white mb-2 block text-sm`}
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="I would like..."
              />
          </div>

          <button
            type="submit"
            className={`${orbitron.className} bg-primary-500 hover:bg-primary-600 text-white  py-2.5 px-5 rounded-lg w-full`}>
              Send Message
          </button>
          {
            emailSubmitted && (
              <p className={`${orbitron.className} text-green-500 text-sm mt-2`}>
                Email Sent Succesfully!
              </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
