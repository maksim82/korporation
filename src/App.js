import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Chart from "./components/Chart/Chart";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="chart" element={<Chart />} />
            </Routes>
        </Router>
    );
}

export default App;