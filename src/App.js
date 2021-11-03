import React from 'react'
import './App.css';

class App extends React.Component{
 
  
    state = {
      value: ''
    };

  handleChange = (e) =>{

    this.setState({value: e.target.value});

  }
  handleCount = (letter) =>{
    const array = this.state.value;
    let sum = 0;
    for(let i of array){
      if( i === letter){

        sum+= 1 ;

      }
    }
    return sum ;

  }


  render (){

    const arr = this.state.value;
    const unique = [...new Set(arr)]

  return (
    <main>

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Foldscope Challenge</span>
        </div>
      </nav>
      <div class="mb-3 divOne">
        <label for="exampleFormControlTextarea1" class="form-label labelOne">Type Something bellow</label>
        <textarea onChange={this.handleChange} value = {this.state.value} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

      <ol class="list-group list-group-numbered listOne">

      {unique.map((letter) =>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{letter}</div>
        </div>
        <span class="badge bg-primary rounded-pill">{this.handleCount(letter)}</span>
      </li>
      )}



         
      </ol>
      
  </main>
  );
}
}

export default App;
