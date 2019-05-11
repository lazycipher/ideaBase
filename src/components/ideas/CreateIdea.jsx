import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIdea } from '../../store/actions/ideaActions';
import { Redirect } from 'react-router-dom';

class CreateIdea extends Component {
    state = {
        title: '',
        desc: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createIdea(this.state);
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
        <div style={{marginTop: "15vh"}} className="row">
            <div className="col s12 m8 offset-m2 z-depth-3">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Post Idea</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="desc">Description</label>
                        <textarea id="desc" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field center">
                        <button className="waves-effect waves-light btn-large blue darken-4 z-depth-2">Share Idea <i class="material-icons right">add_circle</i></button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createIdea: (idea) => dispatch(createIdea(idea))
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(CreateIdea)
