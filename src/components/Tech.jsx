import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';
import {useContext} from 'react';
import { MobileContext } from '../App';
import {motion} from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';



const Tech = () => {
  const isMobile = useContext(MobileContext)
  return (
<>
<motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies,that i know and want to learn more </p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
<div className='flex flex-row justify-center flex-wrap gap-10'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28 animate-pulse' key={technology.name}>
          {isMobile? <img src={technology.icon}/>:<BallCanvas icon={technology.icon}/>}
        </div>
      ))}
    </div>
</>
  )
}

export default SectionWrapper(Tech,"tech");