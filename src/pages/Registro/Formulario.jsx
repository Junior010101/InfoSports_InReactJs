import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { useState } from "react";
import { api } from "../../js/api";

export const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ ValidName, setValidName ] = useState(false);
    const [ ValidEmail, setValidEmail ] = useState(false);
    const [ ValidTelefone, setValidTelefone ] = useState(false);
    const name = document.getElementById('nome');
    const email = document.getElementById('email');

    const onSubmit = async (data) => {
        if (ValidName && ValidEmail && ValidTelefone) {
            try {
                data.telefone = data.telefone.replace(/\D/g, '');
                await api.post('/usuarios', data)
                window.alert(`Usuario: ${data.nome}, foi criado com sucesso!!!. Faça login para acessar seus contatos!`);
                reset()
            } catch (error) {
                window.alert(`O Usuario: ${data.nome}, já exite com estás mesmas informações.`);
                console.log(error);
            }
        } else {
            window.alert('Dados inválidos!');
        }
    };

    const validarNome = (input) => {
        const value = input.value.trim();

        if (value === "") {
            input.setCustomValidity("");

            setValidName(false);
        } else {
            input.setCustomValidity("");

            setValidName(true);
        }
    }

    const validarEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const value = input.value.trim();
    
        if (value === "") {
            input.setCustomValidity("");
            input.classList.remove("invalid");

            setValidEmail(false);
        } else if (emailRegex.test(value)) {
            input.setCustomValidity("");
            input.classList.remove("invalid");

            setValidEmail(true);
        } else {
            input.setCustomValidity("Insira um email válido.");
            input.classList.add("invalid");

            setValidEmail(false);
        }
    
        input.reportValidity();
    }

    const validarTelefone = (input) => {
        const value = input.value.trim();

        if (value === "") {
            input.setCustomValidity("");
            input.classList.remove("invalid");

            setValidTelefone(false);
        } else if (input.value.trim().length == 15) {
            input.setCustomValidity("");
            input.classList.remove("invalid");

            setValidTelefone(true);          
        } else {
            input.setCustomValidity("Insira um telefone válido.");
            input.classList.add("invalid");

            setValidTelefone(false);
        }
    
        input.reportValidity();
    }

    const handleEmailFocus = (e) => {
        if (!ValidName || name.value.trim() === "") {
            e.preventDefault();
            e.target.blur();
            name.setCustomValidity("Preencha este campo.");
            name.reportValidity();
        }
    };
    const handleTelefoneFocus = (e) => {
        if (!ValidEmail || email.value.trim() === "") {
            e.preventDefault();
            e.target.blur();
            email.setCustomValidity("Preencha este campo.");
            email.reportValidity();
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Cadastre-se para acompanhar as notícias!</h2>
            <Input
                {...register('nome', { 
                    required: true,

                    onChange: (e) => {
                        validarNome(e.target);
                    },
                    onBlur: (e) => {
                        if (e.target.value !== "") {
                            validarNome(e.target);
                        }
                    }
                })}
                id="nome" 
                autoComplete="name" 
                type="text" 
                label="digite seu nome..."  
            />
            <Input
                {...register('email', { 
                    required: true,

                    onChange: (e) => {
                        validarEmail(e.target);
                    },
                    onBlur: (e) => {
                        if (e.target.value !== "") {
                            validarEmail(e.target);
                        }
                    }
                })} 
                id="email" 
                autoComplete="email" 
                type="text" 
                label="digite seu email..."  
                onFocus={handleEmailFocus}
            />
            <Input
                {...register('telefone', {
                    required: true,
                    
                    onChange: (e) => {
                        validarTelefone(e.target);
                    },
                    onBlur: (e) => {
                        if (e.target.value !== "") {
                            validarTelefone(e.target);
                        }
                    }
                })}  
                id="telefone" 
                autoComplete="tel" 
                type="text" 
                label="digite seu N° de telefone..." 
                mask="true" 
                onFocus={!ValidName ? handleEmailFocus : handleTelefoneFocus}
            />
            <button id="concluir" type="submit">Concluir</button>
        </form>
        </>
    );
}
