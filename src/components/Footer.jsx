import React from 'react';
import { socialNetworks } from '../constants';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';


const SocialCard =({logo,link,name})=>{
    return(
        <motion.div variants={slideIn('up','tween',0.75,1)}>
            <a href={link} target='_blank'>
                <img src={logo} alt={name}/>
            </a>
        </motion.div>
    )
}


const Footer =()=>{
    return(
<div className='flex flex-col bg-black-500 rounded-t-xl
 w-full justify-center p-2 items-center'>
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

        <div className='pb-8'>Made with 🧠 and 🧡 by Roshan</div>
</div>
    )
}


export default Footer;