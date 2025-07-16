import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <div className='language-toggle'>
      <button onClick={() => i18n.changeLanguage('en')}><b>EN</b></button>
      <button onClick={() => i18n.changeLanguage('fr')}><b>FR</b></button>
    </div>
  );
}

export default LanguageToggle;
