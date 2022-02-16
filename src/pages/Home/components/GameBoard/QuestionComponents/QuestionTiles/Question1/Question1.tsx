import React from 'react';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import Card from './Card';
import 'reactjs-popup/dist/index.css';
import './style.css';


export default function Question1() {

    return (
        <div className='flex flex-col items-center justify-center h-40 w-40 bg-white blue border-2 border-navy'>
            <Popup trigger={<button className='h-fit w-full'>What software are we migratring our ERP system to?</button>} modal nested>
                <Card />
            </Popup>
            <p className='answer1 w-full mt-2'></p>
        </div>
    );
}