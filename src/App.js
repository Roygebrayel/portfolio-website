import { BrowserRouter as router, routes, route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <router>
        <Navbar />
        <routes>

          <route path="/" element={<Home />} />
          <route path="/experience" element={<Experience />} />
          <route path="/projects" element={<Project />} />
        </routes>
      </router>


    </div>
  );
}

export default App;
