import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ContactList({ contacts, onDelete }) {
  if (!contacts || contacts.length === 0) {
    return <p>Sem contatos.</p>;
  }

  return (
    <div className="contactlist">
      {contacts.map((contato, index) => (
        <div className="contact" key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', position: 'relative' }}>
          <h3><strong>Informações de Contato:</strong></h3>
          <p><strong>Nome:</strong> {contato.nome_sobrenome}</p>
          <p><strong>Email:</strong> {contato.email}</p>
          <p><strong>Telefone:</strong> {contato.telefone}</p>
          <p><strong>Mensagem:</strong> {contato.mensagem}</p>
          
          <button 
            onClick={() => onDelete(contato.id)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'red',
              fontSize: '1.2rem'
            }}
            title="Deletar contato"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;