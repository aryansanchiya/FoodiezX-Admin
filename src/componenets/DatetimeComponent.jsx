import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#198754',
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#198754',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#198754',
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    display: 'none', // Hide helper text for errors
                },
            },
        },
    },
});

export default function DatetimeComponent({ handleChange, value }) {

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimeField
                    label=""
                    value={value}
                    onChange={handleChange}
                    placeholder="DD/MM/YYYY HH:mm"
                    format="DD/MM/YYYY HH:mm"
                    slotProps={{
                        textField: {
                            error: false, // Prevent default error handling
                        },
                    }}
                    sx={{
                        height: "38px",
                        width: '100%',
                        '& .MuiInputBase-root': {
                            fontSize: 'small',
                            backgroundColor: '#fff',
                            height: "38px",
                            borderColor: "#dee2e6 !important"
                        },
                        '& .MuiInputBase-input': {
                            height: '38px',
                            paddingLeft: "10px",
                            borderColor: "#dee2e6 !important"
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#dee2e6', // Default border color
                            },
                        },
                    }}
                    className='rounded'
                />
            </LocalizationProvider>
        </ThemeProvider>
    );
}
