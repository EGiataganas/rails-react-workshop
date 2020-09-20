import React, { Component } from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

class Person extends Component {
	state={
		showingImage: false,
		incognitoImage: require(`../images/incognito`),
		guessWho: "Guess who"
	}

	toggleImage = () => {
		this.setState({ showingImage: !this.state.showingImage });
	  };
	
  
	getImg() {
	  let image = require(`../images/${this.props.showPerson.name
		.split(" ")
		.join("-")
		.toLowerCase()}.png`);
	  return image;
	}
  
	onShowImage = () => {
	  this.setState({ showingImage: !this.state.showingImage });
	};
  
	render() {
	  return (
		<Card
		style={{
			width: "18.5rem",
			backgroundColor: "transparent",
			boxShadow: "0px 0px 1px #373b44"
		  }}>
		  <Image src = {this.state.showingImage ? this.getImg() : this.state.incognitoImage} onClick={this.onShowImage}></Image>
		  <Card.Header>{this.state.showingImage ? this.props.showPerson.name : this.state.guessWho }</Card.Header>
		  <Card.Content extra>
      <a>
        <Icon name='user' />
        {this.props.showPerson.description}
      </a>
    </Card.Content>
		</Card>
	  );
	}
  }
  
  export default Person;