import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

function WelcomeMessage() {
    const [language] = useContext(LanguageContext);
    const languages = {
        DE: 'Hallo Welt!',
        US: 'Hello world!',
        FR: 'Salut monde!'
    };

    return (
        <h3>{languages[language]}</h3>
    );
}

export default WelcomeMessage;