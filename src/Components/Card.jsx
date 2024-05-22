import "./Card.css"
// import PropTypes from 'prop-types'

import React from 'react'

const Card = (props) => {
  // const paraStyle = {
  //   color : {props.rang},
  // };

  return (
    <div>
        <div className={`card`}>
            <img src={props.src} alt="" />
            <div className="title" style={{color: props.rang_t}}>{props.title}</div>
            <div className="body" style={{color: props.rang_b}}>{props.body}</div>
            <div className="desc" style={{color: props.rang_d}}>{props.desc}</div>
        </div>
    </div>
  )
}



export default Card