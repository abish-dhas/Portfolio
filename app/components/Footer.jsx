import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='text-center'>
            <Image src={assets.logo} alt='' width={144} height={40} className='mx-auto mb-2'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
                 <Image src={assets.mail_icon} alt='' className='w-6 '/>rajakumaradhas@gmail.com

            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Copyright © 2025 Abish. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target="_blank"  href="https://github.com/abish-dhas">GitHub
                        <Image src={assets.github_logo} alt="GitHub" className='w-7' />
                    </a>
                </li>
                <li>
                   <a  target="_blank" href="https://www.linkedin.com/in/a-b-i-z-h/">Linkedin
                    <Image src={assets.link_logo} alt="LinkedIn" className='w-7' />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/a_b_i_z_h/">Instagram
                        <Image src={assets.insta_logo} alt="Instagram" className='w-7' />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer