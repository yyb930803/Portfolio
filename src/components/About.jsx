import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
          My name is
          {' '}
          <a href="https://www.linkedin.com/in/kaungmyatkyaw/" target="_blank" className={style.link} rel="noreferrer">Harry Griesberg</a>
          {' '}
          and I am a passionate software engineer specializing in delivering state-of-the-art software solutions in web development and blockchain space.
        </p>
        <p className={style.text}>As a senior web developer who has over 11 years of rich experience in Web development and can handle all of the web applications with front-end & back-end and I can provide continuous support in the future.</p>
        <p className={style.text}>I am passionate about new-age technology. I care about most things that express value and uniqueness and Blockchain and AI is one of them.</p>
        <p className={style.text}>I possess excellent communication skills based on high English proficiency.</p>
        <p className={style.text}>My curiosity and enthusiasm fuel me to learn and try new things, allowing me to keep up to date in technology. And I look forward to working in challenging environments.</p>
        <p className={style.text}>Always I'm pursuing a Perfect Result, Clean code, and On-Time delivery as my goal.</p>
      </motion.div>
      <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Harry Griesberg" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
