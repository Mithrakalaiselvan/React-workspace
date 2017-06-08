import React from 'react';

class App extends React.Component {
  constructor () {
    super();
    this.state ={
      txt:'This is the state txt',
      currentEvent:'---'
    }
    this.update = this.update.bind(this)
  }
  // update(e) {
  //   this.setState({txt:e.target.value})
  // }
  update(e){
    this.setState({
      currentEvent: e.target.value,
      txt:this.refs.wid.value
    })
  }
  render (){
    return (
      <div>
        <h1>{this.state.txt}</h1> 
        <input onChange={this.update.bind(this)} />
        <input onChange={this.update.bind(this)} />
        <input onChange={this.update.bind(this)} />
        <b>Bold</b>
        <Button> <Heart /> React</Button>
        <Title text="The Text" />
        <textarea cols="30" 
                  rows="10" 
                  onKeyPress={this.update}
                  onCopy={this.update}
                  onPaste={this.update}
                  onCut={this.update}
                  onFocus={this.update}
                  onBlur={this.update}
                  onDoubleClick={this.update}
                  onTouchStart={this.update}
                  onTouchMove={this.update}
                  onTouchEnd={this.update}
                  ref="area"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

/*Stateless component*/
// const Widget = (props) =>
//   <input type="text" onChange={props.update} />

const Button = (props) =>
  <button>{props.children}</button>

const Title = (props) =>
  <h1>Title: {props.text}</h1>

class Heart extends React.Component {
  render () {
    return <span>&hearts;</span>
  }
}
/*custome propTypes validation*/
Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return  new Error('missing ${propName}')
    }
    if(props[propName].length < 6){
      return new Error('${propName} was too short');
    }
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
/* const App = () => <h1>hello stateless</h1>*/

export default App
