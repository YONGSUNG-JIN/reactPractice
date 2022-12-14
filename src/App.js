import { 
  BrowserRouter as Router, 
  Routes, 
  Route } 
  from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail"
import styles from './App.module.css';


function App() {
return  <Router>
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} /> 
            <Route path={process.env.PUBLIC_URL + "/movie/:id"} element={<Home />} /> 
          </Routes>
        </Router>;
}


export default App;
