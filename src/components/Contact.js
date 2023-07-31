import React from 'react'
import {AiOutlinePhone, AiOutlineInstagram, AiFillGithub} from "react-icons/ai"
export const Contact = () => {
  const insta = () => {
    window.open("https://www.instagram.com/enesozmusic/")
  }
  const github = () => {
    window.open("https://github.com/EnessOz")
  }
  return (
    <div className='contact'>
    <button title='OFC I did not share my number (:'><AiOutlinePhone/></button>
    <button onClick={insta} title='Instagram'><AiOutlineInstagram/></button>
    <button onClick={github} title='Github'><AiFillGithub/></button>
    </div>
    
  )
}
