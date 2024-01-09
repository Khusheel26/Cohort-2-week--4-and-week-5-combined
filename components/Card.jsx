import React, { useState } from 'react'

const Card = ({details}) => {
    
  return (
    
    <div>
    {details.map((user, index) => (
      <div key={index} className="card">
        <h2>Name:{user.name}</h2>
        <p>Description:{user.description}</p>
        <p>Interests: {user.interest}</p>
        <div className="social">
            {/* Buttons as links to social media handles */}
            <a
              href={`https://www.linkedin.com/${user.SocialMediaHandles.LinkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/${user.SocialMediaHandles.Twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>
          </div>
      </div>
    ))}
  </div>
      
    
  )
}

export default Card
