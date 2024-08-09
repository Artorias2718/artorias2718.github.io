// import React, { ChangeEvent } from 'react';
// import { Control, FieldValues, Path, useController } from 'react-hook-form';
// import TextField from '@mui/material/TextField';
// import { SerializedStyles } from '@emotion/react';
// import { formatPhoneNumber } from '../../utils';
// interface PhoneTextFieldControlProps<FormValues extends FieldValues> {
//     name: Path<FormValues>;
//     helperText?: string;
//     type: string;
//     maxLength?: number;
//     className?: string;
//     value?: string;
//     onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
//     label: string;
//     rules? : object;
//     styles? : SerializedStyles;
//     control: Control<FormValues>;
// }
//
// export default function PhoneTextFieldControl<FormValues extends FieldValues>({
//     type,
//     label,
//     maxLength,
//     className,
//     value,
//     helperText,
//     control,
//     name,
//     rules,
//     styles
// }: PhoneTextFieldControlProps<FormValues>) {
//     const {
//         field: { ref, onChange, ...inputProps },
//         fieldState: { invalid, error }
//     } = useController({
//         name,
//         control,
//         rules,
//     });
//     return (
//         <TextField
//             css={styles}
//             label={label}
//             inputProps={{ ...inputProps, maxLength: maxLength }}
//
//             onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                 const targetValue = formatPhoneNumber(e.target.value);
//                 onChange(value = targetValue);
//             }}
//             value={value}
//             type={type}
//             error={invalid}
//             helperText={error ? error.message : (helperText ? helperText : '')}
//         />
//     );
// }
