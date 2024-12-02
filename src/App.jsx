import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator/Calculator.jsx'
import Weather from './Weather/Weather.jsx'
import Todo from './To-do/To-do.jsx'
import UserForm from './UserForm/UserForm.jsx'
import BBCnews from './BBCnews/BBCnews.jsx'
import MyWeb from './MyWeb/MyWeb';

export default function App() {
    
    return (
        <div>
            <div className='background' />
            <HashRouter>
                <Routes>
                    < Route path='/' Component={MyWeb}></ Route>
                    < Route path='/Weather' Component={Weather}></ Route>
                    < Route path='/Calculator' Component={Calculator}></ Route>
                    < Route path='/Todo' Component={Todo}></ Route>
                    < Route path='/UserForm' Component={UserForm}></ Route>
                    < Route path='/BBCnews' Component={BBCnews}></ Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

