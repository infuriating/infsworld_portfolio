"use client";

import React, { useState } from "react";
import axios from "axios";
import { day, timezone } from "@/lib/Timezones";

export default function ContactEmbedded() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    medium: "",
    phone: "",
    message: "",
  });

  const [submittedInfo, setSubmittedInfo] = useState({
    name: "",
    medium: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const embeds = [
    {
      title: "🚀 New contact form submission",
      fields: [
        {
          name: "👤 Name",
          value: contactInfo.name,
        },
        {
          name: "📸 Medium",
          value: contactInfo.medium,
        },
        {
          name: "📞 Phone Number",
          value: contactInfo.phone,
        },
        {
          name: "🗨️ Message",
          value: contactInfo.message,
        },
      ],
      color: 0x1d1d1d,
      footer: {
        text: `Submitted on ${day} | ${timezone}`,
      },
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitted(true);
    axiosSubmit();

    setSubmittedInfo(contactInfo);
    setContactInfo({ name: "", medium: "", phone: "", message: "" });

    function axiosSubmit() {
      // @ts-ignore
      axios.post(
        "https://discord.com/api/webhooks/1146712820822581280/yGuDCVFNwPkJ-5NtNRxolr_FEu8B8mvuo4X2vOyR4kGmRB8tM_VezRPUCV_HwsNnBkRp",
        {
          embeds,
        }
      );
    }
  }

  return (
    <div className="flex flex-col w-[60%] ml-[20%]">
      {submitted && submittedInfo != null ? (
        <p className="text-2xl">
          Thanks for your submission,{" "}
          <span className="font-semibold text-neutral-400">
            {submittedInfo.name}
          </span>
        </p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 flex flex-col gap-4 md:mt-12">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 h-10 rounded-lg border-b-2 border-gray-500 bg-gray-700 bg-opacity-20 px-2 py-2 transition-all duration-500 ease-in-out focus:border-blue-500 focus:outline-none"
                  onChange={handleChange}
                  required
                  value={contactInfo.name}
                  min={3}
                  max={30}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="medium" className="font-semibold">
                  Your Medium{" "}
                  <span className="text-xs text-neutral-400">
                    (discord, twitter, email etc.)
                  </span>
                </label>
                <input
                  type="medium"
                  name="medium"
                  id="medium"
                  className="mt-1 h-10 rounded-lg border-b-2 border-gray-500 bg-gray-700 bg-opacity-20 px-2 transition-all duration-500 ease-in-out focus:border-blue-500 focus:outline-none"
                  onChange={handleChange}
                  required
                  value={contactInfo.medium}
                  min={3}
                  max={24}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-semibold">
                  Your Phone Number{" "}
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className="mt-1 h-10 rounded-lg border-b-2 border-gray-500 bg-gray-700 bg-opacity-20 px-2 transition-all duration-500 ease-in-out focus:border-blue-500 focus:outline-none"
                  onChange={handleChange}
                  required
                  value={contactInfo.phone}
                  min={3}
                  max={24}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  className="mt-1 h-40 resize-none rounded-lg border-b-2 border-gray-500 bg-gray-700 bg-opacity-20 px-2 py-2 transition-all duration-500 ease-in-out focus:border-blue-500 focus:outline-none"
                  // @ts-ignore
                  onChange={handleChange}
                  required
                  value={contactInfo.message}
                  max={500}
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-max rounded-xl bg-blue-500 bg-opacity-20 px-12 py-2 text-lg font-semibold shadow-lg transition-all duration-500 ease-in-out hover:bg-opacity-100"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
