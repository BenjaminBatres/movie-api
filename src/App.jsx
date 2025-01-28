
import Nav from "./components/Nav";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:id' element={<Search />} />
        <Route path='/movie/:id' element={<Movie/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
