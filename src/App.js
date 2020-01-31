import React, { Component } from 'react';
import QuestionList from './components/question_list';
import ScoreBox from './components/score_box';
import Results from './components/results';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1, 
          text: 'What is your name?',
          choices: [
            {
                id: 'a',
                text: 'Ryann'
            },
            {
                id: 'b',
                text: 'Ryen'
            },
            {
                id: 'c',
                text: 'Ryan'
            }
          ],
          correct: 'c'
        },
        {
          id: 2, 
          text: 'What is your mothers name?',
          choices: [
            {
                id: 'a',
                text: 'Brooke'
            },
            {
                id: 'b',
                text: 'Susie'
            },
            {
                id: 'c',
                text: 'Chloe'
            }
          ],
          correct: 'a'
        },
        {
          id: 3, 
          text: 'What is your father\'s name?',
          choices: [
            {
                id: 'a',
                text: 'Bobby'
            },
            {
                id: 'b',
                text: 'Kevin'
            },
            {
                id: 'c',
                text: 'Rich'
            }
          ],
          correct: 'b'
        },
        {
          id: 4, 
          text: 'What is your idiot friends name?',
          choices: [
            {
                id: 'a',
                text: 'John'
            },
            {
                id: 'b',
                text: 'Paul'
            },
            {
                id: 'c',
                text: 'Sam'
            }
          ],
          correct: 'c'
        },
      ],
      score: 0,
      current: 1
    }
  }

 

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }

  render() {

    let scorebox, results;
    
    if (this.state.current > this.state.questions.length) {
      scorebox = '';
      results = <Results {...this.state} />
    } else {
      scorebox = <ScoreBox {...this.state} />
      results = '';
    }

    return (
      <div>
        <h1>React Quiz</h1>
        <p className="lead">A simple quiz application written in React.js</p>
        <hr />
        {scorebox} 
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
        {results}
      </div>
    );
  }
}

export default App;
