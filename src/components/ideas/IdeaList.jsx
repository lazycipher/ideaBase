import React from 'react'
import IdeaSummary from './IdeaSummary';
import { Link } from 'react-router-dom';

const IdeaList = ({ ideas }) => {
  return(
      <div style={{paddingBottom: "0"}} className="project-list section z-depth-0">
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
