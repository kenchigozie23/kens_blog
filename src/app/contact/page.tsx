// import { Card } from "@/components/Card";
// import Section from "@/components/Section";
// import SimpleLayout from "@/components/SimpleLayout";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"

// const ToolsSection = ({
//   children,
//   ...props
// }: React.ComponentPropsWithoutRef<typeof Section>) => {
//   return (
//     <Section {...props}>
//       <ul role="list" className="space-y-16">
//         {children}
//       </ul>
//     </Section>
//   );
// };



const UsesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h1>
      <form action="https://getform.io/f/pagxzoeb" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
          name="Name"
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
          name="E-mail"
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
          name="Message"
            id="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-md transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default UsesPage;
