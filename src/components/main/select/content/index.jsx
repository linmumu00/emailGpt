import React, { useState } from "react";
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router'
import MyContext from "../../../MyContext";
import './content.css'


export default function BusinessType() {
    const navigate = useNavigate()
    const [content, setcontent] = useState([
        { id: 1, label: 'name', value: '' },
        { id: 2, label: 'decribe', value: '' },
        { id: 3, label: 'feature1', value: '' },
        { id: 4, label: 'feature2', value: '' },
        { id: 5, label: 'feature3', value: '' },
        { id: 6, label: 'isFormal', value: 'Informal' },
    ]);
    const [step, setStep] = useState(1)
    const handleInputChange = (id, event) => {
        // Find the input value with the given id and update its value
        const updatedcontent = content.map((item) =>
            item.id === id ? { ...item, value: event.target.value } : item
        );
        setcontent(updatedcontent);
    };

    const handleSaveClick = () => {
        sessionStorage.setItem("content", JSON.stringify(content));
        const areAllValuesEmpty = content.every(item => item.value !== '');
        if (content[0].value !== '' && content[1].value !== '' && step === 1) { navigate('./second') }
        if (content[2].value !== '' && content[3].value !== '' && content[4].value !== '' && step === 2) { navigate('./third') }
        if (content[5].value !== '' && areAllValuesEmpty && step === 3) { navigate('/edit'); }

    };
    return (
        <div className="main-container">
            <div style={{ height: '6vh' }}></div>
            <Grid container>
                <Grid display="flex" flexDirection="column" item xs={12} md={4.5} className="side-panel left-panel">
                    <span className="left-panelcontentspan">Step {step}/3 </span>
                    <MyContext.Provider value={{ content, setStep, handleInputChange, handleSaveClick }}>
                        <Outlet />
                    </MyContext.Provider>
                </Grid>
                <Grid item xs={12} md={7.5} className="side-panel right-panel">
                    <img style={{ height: '100%' }} src="\assets\image\Black-friday.png" alt="" />
                </Grid>
            </Grid>
        </div >
    );
}