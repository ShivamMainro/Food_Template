import React from 'react'
import './Chef_pf.css'

const Chef_pf = (props) => {
  return (
    <div>
        <div className={`chef_panel`}>
            <img src={props.src} alt="" />
            <div className="ctitle">{props.title}</div>
            <div className="cdesc">{props.desc}</div>
        </div>
    </div>
  )
}

export default Chef_pf