import React from 'react'

// This is a card component.
function Card() {
  return (
    <div className='card'>
    <div className='icon'>

    </div>
    <h3>
        <a>Marketing Analysis</a>
    </h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
    </p>
    <a class="read-more-btn" href="/services/service-details/">Read More<i class="flaticon-right"></i></a>
</div>
  )
}

export default Card