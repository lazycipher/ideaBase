import React, { Component } from 'react'
import Notifications from './Notifications';
import IdeaList from '../ideas/IdeaList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        // console.log(this.props);
        const { ideas, auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        {/* Project List */}
                        <IdeaList ideas={ideas} />
                    </div>
                    <div className="col s112 m5 offset-m1">
                        {/* Notifications */}
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return{
        ideas: state.firestore.ordered.ideas,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'ideas'}
    ])
)(Dashboard);
