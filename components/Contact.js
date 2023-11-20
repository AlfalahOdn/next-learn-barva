"use client";

import { useState } from "react";

const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);
    }

  return (
    
    <>
      <form
        onSubmit={handleSubmit}
        className="py-6 px-2 mt-4 mb-10 border-t flex flex-col mx-auto gap-5  bg-slate-50"
      >
        <div>
          <label htmlFor="fullname" >Full Name</label>
          <input className="px-2"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" >Email</label>
          <input className="px-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message" >Your Message</label>
          <textarea 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32 px-2"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 mx-10 rounded-full text-white font-bold" type="submit">
          Send
        </button>
      </form>

    </>
  )
}

export default Contact