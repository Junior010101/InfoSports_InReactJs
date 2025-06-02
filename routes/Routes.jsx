import { Route, Routes } from 'react-router-dom';
import Index from '../src/pages/Home/Principal';
import ErrorPage from '../src/pages/ErrorPage';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Registro/Registro';
import Contact from '../src/pages/Contato/Contato';
import InfoPage from '../src/pages/Home/InfoPage';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function ReloadOnLeaveEsportes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const isEsporte = (path) => /^\/esportes\/[^/]+$/.test(path);

    const saiuDeEsporte = isEsporte(prevPath.current) && !isEsporte(location.pathname);

    if (saiuDeEsporte) {
      window.location.reload();
    }

    // Atualiza o caminho anterior
    prevPath.current = location.pathname;
  }, [location.pathname]);

  return null;
}

export function Rotas() {
  return (
    <>
      <ReloadOnLeaveEsportes />
      <Routes>
        <Route index element={<Index />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Register />} />
        <Route path="contato" element={<Contact />} />
        <Route path="esportes/:nome" element={<InfoPage />} />
      </Routes>
    </>
  );
}
