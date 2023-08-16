import React from 'react';
import { Grid, TextField, Select, MenuItem } from '@mui/material';

const Indetail = ({ selectedOption, selectedInfo, handleInfoChange }) => {
    return (
        <Grid container direction="column" alignItems="center" className="right-panel">
            {selectedOption === 'productName' && (
                <Grid item className="form-item">
                    <TextField
                        label="产品名称"
                        value={selectedInfo.productName}
                        onChange={e => handleInfoChange('productName', e.target.value)}
                        fullWidth
                    />
                </Grid>
            )}

            {selectedOption === 'productDescription' && (
                <Grid item className="form-item">
                    <TextField
                        label="产品介绍"
                        multiline
                        rows={4}
                        value={selectedInfo.productDescription}
                        onChange={e => handleInfoChange('productDescription', e.target.value)}
                        fullWidth
                    />
                </Grid>
            )}

            {selectedOption === 'productAdvantages' && (
                <Grid item className="form-item">
                    <Select
                        label="产品优势"
                        value={selectedInfo.productAdvantages}
                        onChange={e => handleInfoChange('productAdvantages', e.target.value)}
                        fullWidth
                    >
                        <MenuItem value="advantage1">优势1</MenuItem>
                        <MenuItem value="advantage2">优势2</MenuItem>
                        {/* Add more advantages */}
                    </Select>
                </Grid>
            )}

            {/* Add more conditional rendering based on selectedOption */}
        </Grid>
    );
};

export default Indetail;
