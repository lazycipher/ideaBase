import React from 'react'
import moment from 'moment';

const IdeaSummary = ({ idea }) => {
  return(
    <div style={{borderRadius: "0 0 25px 25px"}} className="card z-depth-2 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title"><b>Idea</b>: {idea.title}</span>
            <p>by { idea.authorFName} {idea.authorLName}</p>
            <p className="grey-text">{ moment(idea.createdAt.toDate()).calendar() }</p>
        </div>
    </div>
  )
}

export default IdeaSummary;
