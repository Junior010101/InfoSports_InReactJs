export const DarkMode = () => {
    let darkmode = localStorage.getItem('darkmode');

    const AplicarDarkMode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    }

    const RetirarDarkMode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', null);
    }

    darkmode !== "active" ? AplicarDarkMode() : RetirarDarkMode();
    
}
