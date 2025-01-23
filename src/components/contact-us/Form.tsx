"use client";
import { sendMessage } from "@/app/api/contact";
import React, { useState } from "react";

const classNames = {
  input:
    "px-6 py-5 rounded-3xl border-2 border-black text-xl leading-10 placeholder:text-black bg-transparent lg:py-7",
};

const initialState = {
  name: "",
  email: "",
  phone_number: "",
  message: "",
};

function Forms() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendMessage(formData);
      alert("Message sent successfully!");
      setFormData(initialState); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-y-4 lg:max-w-xl lg:flex-1"
      onSubmit={handleSubmit}
    >
      <input
        className={classNames.input}
        placeholder="Name"
        required
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className={classNames.input}
        placeholder="Email"
        required
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className={classNames.input}
        placeholder="Phone Number"
        required
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
      />
      <textarea
        cols={4}
        className={classNames.input}
        placeholder="Message"
        required
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="p-4 rounded-3xl self-start bg-red-500 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Contact Us"}
      </button>
    </form>
  );
}

export default Forms;
