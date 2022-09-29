import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './css/App.scss';
import './css/owl.theme.default.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./screens/Home";
import ErrorPage from "./screens/404";
import SingleWork from "./screens/SingleWork";
import Portfolio from "./screens/Portfolio";
import {Container} from "react-bootstrap";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
    return (
        <div className="App common-bg" style={{
            maxWidth: '100vw',
            minHeight: '100vh',
        }}>
            <BrowserRouter>
                <Header/>
                <Container fluid className={'px-0 common-bg'} style={{
                    minHeight: '100%',

                }}><Routes>
                    <Route element={<Home/>} path={'/'}/>
                    <Route element={<Portfolio/>} path={'/portfolio'}/>
                    <Route path={'/portfolio/:id'} element={<SingleWork/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>

                </Routes></Container>
                <Footer/>

            </BrowserRouter>
        </div>
    );
}

export default App;
