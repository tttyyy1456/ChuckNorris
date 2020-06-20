import React from 'react';
import tachyons from 'tachyons';
import './App.css';

class App extends React.Component{

constructor(){
	super();
	this.state = {
		joke:""
	};
	this.pressButton = this.pressButton.bind(this)
}


pressButton(){
	fetch('https://api.chucknorris.io/jokes/random')
	.then(response => response.json())
	.then(randomJoke=> this.setState({joke: randomJoke.value}))
}


	render(){
		return(
			<div className ='tc ttu tracked'>
				<div className ='grow pointer ma2'>
					<img alt ='chucknorris' src = "https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"></img>
				</div>
					<p className='f4 w-60 mv5'>{this.state.joke}</p>
				<div id='b'>
					<button className= 'tc pointer pa2' onClick = {this.pressButton}>
					Generate a joke

					</button>
				</div>

			</div>

			)
	}

}

export default App;