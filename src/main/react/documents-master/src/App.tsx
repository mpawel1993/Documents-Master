import React, {useState} from 'react';
import './App.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Footer} from "./footer/Footer";
import {Header} from "./header/Header";
import {Accordions} from "./accordions/Accordion";

function App() {

    return (
        <div className={"main_page"}>
            <Header/>
            <Accordions/>
            <Footer/>
        </div>
    );
}

export default App;
