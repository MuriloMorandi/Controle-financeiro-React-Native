import * as Yup from 'yup';

export const RegisterTransactionSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatorio'),
    amount: Yup
        .number()
        .typeError('Informe um valor númerico')
        .positive('O valor não pode ser negativo')
        .required('O valor e obrigatório')
    ,
});
