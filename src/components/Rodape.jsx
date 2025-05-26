import { Link } from 'react-scroll/modules';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
        {/* Rodapé */}
        <footer>
            <ul>
                <li><NavLink to={'/'}>Info Sports</NavLink></li>
                <li><Link to={'header'}>Voltar ao inicio</Link></li>
            </ul>
        </footer>
        </>
    );
}
