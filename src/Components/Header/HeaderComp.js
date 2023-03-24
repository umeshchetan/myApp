import React from 'react';
import { useState } from 'react';
import FooterComp from '../Footer/FooterComp';
import { Button } from 'react-bootstrap';
import './HeaderComp.css';

function HeaderComp({name}) {
    return (
        <div className='box'>
            {name}
            <h1 style={{color: 'red'}}>Hi i am from header</h1>
            <Button>Click Me</Button>
            <FooterComp />
        </div>
    );
}

export default HeaderComp;