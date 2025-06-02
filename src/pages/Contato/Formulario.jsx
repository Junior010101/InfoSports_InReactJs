import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import { api } from "../../js/api";

export const Form = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ValidName, setValidName] = useState(false);
    const [ValidSurname, setValidSurname] = useState(false);
    const [ValidEmail, setValidEmail] = useState(false);
    const [ValidTelefone, setValidTelefone] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [Logged, setLogged] = useState(() => {
        return localStorage.getItem('logged') === 'true';
    });

    useEffect(() => {
        if (Logged) {
            api.get('/contatos')
                .then(res => setContacts(res.data))
                .catch(err => console.error('Erro ao buscar contatos:', err));
        }
    }, [Logged]);

    const OnSubmit = async (data) => {
        if (ValidName && ValidSurname && ValidEmail && ValidTelefone) {
            try {
                const dadosDecampo = {
                    telefone: data.telefone.replace(/\D/g, ''),
                    nome_sobrenome: data.nome + " " + data.sobrenome,
                    email: data.email,
                    mensagem: data.mensagem
                };

                await api.post('/contatos', dadosDecampo);
                setContacts(prev => [...prev, dadosDecampo]);
                reset();
            } catch (error) {
                window.alert(`Não foi possível salvar seu contato.`);
            }
        } else {
            window.alert('Dados inválidos!');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Tem certeza que deseja excluir este contato?")) return;

        try {
            await api.delete(`/contatos/${id}`);
            setContacts(prev => prev.filter(contato => contato.id !== id));
        } catch (error) {
            console.error("Erro ao deletar contato:", error);
            window.alert("Não foi possível deletar o contato.");
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

    const validarSobrenome = (input) => {
        const value = input.value.trim();

        if (value === "") {
            input.setCustomValidity("");

            setValidSurname(false);
        } else {
            input.setCustomValidity("");

            setValidSurname(true);
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

    // Foco e avisos em cascata
    const name = document.getElementById('nome');
    const surname = document.getElementById('sobrenome');
    const email = document.getElementById('email');
    const phone = document.getElementById('telefone');

    const handleSobrenomeFocus = (e) => {
        if (!ValidName || name.value.trim() === "") {
            e.preventDefault();
            e.target.blur();
            name.setCustomValidity("Preencha este campo.");
            name.reportValidity();
        }
    };
    const handleEmailFocus = (e) => {
        if (!ValidSurname || surname.value.trim() === "") {
            e.preventDefault();
            e.target.blur();
            surname.setCustomValidity("Preencha este campo.");
            surname.reportValidity();
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
    const handleMensagemFocus = (e) => {
        if (!ValidTelefone || phone.value.trim() === "") {
            e.preventDefault();
            e.target.blur();
            phone.setCustomValidity("Preencha este campo.");
            phone.reportValidity();
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit(OnSubmit)}>
            <h1>Contate-nos</h1>
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
                {...register('sobrenome', { 
                    required: true,

                    onChange: (e) => {
                        validarSobrenome(e.target);
                    },
                    onBlur: (e) => {
                        if (e.target.value !== "") {
                            validarSobrenome(e.target);
                        }
                    }
                })}
                id="sobrenome" 
                autoComplete="name" 
                type="text" 
                label="digite seu sobrenome..." 
                onFocus={handleSobrenomeFocus}
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
                onFocus={
                    !ValidName ? handleSobrenomeFocus : 
                    handleEmailFocus
                }
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
                onFocus={
                    !ValidName ? handleSobrenomeFocus : 
                    !ValidSurname ? handleEmailFocus : 
                    handleTelefoneFocus
                }
            />
            <div className="input-container">
                <textarea
                    {...register('mensagem', { 
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
                    id="mensagem" 
                    rows={5} 
                    cols={50} 
                    required
                    onFocus={
                        !ValidName ? handleSobrenomeFocus :
                        !ValidSurname ? handleEmailFocus : 
                        !ValidEmail ? handleTelefoneFocus : 
                        handleMensagemFocus
                    }
                />
                <label htmlFor="mensagem">digite sua mensagem aqui...</label>
            </div>
            <button id="concluir" type="submit">Enviar</button>
        </form>

        <div className="contatos">
            <h2>Contatos</h2>
            {!Logged ? (
            <div>Faça Login para mostrar seus contatos...</div>
            ) : (
                <ContactList contacts={contacts} onDelete={handleDelete} />
            )}
        </div>
        </>
    );
};
