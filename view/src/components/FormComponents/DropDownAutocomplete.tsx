/**@jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Controller, Control, FieldValues, useController, Path } from 'react-hook-form';
import {Autocomplete, TextField} from '@mui/material';
import { SerializedStyles } from '@emotion/react';

interface DropdownAutocompleteProps<FormValues extends FieldValues> {
    rules?: object;
    name: Path<FormValues>;
    options: { label: string; value: string }[];
    control: Control<FormValues>;
    styles? : SerializedStyles;
    label: string;
}

export default function DropDownAutocomplete<FormValues extends FieldValues>({
    rules,
    name,
    options,
    control,
    styles,
    label
}: DropdownAutocompleteProps<FormValues>) {
    const {
        field: {onChange, onBlur, ref, ...inputProps},
        fieldState: { invalid, error },
    } = useController({name, control, rules });

    return (
        <Controller
            {...inputProps}
            control={control}
            render={({ field }) => (
                <Autocomplete
                    {...field}
                    id={name}
                    css={styles}
                    options={options}
                    autoSelect
                    value={options.find((option) => option.value === inputProps.value) || null}
                    onChange={(event, newValue) => {
                        onChange(newValue?.value || null);
                    }}
                    onBlur={onBlur}
                    getOptionLabel={(option) => option.label}
                    renderInput={params => (
                        <TextField
                            {...params}
                            label={label}
                            variant="outlined"
                            error={!!error}
                            helperText={error ? error.message : ''}
                        />
                    )}
                />
            )}
        />
    );
}
