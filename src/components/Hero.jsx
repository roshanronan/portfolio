import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
<section className='relative w-full h-screen mx-auto'>
  <div className={`${styles.paddingX} z-10 absolute inset-0 top-[95px] 
  max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className='flex flex-col items-center mt-5'>
      <div className='h-5 w-5 rounded-full bg-[#915eff]'/>
      <div className='sm:h-80 h-40 w-1 violet-gradient'/>
    </div>
<div>
    <h1 className={`${styles.heroHeadText} text-white`}>
      Hi,I am <span className='text-[#915eff]'>Roshan</span>
    </h1>
    <p className={`${styles.heroSubText}`}>
      I develop web application using react and angular,<br className='sm:block hidden'/> web crawler and web automation using latest technologies.
    </p>
</div>
  </div>
  <ComputersCanvas/>
  <div className='absolute xs:bottom-10 bottom-32 w-full flex
  justify-center items-center'>
    <a href="#about" className='z-10'>
      <div className='w-[35px]  h-[64px] rounded-3xl border-4
      border-secondary flex justify-center items-start p-2'>
        <motion.div 
         animate={{y:[0,24,0]}}
         transition={{
          duration:1.5,
          repeat:Infinity,
          repeatType:'loop'
         }}
         className='w-3 h-3 rounded-full bg-red-500 mb-1'
        />
      </div>
    </a>
  </div>
</section>
  )
}

export default Hero