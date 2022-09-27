import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

function LanguageChooser() {
    const [language, setLanguage] = useContext(LanguageContext);

    return (
        <div>
            <h3>LanguageChooser</h3>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>🇩
                {/* <option value="">--Please choose an option--</option> */}
                <option value="US">&#127482;&#127480; English</option>
                <option value="DE">&#127465;&#127466; German</option>
                <option value="FR">&#127467;&#127479; French</option>
            </select>
        </div>
    );
}

export default LanguageChooser;
