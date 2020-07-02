import React from 'react'
import Landing from './Landing'
import WordInputForm from './WordInputForm'
import { connect } from 'react-redux'
import Letter from './Letter'
import Alphabet from './Alphabet'


class App extends React.Component {
  createLetters = () => {
    let arr = []
    {for (var i = 0; i < this.props.magicWord.length; i++) {
      arr.push(<Letter key={i}/>)
    }}
    return arr
  }


  render() {
    
  return (
    <>
      <Landing/>
      {this.props.magicWord[0] === ''
      ? <WordInputForm/>
      // : <p>Ya dun good kid, ya dun good.</p>
      : this.createLetters()
      
      }
      <Alphabet />
    </>
  )
  }
}

function mapStateToProps(globalState) {
  return {
    magicWord: globalState.magicWord,
  }
}

export default connect(mapStateToProps)(App)
