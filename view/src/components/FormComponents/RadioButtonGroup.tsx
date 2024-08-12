import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormLabel, Stack } from '@mui/material';

interface RadioGroupProps<FormValues extends FieldValues> {
    name: Path<FormValues>;
    label: string;
    options: { label: string; value: string }[];
    control: Control<FormValues>;
}

export default function RadioButtonGroup<FormValues extends FieldValues>(props: RadioGroupProps<FormValues>) {
    const { name, label, options, control } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl>
                    <FormLabel filled>{label}</FormLabel>
                    <RadioGroup
                        {...field}
                        aria-label={label}
                        name={name}
                        row
                    >
                        <Stack sx={{paddingLeft: '1rem'}}>
                            {options.map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio color="primary" />}
                                    label={option.label}
                                    labelPlacement="end"
                                />
                            ))}
                        </Stack>
                    </RadioGroup>

                </FormControl>
            )}
        />
    );
}
