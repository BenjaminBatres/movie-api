
import Nav from "./components/Nav";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import FindYourMovie from "./pages/Find-your-movie";
import MovieInfo from "./pages/MovieInfo";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path=':search'  element={<FindYourMovie />} />
        <Route path='/movie/:id' exact element={<MovieInfo/>} />
        </Routes>
        {/* <Route path='/find-your-movie' exact component={FindYourMovie} /> */}
      </div>
    </Router>
  );
}

export default App;
