import React from 'react';
import { Grid, Button, Typography } from '@mui/material';

const Label = ({ availableOptions, selectedOption, handleOptionSelect, handleComplete }) => {
    return (
        <Grid container direction="column" alignItems="center" spacing={2} className="left-panel">
            <Grid item>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>Information</Typography>
            </Grid>
            {availableOptions.map(option => (
                <Grid item key={option.id}>
                    <Button
                        variant={selectedOption === option.id ? 'contained' : 'outlined'}
                        onClick={() => handleOptionSelect(option.id)}
                        className="option-button"
                    >
                        {option.label}
                    </Button>
                </Grid>
            ))}
            <Grid item className="complete-button">
                <Button variant="contained" color="primary" onClick={handleComplete}>
                    CREATE
                </Button>
            </Grid>
        </Grid>
    );
};

export default Label;
