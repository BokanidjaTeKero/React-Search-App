import React, { Component } from 'react';
import './AddPeople.css';
import { Button } from './Button';

class AddPeople extends Component {
    state = {
        name: null,
        lastName: null,
        age: null
    }

    handleChange = ( e ) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        this.props.addPeople( this.state );
        this.setState({
            name: null,
            lastName: null,
            age: null
        })
    }

    render(){
        const { handler } = this.props;
        return (
            <div className='modal'>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' onChange={ this.handleChange } />
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' onChange={ this.handleChange } />
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' onChange={ this.handleChange } />
                    <section className='form-controls'>
                        <Button 
                            buttonSize='btn--large'
                            buttonStyle='btn--success--solid'
                        >Submit
                        </Button>
                        <Button 
                            onClick={ handler }
                            buttonSize='btn--large'
                            buttonStyle='btn--danger--solid'
                        >Cancel
                        </Button>
                    </section>
                </form>
            </div>
        )
    }
}

export default AddPeople;