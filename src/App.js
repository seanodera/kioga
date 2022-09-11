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
import Portfolio from "./screens/Portfolio";
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className="App" style={{
            maxWidth: '100vw',
            height: '100vh'
        }}>
            <BrowserRouter>
                <Header/>
                <Container fluid className={'px-0'} style={{
                    minHeight: '100%',

                }}><Routes>
                    <Route path={'*'} element={<ErrorPage/>}/>
                    <Route element={<Home/>} path={'/'}/>
                    <Route element={<Portfolio/>} path={'/portfolio'}/>
                    <Route path={'/auction/:id'} element={<Auction/>}/>
                    <Route path={'/search/:keywords'} element={<Search/>}/>
                </Routes></Container>
                <Footer/>

            </BrowserRouter>
        </div>
    );
}

export default App;
