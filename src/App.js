import React,{Component} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
    }
  }
  componentDidMount(){
    fetch('https://raw.githubusercontent.com/Shiivani/product-db/master/products.json').
    then((Response)=>Response.json()).
    then((findresponse)=>{
      console.log(findresponse)
      this.setState({
        data: findresponse
      })
    })
  }
  render(){
    return (
      <div>
        {
          this.state.data.map((dynamicData,key)=>
            <div>
              <span>{dynamicData.brandName}</span>
              <img src ={dynamicData.imageUrl} alt={dynamicData.productName} />
            </div>
          )
        }
      </div>
    )
  }
}

export default App;
