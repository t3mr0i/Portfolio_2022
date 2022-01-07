import logo from './logo.svg';
import './index.css';
import Header from './Header';
import { motion } from "framer-motion"
import React from "react";
import ReactDOM from 'react-dom';


 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {val: "awesome"};
  }
  
  render() {
    return (
     <Header/>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
export default App;
