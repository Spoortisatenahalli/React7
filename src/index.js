import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './Component/Detail';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Student from './Component/Student';
import { Contact } from './Component/Contact';
import AddStudent from './Component/AddStudent';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Detail>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/student' element={<Student />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/add-student' element={<AddStudent />} />
            </Routes>
        </BrowserRouter>
    </Detail>




);


