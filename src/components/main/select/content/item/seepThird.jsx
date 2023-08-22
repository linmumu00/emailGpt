import React, { useState } from "react";
import { Grid, Button } from '@mui/material';
import MyContext from "../../../../MyContext";

export default function StepThird() {
    const [selectedOption, setSelectedOption] = useState("Informal"); // Default value
    const handleOptionChange = (event) => {
        console.log(event.target.value);
        const newSelectedOption = event.target.value;
        setSelectedOption(newSelectedOption);
    };
    return (
        <MyContext.Consumer>
            {({ setStep, handleInputChange, handleSaveClick }) => (
                <div>
                    {setStep(3)}
                    <span style={{ display: 'block', fontSize: '14px', fontWeight: '600', lineHeight: '20   px', margin: '5vh' }}>
                        Choose a tone of voice of content.
                    </span>
                    <label style={{ display: "block", marginBottom: "5vh", marginLeft: '5vh' }}>
                        Option 1
                        <input
                            type="radio"
                            value="Informal"
                            checked={selectedOption === "Informal"}
                            onChange={(event) => { handleInputChange(6, event); handleOptionChange(event); }}
                        />
                    </label>
                    <label style={{ display: "block", marginBottom: "10px", marginLeft: '5vh' }}>
                        Option 2
                        <input
                            type="radio"
                            value="Formal"
                            checked={selectedOption === "Formal"}
                            onChange={(event) => { handleInputChange(6, event); handleOptionChange(event); }}
                        />
                    </label>
                    <Grid className="complete-button">
                        <Button variant="contained" onClick={handleSaveClick}>
                            FINISH
                        </Button>
                    </Grid>
                </div>
            )}

        </MyContext.Consumer>


    )

}