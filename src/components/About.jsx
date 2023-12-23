import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon})=>{
  return(
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)
      }
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"

        >
          <div options={{
            max:45,
            scale:1,
            speed:450
          }} 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", ",0.1,1")}
        className='mt-4 text-secondary test-[17px] max-2-3xl leading-[30px]'
      >
        I'm a versatile software engineer proficient in a spectrum of programming languages and frameworks, including Java with Spring Boot, Python with Django, and PHP with Laravel. My expertise spans across these tech stacks, allowing me to craft robust, scalable, and efficient solutions. With a solid foundation in Java, I excel in developing applications using Spring Boot, ensuring streamlined performance and reliability. Python with Django empowers me to create dynamic and high-quality web applications, while PHP with Laravel enables me to build elegant and maintainable projects. My experience in these diverse technologies equips me to navigate complex development challenges, delivering innovative and effective solutions across various domains.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(<ServiceCard key={service.title} index={index}{...service}/>))}
      
      </div>
    </>
  )
}

export default SectionWrapper(About,'about')