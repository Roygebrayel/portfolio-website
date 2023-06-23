import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import React from "react";
// import { render } from "../../backend/app";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }
  callApi(){
    fetch("http://localhost:7000/users")
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}));


  }
  componentWillMount(){
    this.callApi();

  }

render(){
    return (
      <>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
         <Route path="/project/:id" element={<ProjectDisplay/>} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
       <Footer />
      </Router>
    </div>
    <div>{this.state.apiResponse}</div>
     </>
  );
  
}

}

export default App;