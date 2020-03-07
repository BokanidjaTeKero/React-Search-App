import React, { Component } from 'react';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import Header from './components/Header';
import ComOne from './components/ComOne';
import AddPeople from './components/AddPeople';

class App extends Component {

  constructor(props) {
    super(props);

    this.handler = this.handler.bind( this );
    this.search = this.search.bind( this );
    this.sortBy = this.sortBy.bind( this );

    this.state = {
      searchedData: [],
      peoples: [
        { name: 'Nikola', age: 1, lastName: 'Tesla', id: 1},
        { name: 'Baz', age: 29, lastName: 'Kodi', id: 2},
        { name: 'Goku', age: 555, lastName: 'Sajonac', id: 3},
        { name: 'Dzoni', age: 34, lastName: 'Stulic', id: 4},
        { name: 'Ragnar', age: 700, lastName: 'Lotbrok', id: 5},
      ],
      show: false,
      direction: true
    }
  }

  componentDidMount() {
    this.setState({
      searchedData: this.state.peoples,
    })
  }

  sholudComponentUpdate( nextProps, nextState ) {
		if ( nextState.show !== this.state.show && nextState.peoples.length !== this.state.peoples.length ) {
			return true
		}
		return false
  }

  handler( e ) {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
  }

  search = ( e ) => {
    const word = e.target.value;
    const searchedData = this.state.peoples.filter( people => {
      return people.name.concat( people.lastName ).toLowerCase().includes( word.toLowerCase().trim() )
    })
    this.setState({
      searchedData: searchedData
    })
  }  

  addPeople = ( people ) => {
    people.id = Math.random();
    let peoples = [...this.state.peoples, people ];
    this.setState({
      peoples: peoples,
      searchedData: peoples,
      show: false
    })
  }

  deletePeople = (id) => {
    let peoples = this.state.peoples.filter( people => {
      return people.id !== id
    });
    this.setState({
      peoples: peoples,
      searchedData: peoples
    })
  }

  copyPeople = ( id ) => {
    let person = {};
    this.state.peoples.filter( people => {
      if(people.id === id) {
        person.name = people.name;
        person.lastName = people.lastName;
        person.age = people.age;
      }
      return person
    })
    person.id = Math.random();
    let newData = [...this.state.peoples, person ];
    this.setState({
      peoples: newData,
      searchedData: newData,
    })
  }
  
  sortBy() {
    const list = this.state.searchedData;
    const sorted = list;
    this.state.direction === true 
    ? list.sort( ( a , b ) => ( a.name > b.name ) ? 1 : -1)
    : list.sort( ( a , b ) => ( a.name < b.name ) ? 1 : -1)
    this.setState({
          searchedData: sorted,
          direction: !this.state.direction
        })
  }

  render() {
    const { show, searchedData } = this.state;
    return (
      <div className="App">
        <Header 
            handler={ this.handler }
            search={( e ) => this.search( e ) }
            sortBy={this.sortBy}
        />
        <LightSpeed left>
          <ComOne 
              deletePeople={ this.deletePeople } 
              copyPeople={ this.copyPeople } 
              people={ searchedData } 
          />
        </LightSpeed>  
        <Zoom top collapse when={show}>
          <AddPeople 
              addPeople={ this.addPeople }
              handler={ this.handler }
          />
        </Zoom>
      </div>
    );
  }
}

export default App;