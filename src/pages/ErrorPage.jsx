import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
    color: #343a40;
    text-align: center;
    padding: 20px;
    margin-top: -50px;
    overflow: hidden;
    user-select: none;
`;

const Heading = styled.h1`
    font-size: 4rem;
    margin-bottom: 20px;
`;

const Message = styled.p`
    font-size: 1.5rem;
    margin-bottom: 30px;
`;

const Button = styled(NavLink)`
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
        background-color: #0056b3;
    }
`;

const ErrorPage = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    });
    return (
        <>
        <Container>
            <Heading>404</Heading>
            <Message>Oops! A página que você está procurando não foi encontrada.</Message>
            <Button to={'/'}>Voltar para a Página Inicial</Button>
        </Container>
        </>
    );
};

export default ErrorPage;
