import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { useState } from "react";
import { api } from "../../js/api";

export const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ ValidEmail, setValidEmail ] = useState(false);
    const [ ValidTelefone, setValidTelefone ] = useState(false);
    const email = document.getElementById('email');
        
    const onSubmit = async (data) => {
        if (ValidEmail && ValidTelefone) {
            try {
                data.telefone = data.telefone.replace(/\D/g, '');
                const Valid = await api.post('/login', data);
                reset()

                if (Valid.data.existe) {
                    localStorage.setItem('token', Valid.data.token);
                    localStorage.setItem('logged', 'true');
                    window.alert(`Seja bem-vindo de volta, ${Valid.data.nome}`);
                } 
                else {
                    window.alert("Email ou Telefone inválidos.");
                    localStorage.setItem('logged', 'false');
                }
            } catch (error) {
                window.alert(`Deu erro`);
            }
        } else {
            window.alert('Dados inválidos!');
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

    const handleTelefoneFocus = (e) => {
        if (!ValidEmail || email.value.trim() === "") {
            e.preventDefault();
            e.target.blur();
            email.setCustomValidity("Preencha este campo.");
            email.reportValidity();
        }
    };

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Faça o seu Login</h2>
            <Input 
                id="email"
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
                autoComplete="email" 
                type="text" 
                label="digite seu email..." 
            />

            <Input 
                id="telefone" 
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
                onFocus={handleTelefoneFocus}
                autoComplete="tel" 
                type="text" 
                label="digite seu N° de telefone..." 
                mask="true"
            />
            <button id="concluir" type="submit">Concluir</button>
        </form>
        </>
    );
}
