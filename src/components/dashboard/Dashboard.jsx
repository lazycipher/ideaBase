import React, { Component } from 'react'
import Notifications from './Notifications';
import IdeaList from '../ideas/IdeaList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        const { ideas, auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return(
            <div style={{marginTop: "5vh"}} className="dashboard container">
                <div className="row">
                    <div className="col s12 m7">
                        {/* Project List */}
                        <IdeaList ideas={ideas} />
                    </div>
                    <div className="col s12 m4 offset-m1">
                        {/* Notifications */}
                        <Notifications notifications={notifications} />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        ideas: state.firestore.ordered.ideas,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'ideas', orderBy: ['createdAt', 'desc']},
        { collection: 'notifications', limit: 10, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
