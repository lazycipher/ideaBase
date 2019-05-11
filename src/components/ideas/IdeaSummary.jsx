import React from 'react'

const IdeaSummary = ({ idea }) => {
  return(
    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">Idea: {idea.title}</span>
            <p>Posted by Himanshu</p>
            <p className="grey-text">Posted on 3rd April 2AM</p>
        </div>
    </div>
  )
}

export default IdeaSummary;
