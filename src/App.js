import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        result : ''
      }
      this.calculateChange = this.calculateChange.bind(this);
    }
    
    
    calculateChange(event){
      var amount = this.valueDollar.value;
      var dollars,quarters,dimes,nickels,pennies,dollarRem,quarterRem,dimeRem,nickelRem,dollarsbill,r,b
      
      var final = []
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
        if(dollars>=100){
          dollarsbill = 100
          b = parseInt(dollars/100)
          for(var i=0;i<b;i++){
            final.push(dollarsbill)
          }
          r = parseInt(dollars%100)
          if(r!=0){
            dollars = r
          }else{
            break;
          }
          
        }else if(parseInt(dollars)>=50){
          dollarsbill = 50
          final.push(dollarsbill)
          dollars = dollars-dollarsbill
        }else if(parseInt(dollars)>=20){
          dollarsbill = 20
          final.push(dollarsbill)
          dollars = dollars-dollarsbill
        }else if(parseInt(dollars)>=10){
          dollarsbill = 10
          final.push(dollarsbill)
          dollars = dollars-dollarsbill
        }else if(parseInt(dollars)>=5){
          dollarsbill = 5
          final.push(dollarsbill)
          dollars = dollars-dollarsbill
        }else if(parseInt(dollars)>=1 && parseInt(dollars)<=4){
          dollarsbill = 1
          final.push(dollarsbill)
          dollars = dollars-dollarsbill
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
      this.setState({result : output})
    }
    
    render(){
    return (
        <div className="main-container">
          <div className="row">
            <div className="col-md-6 center">
              <h1 className="h1Center">Dollar Change</h1>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-6 center">
              <input type="text" ref={(ref) => this.valueDollar = ref}  onChange={this.calculateChange} className="form-control" placeholder="enter value in dollar or cent"></input>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-8 center">
              <ListCountInfo result={this.state.result}/>
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
          <p className="pCenter">Your Change is {this.props.result} </p>
        </div>
      </div>
    );

}
}
export default App;


