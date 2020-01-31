import React, { Component } from 'react';



class Results extends Component {

  render() {
  	const percent = this.props.score / this.props.questions.length * 100;
  	 
  	let message;
  	if (percent > 80) {
  		message = 'Awesome Job';
  	} else if (percent < 80 && percent > 60) {
  		message = "You did ok";
  	} else {
  		message = "Be a better person";
  	}

    return (
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/">Take Again</a>
      </div>
    );
  }
}

export default Results;
