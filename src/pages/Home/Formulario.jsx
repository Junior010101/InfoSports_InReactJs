import { Caucular } from '../../js/imc';
import { Input } from '../../components/Input';

export const Form = () => {  

  const FormSubmit = (event) => {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso == '' || peso == null && altura == '' || altura == null){
      console.error();
    }
    else {
      event.preventDefault();
      Caucular(peso, altura);

      document.getElementById("peso").value = '';
      document.getElementById("altura").value = '';
    }

    document.getElementById('close').addEventListener('click', () => {
      document.getElementById('resultado').close();
    });
  };
  
  return (
    <>
    <form onSubmit={FormSubmit} action="">
        <h2>INDICE DE MASSA CORPORAL (IMC)</h2>
        <h3>Peso (KG)</h3>
        <Input 
          id='peso' 
          step={0.01} 
          type='number' 
          label='Digite o peso...' 
        />
        <h3>Altura (M)</h3>
        <Input 
          id='altura' 
          step={0.01} 
          type='number' 
          label='Digite a altura...'
        />
        <button id='btn' type="submit">Calcular</button>
        
        <dialog id='resultado'>
          <button type='reset' id='close'>X</button>
          <h2>Resultado:</h2>
          <p id='info'></p>
          <p id='classificacao'></p>
          <p id='grau'></p>
        </dialog>
    </form>
    </>
  );
}
