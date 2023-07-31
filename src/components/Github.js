import React from 'react'
import {AiFillGithub} from "react-icons/ai"
export const Github = () => {
  const github = () => {
    window.open("https://github.com/EnessOz")
  }
  return (
    <div>
      <button onClick={github} title='Github'><AiFillGithub/></button>
    </div>
  )
}
