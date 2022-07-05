import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

import { Input } from "../Input";

import { Container, ErrorMsg } from "./styles";

interface Props extends TextInputProps{
    control: Control;
    name: string;
    errorMsg: string;
}

export function InputForm({
    control,
    name,
    errorMsg,
    ...rest
}:Props) {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />    
            { errorMsg &&
                <ErrorMsg>{ errorMsg }</ErrorMsg>
            } 
            
        </Container>
    )
}

