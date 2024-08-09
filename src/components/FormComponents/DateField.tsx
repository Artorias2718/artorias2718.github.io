/**@jsxImportSource @emotion/react */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { SerializedStyles } from '@emotion/react';
interface DateFieldControlProps<FormValues extends FieldValues> {
    name: Path<FormValues>;
    helperText?: string;
    label: string;
    control: Control<FormValues>;
    rules? : object;
    styles? : SerializedStyles;
}

export default function DateFieldControl<FormValues extends FieldValues>({
    name,
    helperText,
    label,
    control,
    rules,
    styles
}: DateFieldControlProps<FormValues>) {
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
            type={'date'}
            error={invalid}
            helperText={error ? error.message : (helperText ? helperText : '')}
            InputLabelProps={{ shrink: true }}
        />
    );
}