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


     
     const array = this.state.value;
     const uniqueLetters = [...new Set(array)];
 
     let result = [];
     let classes = 'badge bg-primary rounded-pill';
 
     for(let letter of uniqueLetters){
 
       let container = {
         letter : letter,
         count : 0
       }
 
           for(let i = 0;i <= array.length;i++){
 
             if(letter === array[i]){
               container.count+=1;
             }
         }
 
       result.push(container);
       
     }
 
     
 
           const sorted = result.sort((a, b) => {
             return b.count - a.count;
         });

         const topFive = sorted.slice(0,5);
         const rest = sorted.slice(5);

  return (
    <main>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">My tool v1.0</span>
        </div>
      </nav>
      <div className="mb-3 divOne">
        <label for="exampleFormControlTextarea1" class="form-label labelOne">Type Something bellow</label>
        <textarea onChange={this.handleChange} value = {this.state.value} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>

      <ol className="list-group list-group-numbered listOne">

      {topFive.map((letter) =>
        <li className="list-group-item list-group-item-info border d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{letter.letter}</div>
        </div>
        <span className='badge bg-info rounded-pill'>{this.handleCount(letter.letter)}</span>
      </li>
      )}

      {rest.map((letter) =>
        <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{letter.letter}</div>
        </div>
        <span className="badge bg-info rounded-pill">{this.handleCount(letter.letter)}</span>
      </li>
      )}



         
      </ol>
      
  </main>
  );
}
}

export default App;
