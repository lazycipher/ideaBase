import React from 'react'
import IdeaSummary from './IdeaSummary';
import { Link } from 'react-router-dom';

const IdeaList = ({ ideas }) => {
  return(
      <div className="project-list section">
      { ideas && ideas.map(idea => {
        return(
          <Link to={'/idea/' + idea.id} key={idea.id}>
            <IdeaSummary idea={idea} />
          </Link>
        )
      })}
      </div>
  )
}

export default IdeaList;
