/**@jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Controller, Control, FieldValues, useController, Path } from 'react-hook-form';
import {FormControl, FormHelperText, InputLabel } from '@mui/material';
import { SerializedStyles } from '@emotion/react';

interface DropdownProps<FormValues extends FieldValues> {
    rules?: object;
    name: Path<FormValues>;
    label: string;
    options: { label: string; value: string }[];  
    control: Control<FormValues>;
    styles? : SerializedStyles;
    defaultValue?: string ;
}

export default function Dropdown<FormValues extends FieldValues>({
    rules,
    name,
    label,
    options,
    control,
    styles,
    defaultValue
}: DropdownProps<FormValues>) {
    const {
        field: {ref, ...inputProps},
        fieldState: { invalid, error },
    } = useController({name, control, rules });

    return (
        <Controller
            {...inputProps}
            rules={rules ?? {}}
            control={control}
            render={({ field }) => (
                <FormControl fullWidth error={invalid}>
                    <InputLabel id={`${name}-label`}>{label}</InputLabel>
                    <Select
                        {...field}
                        labelId={`${name}-label`}
                        id={name}
                        name={name}
                        label={label}
                        css={styles}
                    >
                        {options.map((option) => (
                            <MenuItem  key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>{error?.message}</FormHelperText>
                </FormControl>

            )}
        />
    );
}
