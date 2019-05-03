import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      username : ''
    }
    
    this.updateInput = this.updateInput.bind(this);
    }
    
    
    updateInput(event){
      var amount = this.nameTextInput.value;
    var dollars; 
    var quarters; 
    var dimes; 
    var nickels; 
    var pennies; 
    
    var dollarRem; 
    var quarterRem; 
    var dimeRem; 
    var nickelRem;
    
    var final = []
    var dollarsbill
    var output=""
    
    amount = amount * 100;
    dollars = Math.floor (amount / 100);
    dollarRem = amount % 100; 
    quarters = Math.floor (dollarRem / 25);
    quarterRem = dollarRem % 25;
    
    dimes = Math.floor (quarterRem / 10);
    dimeRem = quarterRem % 10;
    nickels = Math.floor (dimeRem / 5);
    nickelRem = dimeRem % 5;
    pennies = nickelRem;
    
    while(dollars>0){
      if(parseInt(dollars)>=100){
        dollarsbill = 100
        final.push(dollarsbill)
        dollars = dollars%dollarsbill
      }else if(parseInt(dollars)>=50){
        dollarsbill = 50
        final.push(dollarsbill)
        dollars = dollars%dollarsbill
      }else if(parseInt(dollars)>=20){
        dollarsbill = 20
        final.push(dollarsbill)
        dollars = dollars%dollarsbill
      }else if(parseInt(dollars)>=10){
        dollarsbill = 10
        final.push(dollarsbill)
        dollars = dollars%dollarsbill
      }else if(parseInt(dollars)>=5){
        dollarsbill = 5
        final.push(dollarsbill)
        dollars = dollars%dollarsbill
      }else{
          final.push(dollars)
          break;
      }
    }
    for(var i=0;i<final.length; i++){
      output += `1 ${final[i]} dollar bill, `
    }
    if(quarters||dimes||nickels||pennies){
      output += `${parseInt(quarters)} quarters, ${parseInt(dimes)} dimes, ${parseInt(nickels)} nickles, ${parseInt(pennies)} pennies`
    }
    console.log(output)
    this.setState({username : output})
    }
    
    render(){
    return (
        <div>
        <div className="row">
          <div className="col-md-6 center">
            <input type="text" ref={(ref) => this.nameTextInput = ref}  onChange={this.updateInput} className="form-control" placeholder="enter value in dollar or cent"></input>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-8 center">
            <ListCountInfo username={this.state.username}/>
          </div>
        </div>
        </div>
      );
    }
}

class ListCountInfo extends React.Component {
  render (){
    return (
      <div className="row">
        <div className="col-md-8 center">
          <p className="pCenter">Your Change is {this.props.username} </p>
        </div>
      </div>
    );

}
}
export default App;


