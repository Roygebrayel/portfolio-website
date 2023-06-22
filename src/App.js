import { BrowserRouter as router, routes ,route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience';
import Project from './components/Project';
function App() {
  return (
    <div className="App">
      <router>
        <routes>

<route path="/" element={<Home />}/>  
<route path="/experience" element={<Experience />} />
<route path="/projects" element={<Project/>} />
      </routes>
      </router>
      
     
    </div>
  );
}

export default App;
