import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './css/App.scss';

import './css/owl.theme.default.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./screens/Home";
import ErrorPage from "./screens/404";
import SingleWork from "./screens/SingleWork";
import Search from "./screens/Search";
import Portfolio from "./screens/Portfolio";
import {Container} from "react-bootstrap";
import About from "./screens/About";

function App() {
    return (
        <div className="App common-bg" style={{
            maxWidth: '100vw',
            minHeight: '100vh',
        }}>
            <BrowserRouter>
                <Header/>
                <Container fluid className={'px-0 common-bg mt-5 pt-3'} style={{
                    minHeight: '100%',

                }}><Routes>
                    <Route path={'*'} element={<ErrorPage/>}/>
                    <Route element={<Home/>} path={'/'}/>
                    <Route element={<Portfolio/>} path={'/portfolio'}/>
                    <Route path={'/portfolio/:id'} element={<SingleWork/>}/>
                    <Route path={'/search/:keywords'} element={<Search/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes></Container>
                <Footer/>

            </BrowserRouter>
        </div>
    );
}

export default App;
