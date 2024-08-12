import React from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CheckboxControlProps<FormValues extends FieldValues> extends CheckboxProps {
    name:  Path<FormValues>;
    label: string;
    control: Control<FormValues>;
}

export default function CheckboxControl<FormValues extends FieldValues>({
    name,
    label,
    control,
    ...checkboxProps
}: CheckboxControlProps<FormValues>) {
    const {
        field: { ref, ...inputProps }
    } = useController({
        name,
        control
    });

    return (
        <FormControlLabel
            control={
                <Checkbox
                    {...inputProps}
                    {...checkboxProps}
                    inputRef={ref}
                    checked={inputProps.value ?? false}
                />
            }
            label={label}
        />
    );
}
