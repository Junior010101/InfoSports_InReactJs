import React, { useEffect, useState } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://suaapi.com/contatos'); // Substitua pela sua URL
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Erro ao buscar contatos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchContacts();
  }, []);

  if (loading) return <p>Carregando contatos...</p>;

  return (
    <div className="contactlist">
      {contacts.map((contato, index) => (
        <div className="contact" key={index}>
          <h3>Informações de Contato:</h3>
          <p><strong>Nome:</strong> {contato.nome}</p>
          <p><strong>Email:</strong> {contato.email}</p>
          <p><strong>Telefone:</strong> {contato.telefone}</p>
          <p><strong>Mensagem:</strong> {contato.mensagem}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
