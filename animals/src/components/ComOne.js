import React from 'react';
import './ComOne.css';
import { Button } from './Button';

const ComOne = ( { people, deletePeople, copyPeople } ) => {
    const peopleList = people.map(person => {
        return (
            <div className="comOne" key={ person.id }>
                <section className='values'>
                    <div>Name: { person.name }</div>
                    <div>Last Name: { person.lastName }</div>
                    <div>Age: { person.age }</div>
                </section>
                <section className='controls'>
                    <Button 
                        onClick={ () => { copyPeople( person.id ) } }
                        buttonSize='btn--medium'
                        buttonStyle='btn--primary--solid'
                    >Make Copy
                    </Button>
                    <Button 
                        onClick={ () => { deletePeople( person.id ) } }
                        buttonSize='btn--medium'
                        buttonStyle='btn--danger--solid'
                    >Delete
                    </Button>
                </section>
            </div>
        )
    })
    return(
        <div className="people-list">
            { peopleList }
        </div>
    ) 
}

export default ComOne;