import React, { useState } from "react";
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router'
import './index.css'

export default function BusinessType() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    };

    const handleSaveClick = () => {
        navigate('/select/theme')
        sessionStorage.setItem("Company", inputValue);
    };
    return (
        <div className="main-container">
            <div style={{ height: '6vh' }}></div>
            <Grid container>
                <Grid display="flex" flexDirection="column" item xs={12} md={4.5} className="side-panel left-panel">
                    <Grid className="bustext" style={{ margin: '8vh' }}>
                        <h1>Let's start creating <br /> your email with AI</h1>
                        <h4>To generate the best fit for your company, answer few
                            questions and our AI will generate your content and
                            images based on answers.
                        </h4>
                    </Grid>
                    <div style={{ marginLeft: '8vh' }}>
                        <TextField
                            label="	Company name"
                            multiline
                            rows={1}
                            style={{ width: '80%' }}
                            onChange={handleInputChange}
                            value={inputValue}
                        />
                    </div>
                    <Grid item className="complete-button">
                        <Button disabled={inputValue === '' ? true : false} variant="contained" onClick={handleSaveClick}>
                            NEXT
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7.5} className="side-panel right-panel">
                    <img style={{ height: '100%' }} src="\assets\image\Black-friday.png" alt="" />
                </Grid>
            </Grid>
        </div >
    );
}