import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './css/App.scss';

import './css/owl.theme.default.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./screens/Home";
import ErrorPage from "./screens/404";
import Auction from "./screens/Auction";
import Search from "./screens/Search";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'*'} element={<ErrorPage/>}/>
                    <Route element={<Home/>} path={'/'}/>
                    <Route path={'/auction/:id'} element={<Auction/>}/>
                    <Route path={'/search/:keywords'} element={<Search/>}/>
                </Routes>
                <Footer/>

            </BrowserRouter>
        </div>
    );
}

export default App;
