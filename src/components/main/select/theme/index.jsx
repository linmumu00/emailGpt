import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router'
import EmailStructure from "./emailStructure";
import './index.css'

export default function Theme() {
    const navigate = useNavigate()
    const [themeId, setThemeId] = useState("");
    const [categoryvaule, setCategoryvaule] = useState("all")
    const handleInputChange = (id) => {
        const newValue = id;
        setThemeId(newValue);
    };

    const handleSaveClick = () => {
        navigate('/select/content')
        sessionStorage.setItem("themeId", themeId);
        console.log(sessionStorage.getItem("themeId"));
    };

    const handleBack = () => {
        navigate('/select/businessType')
    }

    const handleCategoryChange = (event) => {
        setCategoryvaule(event.target.innerText)
    };

    return (
        <div className="main-container">
            <div style={{ height: '6vh' }}></div>
            <Grid container>
                <Grid display="flex" flexDirection="column" item xs={12} md={1.8} className="side-panel left-panel">
                    <h1>Choose your email</h1>
                    <span className="left-panelspan">theme & structure.</span>
                    <div onClick={handleCategoryChange} className="themebox">all</div>
                    <div onClick={handleCategoryChange} className="themebox">cars</div>
                    <div onClick={handleCategoryChange} className="themebox">fashion</div>
                    <div onClick={handleCategoryChange} className="themebox">sport</div>
                    <div onClick={handleCategoryChange} className="themebox">XXX</div>
                    <div onClick={handleCategoryChange} className="themebox">XXX</div>

                    <div className="compeletedbutton" >
                        <Button disabled={themeId === '' ? true : false} onClick={handleSaveClick} variant="contained" >
                            NEXT
                        </Button>
                        <p className='back' onClick={handleBack}><br />Back to previous step</p>
                    </div>

                </Grid>


                <Grid item xs={12} md={10.2} className="side-panel right-panel">
                    <EmailStructure handleInputChange={handleInputChange} categoryvaule={categoryvaule} />
                </Grid>
            </Grid>
        </div>
    )
}