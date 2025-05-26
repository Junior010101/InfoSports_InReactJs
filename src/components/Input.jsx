import { useEffect } from "react";

export const Input = (props) => {

    useEffect(() => {
        if (props.mask) {
            const input = document.getElementById(props.id);
    
            const formatValue = (value) => {
                const cleaned = value.replace(/\D/g, "").substring(0, 11);
                const numbers = cleaned.split("");
                let formatted = "";
    
                if (numbers.length > 0) formatted += `(${numbers.slice(0, 2).join("")})`;
                if (numbers.length > 2) formatted += ` ${numbers.slice(2, 7).join("")}`;
                if (numbers.length > 7) formatted += `-${numbers.slice(7, 11).join("")}`;
    
                return formatted;
            };
    
            const handleInput = () => {
                input.value = formatValue(input.value);
            };
    
            const handleKeyDown = (event) => {
                if ((event.key === 'Backspace' || event.key === 'Delete') && input.selectionStart === input.value.length) {
                    event.preventDefault(); // impede que o backspace padrão aconteça
                    const cleaned = input.value.replace(/\D/g, "").slice(0, -1); // remove o último número
                    input.value = formatValue(cleaned); // aplica a máscara de novo
                }
            };
    
            input.addEventListener('input', handleInput);
            input.addEventListener('keydown', handleKeyDown);
    
            // Cleanup quando o componente desmontar
            return () => {
                input.removeEventListener('input', handleInput);
                input.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, []);

    return(
        <>
        <div className="input-container">
            <input {...props} required/>
            <label htmlFor={props.id}>{props.label}</label>
        </div>
        </>
    );
}
