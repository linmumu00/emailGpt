import React from "react";
import MyContext from "../../../../MyContext";
import { TextField, Grid, Button } from '@mui/material';

export default function StepSecond() {
    const buttonDisabled = (content) => {
        console.log(content[2].value, content[3].value, content[4].value,);
        if (content[2].value !== '' && content[3].value !== '' && content[4].value !== '')
            return false;
        else return true;
    }
    return (
        <MyContext.Consumer>
            {({ content, setStep, handleInputChange, handleSaveClick }) => (
                <div>
                    {setStep(2)}

                    <span style={{ display: 'block', fontSize: '16px', fontWeight: '700', lineHeight: '22px', margin: '5vh' }}>
                        Add 3 main services/features 123 provides
                    </span>
                    <div style={{ marginLeft: '8vh' }}>
                        <TextField
                            placeholder="Digital Strategy"
                            label="Service/feature 1"
                            multiline
                            rows={1}
                            style={{ width: '80%', marginBottom: '4vh', fontSize: '14px' }}
                            onChange={(e) => handleInputChange(3, e)}
                            value={content[2].value}
                        />
                    </div>
                    <div style={{ marginLeft: '8vh' }}>
                        <TextField
                            placeholder="Online Advertising"
                            label="Service/feature 2"
                            multiline
                            rows={1}
                            style={{ width: '80%', marginBottom: '4vh', fontSize: '10px' }}
                            onChange={(e) => handleInputChange(4, e)}
                            value={content[3].value}
                        />
                    </div>
                    <div style={{ marginLeft: '8vh' }}>
                        <TextField
                            placeholder="Web Design"
                            label="Service/feature 3"
                            multiline
                            rows={1}
                            style={{ width: '80%', marginBottom: '4vh', fontSize: '10px' }}
                            onChange={(e) => handleInputChange(5, e)}
                            value={content[4].value}
                        />
                    </div>
                    <Grid item className="complete-button">
                        <Button disabled={buttonDisabled(content)} variant="contained" onClick={handleSaveClick}>
                            NEXT
                        </Button>
                    </Grid>
                </div>
            )
            }

        </MyContext.Consumer >


    )

}