/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { SerializedStyles } from '@emotion/react';
interface TextFieldControlProps<FormValues extends FieldValues> {
    name: Path<FormValues>;
    helperText?: string;
    type: string;
    label: string;
    control: Control<FormValues>;
    rules? : object;
    styles? : SerializedStyles;
}

export default function TextFieldControl<FormValues extends FieldValues>({
    name,
    helperText,
    type,
    label,
    control,
    rules,
    styles
}: TextFieldControlProps<FormValues>) {
    const {
        field: { ref, ...inputProps },
        fieldState: { invalid, error }
    } = useController({
        name,
        control,
        rules,
    });
    

    return (
        <TextField
            css={styles}
            {...inputProps}
            label={label}
            inputRef={ref}
            type={type}
            error={invalid}
            helperText={error ? error.message : (helperText ? helperText : '')}
        />
    );
}
