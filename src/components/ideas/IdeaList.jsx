import React from 'react'
import IdeaSummary from './IdeaSummary';

const IdeaList = ({ ideas }) => {
  return(
      <div className="project-list section">
      { ideas && ideas.map(idea => {
        return(
          <IdeaSummary idea={idea} key={idea.id} />
        )
      })}
      </div>
  )
}

export default IdeaList;
