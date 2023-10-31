import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";
function HelloPage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/auth');
    };


    return (<div>
        <Header />
        <main>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-6 wrapper text-center'>
                    <h1>Gift Certificates</h1>
                    <button className="btn btn-primary" onClick={handleButtonClick}>Go to authpage </button >
                </div>
                <div className='col-3'></div>
            </div>
        </main>
        <Footer />
    </div>);
}

export default HelloPage;