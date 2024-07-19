import React from 'react'
import '../components/our-services/services.css'

// This is a card component.
function Card(props) {
  return (
    <div className='card'>
    
    <h3>
        <a href={props.link}>{props.title}</a>
    </h3>
    <p>
      {props.content}
    </p>
    
    <a className="read-more-btn" href={props.link}>Read More<i className="flaticon-right"></i></a>
</div>
  )
}

export default Card