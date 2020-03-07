import React, { Component } from 'react';
import './Header.css';
import { Button } from './Button';
import Logo from './assets/logo.png';

class Header extends Component {
   
    render() {
        const { handler, search, sortBy } = this.props;
        return(
            <div className='header-component'>
                <section className='search'>
                    <img src={ Logo } alt='logo' />
                    <input type='text' id='search' placeholder='Search ...' onChange={ search } />
                </section>
                <section className='header-btn-controls'>
                    <Button 
                        onClick={ handler }
                        buttonSize='btn--medium'
                        buttonStyle='btn--primary--solid'
                    >Add New User
                    </Button>
                    <Button 
                        onClick={ sortBy }
                        buttonSize='btn--medium'
                        buttonStyle='btn--primary--solid'
                    >Sort Users By Name
                    </Button>
                </section>
            </div>
        )
    } 
}

export default Header;