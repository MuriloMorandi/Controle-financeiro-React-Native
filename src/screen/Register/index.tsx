import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterTransactionSchema } from '../../Schemas/RegisterTransaction.schema'
    
import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { Input } from "../../components/Form/Input";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import { CategorySelect } from "../CategorySelect";

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionType
} from "./styles";

interface Category{
    key: string;
    name: string;
}

interface FormData{
    name: string;
    amount: string;
}

export function Register() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [transactionType, setTransactionType] = useState('');
    const [categoty, setCategory] = useState<Category>({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(RegisterTransactionSchema)
    })


    function handleTransactionTypeSelect(type:'up'|'donw') {
        setTransactionType(type);
    }

    function handleModalIsOpen() {
        setModalIsOpen(!modalIsOpen);
    }

    function handleRegister(form: FormData) {
        if (!transactionType)
            return Alert.alert('Selecione um tipo de transação')

        if (categoty.key === 'category' )
            return Alert.alert('Selecione uma categoria')
        
        if (!form.amount || !form.name)
            return Alert.alert('Prencha as informações de nome e valor da transação')
        
        const data = {
            name:form.name,
            amount:form.amount,
            transactionType,
            categoty: categoty.name
        }
        
        console.warn(data)
        
        reset()
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>
                        Registros
                    </Title>
                </Header>

                <Form>
                    <Fields>

                        <InputForm
                            placeholder="Digite o nome"
                            name="name"
                            control={control}
                            autoCapitalize={"sentences"}
                            autoCorrect={false}
                            errorMsg={errors.name && errors.name.message}
                        />
                        
                        <InputForm
                            placeholder="Digite o valors"
                            name="amount"
                            control={control}
                            keyboardType={"numeric"}
                            errorMsg={errors.amount && errors.amount.message}
                        />
                    
                        <TransactionType>
                            <TransactionTypeButton
                                type={"up"}
                                title="Income"
                                onPress={() => handleTransactionTypeSelect("up")}
                                isActive={transactionType === 'up'}
                            />
                            <TransactionTypeButton
                                type={"donw"}
                                title="Outcome"
                                onPress={() => handleTransactionTypeSelect('donw')}
                                isActive={transactionType === 'donw'}
                            />
                        </TransactionType>    
                        
                        <CategorySelectButton
                            title={categoty.name}
                            onPress={handleModalIsOpen}
                        />
                    </Fields>
                    
                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>
                
                <Modal visible={modalIsOpen} >
                    <CategorySelect
                        category={categoty}
                        setCategory={setCategory}
                        closeSelectCategory={handleModalIsOpen}
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
    
}