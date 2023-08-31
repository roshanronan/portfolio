import React from 'react';
import { socialNetworks } from '../constants';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';


const SocialCard =({logo,link,name})=>{
    return(
        <motion.div variants={slideIn('up','tween',0.75,1)}>
            <a className='hover:animate-pulse' href={link} target='_blank'>
                <img src={logo} alt={name}/>
            </a>
        </motion.div>
    )
}

// className='w-full green-pink-gradient p-[1px] rounded-[20px]
    // shodow-card'

const Footer =()=>{
    return(
        <div className='green-pink-gradient shodow-card mx-10 p-[1px] rounded-t-xl '>
<div className='flex flex-col bg-black rounded-t-xl
 w-full justify-center items-center '>
    <p className="mt-8 text-lg font-bold text-violet-700"> More about me ✨🐱‍🏍 </p>
        <div className='flex 
        justify-center p-10 gap-4
        '>
           
{socialNetworks.map((socialNetwork,index)=>{
    return(
        <SocialCard key={index} {...socialNetwork}/>
    )
})}

        </div>

        <div className='pb-8'>Made with <span className='animate-pulse'>🧠</span> and <span className='animate-ping'>🧡</span> by Roshan</div>
</div>
</div>
    )
}


export default Footer;