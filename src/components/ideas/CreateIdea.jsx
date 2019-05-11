import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIdea } from '../../store/actions/ideaActions';


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
        // console.log(this.state);
        this.props.createIdea(this.state);
    }
    
    render() {
        return (
        <div className="container">
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
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Share Idea</button>
                </div>
            </form>
        </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createIdea: (idea) => dispatch(createIdea(idea))
    }
}

export default connect(null ,mapDispatchToProps)(CreateIdea)
