
import './App.css';
import Inds from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Inds/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
