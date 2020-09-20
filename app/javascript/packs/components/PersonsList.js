import React, { Component } from "react";
import Person from "./Person";
import { Card } from 'semantic-ui-react'

class PersonsList extends Component {
	Base_URL = "http://localhost:3000/hogs";
  
	constructor() {
	  super();
	  this.state = {
		persons: [
		 {name:"Anastasia Pankina", description: "love programming"},
		 {name:"Evangelos Giataganas", description: "love programming"},
		 {name:"Andrew White", description: "love programming"},
		 {name:"Celia Collins", description: "love programming"},
		 {name:"Ben Baumann", description: "love programming"},
		 {name:"Boris Divjak", description: "love programming"},
		 {name:"Claudia Hopkins", description: "love programming"}
		]
	  };
	}
  
  
	render() {
	  return (
		<Card.Group itemsPerRow={4}>

			{this.state.persons.map(person => {
				return (
					<Person showPerson={person} />
					)
			})}

		</Card.Group>
	  );
	}
  }
  
  export default PersonsList;