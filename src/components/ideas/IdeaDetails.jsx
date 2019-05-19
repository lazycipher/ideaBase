import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const IdeaDetails = (props) => {
    const { idea, auth } = props;
    if(!auth.uid) return <Redirect to="/signin" />
    if( idea ) {
        return (
            <div style={{borderRadius: "25px", marginTop: "15vh", marginBottom: "15vh"}} className="container section z-depth-2 white">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title text-black ">{idea.title}</span>
                    <p>{ idea.desc }</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>by {idea.authorFName} {idea.authorLName}</div>
                    <div>{ moment(idea.createdAt.toDate()).calendar() }</div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
                <div className="container center">
                    <p>Loading Details</p>
                </div>
            )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const ideas = state.firestore.data.ideas;
    const idea = ideas ? ideas[id] : null;
    return {
        idea: idea,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'ideas'}
    ])
)(IdeaDetails)

