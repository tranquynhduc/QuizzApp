import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleDifficultyChange, handleTypeChange, handleCategoryChange } from '../redux/Action';


const SelectFiled = (props) => {
    const [value, setValue] = useState('')
    const { label, options } = props;
    const dispatch = useDispatch();

    const hanldeChange = (e) => {
        setValue(e.target.value)
        switch (label) {
            case 'Danh Mục':
                dispatch(handleCategoryChange(e.target.value))
                break;
            case 'Mức độ':
                dispatch(handleDifficultyChange(e.target.value))
                break;
            case 'Thể Loại':
                dispatch(handleTypeChange(e.target.value))
                break;
            
            default:
                return;
        }
    }
    return (
        <Box mt={3} width='100%'>
            <FormControl size='small' fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={hanldeChange}>
                    {options.map(({ id, name }) => (
                        <MenuItem key={id} value={id}>{name}</MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectFiled