// import React, { ChangeEvent } from 'react';
// import { FieldValues, Path } from 'react-hook-form';
// import TextField from '@mui/material/TextField';
// import { SerializedStyles } from '@emotion/react';
// interface CodeTextFieldControlProps<FormValues extends FieldValues> {
//     name: Path<FormValues>;
//     helperText?: string;
//     type: string;
//     maxLength?: number;
//     className?: string;
//     value?: string;
//     onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
//     label: string;
//     rules? : object;
//     styles? : SerializedStyles;
// }
//
// export default function CodeTextFieldControl<FormValues extends FieldValues>({
//     type,
//     label,
//     maxLength,
//     className,
//     value,
//     onChange,
//     styles
// }: CodeTextFieldControlProps<FormValues>) {
//     return (
//         <TextField
//             css={styles}
//             label={label}
//             inputProps={{ className: className, maxLength: maxLength }}
//             onChange={onChange}
//             value={value}
//             type={type}
//         />
//     );
// }
