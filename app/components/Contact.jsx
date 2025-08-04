import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {

      const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a097afd-da53-4a1f-bd01-132e28207f58");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <h3 className='text-center mb-2 text-lg font-Ovo'>Get in Touch</h3>
      <h2 className='text-center text-5xl font-Ovo'>Contact Me</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form below, and I'll get back to you as soon as possible.
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='flex flex-col gap-4'>
          <input type='text' placeholder='Your Name' required className='border border-gray-300 rounded-md p-3' name='name'/>
          <input type='email' placeholder='Your Email' required className='border border-gray-300 rounded-md p-3' name='email'/>
          <textarea placeholder='Your Message' required className='border border-gray-300 rounded-md p-3 h-32' name='message'></textarea>
          <button type='submit' className='py-3 px-8 w-max  flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit
          <Image src={assets.right_arrow_white} alt="Arrow" className='w-4' />
          </button>
          <p className='mt-4'>{result}</p>
        </div>
      </form>
    </div>
  )
}

export default Contact