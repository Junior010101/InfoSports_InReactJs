import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export const LoadingPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return(() => {
      document.body.style.removeProperty('overflow');
    });
  }, []);
  return (
    <>
      <LoadingContainer>
        <Spinner />
        <LoadingText>Carregando...</LoadingText>
      </LoadingContainer>
    </>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  self-align: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(240, 240, 240);
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top: 5px solid #000;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  user-select: none;
`;