import React from "react";
import MyContext from "../../../../MyContext";
import { TextField, Alert, Button, Grid } from '@mui/material';

export default function StepOne() {
    const buttonDisabled = (content) => {
        if (content[0].value !== '' && content[1].value !== '')
            return false;
        else return true;
    }
    return (
        <MyContext.Consumer>
            {({ content, setStep, handleInputChange, handleSaveClick }) => (
                <div>
                    {setStep(1)}
                    <div style={{ marginTop: '10vh', marginLeft: '8vh' }}>
                        <TextField
                            placeholder="Enter your company name"
                            label="Company name"
                            multiline
                            rows={1}
                            style={{ width: '80%', marginBottom: '10vh', fontSize: '14px' }}
                            onChange={(e) => handleInputChange(1, e)}
                            value={content[0].value}
                        />
                    </div>
                    <div style={{ marginLeft: '8vh' }}>
                        <TextField
                            placeholder="A mobile app that is designed to allow students to track their energy consumption and the percentage that is generated from renewable sources."
                            label="Describe your company"
                            multiline
                            rows={4}
                            style={{ width: '80%', fontSize: '10px' }}
                            onChange={(e) => handleInputChange(2, e)}
                            value={content[1].value}
                        />
                    </div>
                    <Alert style={{ margin: '10px 0 0 50px', width: '70%' }} severity="info">
                        Improve the description with AI <br />
                        Input a few keywords about your website and let our AI engine transform them into a compelling description.
                    </Alert>
                    <Grid item className="complete-button">
                        <Button disabled={buttonDisabled(content)} variant="contained" onClick={handleSaveClick}>
                            NEXT
                        </Button>
                    </Grid>
                </div>
            )}

        </MyContext.Consumer>


    )

}