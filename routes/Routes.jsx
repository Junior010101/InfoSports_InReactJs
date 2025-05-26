import { Route, Routes } from 'react-router-dom';
import Index from '../src/pages/Home/Principal';
import ErrorPage from '../src/pages/ErrorPage';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Registro/Registro';
import Contact from '../src/pages/Contato/Contato';

export function Rotas() {
    return(
        <Routes>
            <Route index element={<Index />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='login' element={<Login />} />
            <Route path='registro' element={<Register />} />
            <Route path='contato' element={<Contact />} />
        </Routes>
    );
}
