"use client";

import React, { useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const ContactMe = () => {
  const ref = useRef();

  const sentEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhx7yjq",
        "template_zwl94m7",
        ref.current,
        "7p9QWbUazD8Zh4Ztb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div>
        <h5 className="text-4xl font-bold my-2">let&apos;s Connect</h5>
        <p className="text-[#777] mb-4 max-w-md">
          I am available for freelance work.
        </p>
        <div className="social flex flex-row gap-5">
          <Link
            className="p-5 border border-white rounded-full hover:bg-sky-800"
            href="https://www.linkedin.com/in/lavanya-lakshmi-20b789257/"
            target="_blank">
            <LinkedInIcon className="text-4xl" />
          </Link>
          <Link
            className="p-5 border border-white rounded-full hover:text-black hover:bg-white"
            href="https://github.com/lakshmilavanya02?tab=repositories"
            target="_blank">
            <GitHubIcon className="text-4xl" />
          </Link>
        </div>
      </div>
      <div>
        <form
          ref={ref}
          onSubmit={sentEmail}
          className="flex flex-col gap-4"
          //  onSubmit={handelSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              type="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              className="text-white block mb-2 fost-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              name="name"
              placeholder="enter your name"
              className="bg-[#222] p-2.5 rounded-lg block w-full placeholder-pink-500 text-sm"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 fost-medium">
              Your Email
            </label>
            <input
              name="email"
              id="email"
              required
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="bg-[#222] p-2.5 rounded-lg block w-full placeholder-pink-500 text-sm"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 fost-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-stone-100 text-sm rounded-lg block w-full p-2.5"></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white py-2.5 w-full rounded-md text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
