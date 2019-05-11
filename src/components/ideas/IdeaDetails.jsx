import React from 'react'

const IdeaDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Idea Title {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis neque minus totam voluptatum iusto amet? Voluptates eveniet laboriosam nostrum doloribus impedit, repudiandae consequuntur repellat iure, recusandae omnis temporibus, ullam sapiente!</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Idea by Himanshu</div>
                <div>2nd of April 2AM</div>
            </div>
        </div>
    </div>
  )
}

export default IdeaDetails

