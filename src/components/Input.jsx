import { Button, TextField } from "@mui/material"
import { useContext, useState } from "react";
import { ChallengeContext } from "../context/challengeContext";

export default function Input() {

    const { inputValue, setInputValue } = useContext(ChallengeContext);

    const [error, setError] = useState('');

    function handleInput(event) {
        const val = event.target.value;

        if (isNaN(val)) {
            setError('Only number is accepted!');
        } else {
            setError('');
        }

        setInputValue(val);
    }

    function cleanInputs() {
        setInputValue('');
        setError('');
    }
    
    return (
        <form action=''>
            
            <div>
                <TextField 
                    label='Enter a valid number' 
                    variant='outlined'
                    fullWidth
                    value={inputValue}
                    onChange={handleInput}
                    helperText={error}
                    error={error && error.length ? true : false}
                />
            </div>

            {inputValue && (
            <div className='relative my-5'>
                <Button 
                    variant='contained'
                    onClick={cleanInputs}
                    sx={{ display: 'block', padding: '8px 30px', margin: '0 auto', backgroundColor: '#1c1917', textTransform: 'capitalize', boxShadow: 'none' }}>
                    Clean
                </Button>
            </div>
            )}

        </form>
    )
}
