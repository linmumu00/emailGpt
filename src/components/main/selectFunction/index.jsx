import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Label from './label';
import Indetail from './indetail'
import './styles.css'; // Import the custom styles
import { useNavigate } from 'react-router-dom';

export default function SelectFunction() {
    const navigate = useNavigate()
    const availableOptions = [
        { id: 'productName', label: 'product name' },
        { id: 'productDescription', label: 'product presentation' },
        { id: 'productAdvantages', label: 'product superiority' },
        // Add more options 
    ];
    const [selectedOption, setSelectedOption] = useState(availableOptions[0].id);
    const [selectedInfo, setSelectedInfo] = useState({
        productName: '',
        productDescription: '',
        productAdvantages: '',
        // Add more fields
    });

    const handleOptionSelect = optionId => {
        setSelectedOption(optionId);
    };

    const handleInfoChange = (field, value) => {
        setSelectedInfo(prevInfo => ({
            ...prevInfo,
            [field]: value,
        }));
    };

    const handleComplete = () => {
        navigate('/edit')
        console.log('Form completed:', selectedInfo);
    };

    return (
        <div className="main-container">
            <div style={{ height: '10vh' }}></div>
            <Grid container>
                <Grid item xs={12} md={2} className="side-panel">
                    <Label
                        availableOptions={availableOptions}
                        selectedOption={selectedOption}
                        handleOptionSelect={handleOptionSelect}
                        handleComplete={handleComplete}
                    />
                </Grid>
                <Grid item xs={12} md={8} className="side-panel">
                    <Indetail
                        selectedOption={selectedOption}
                        selectedInfo={selectedInfo}
                        handleInfoChange={handleInfoChange}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

