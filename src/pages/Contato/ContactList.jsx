import React from 'react';

function ContactList({ contacts }) {
  if (!contacts || contacts.length === 0) {
    return <p>Sem contatos.</p>;
  }

  return (
    <div className="contactlist">
      {contacts.map((contato, index) => (
        <div className="contact" key={index}>
          <h3><strong>Informações de Contato:</strong></h3>
          <p><strong>Nome:</strong> {contato.nome_sobrenome}</p>
          <p><strong>Email:</strong> {contato.email}</p>
          <p><strong>Telefone:</strong> {contato.telefone}</p>
          <p><strong>Mensagem:</strong> {contato.mensagem}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
