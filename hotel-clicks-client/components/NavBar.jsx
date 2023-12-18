import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavBar({ changeLanguage, currentLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="NavBar">
      <label>{t("languageSelector")}: </label>
      <select
        id="languageSelect"
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
}

export default NavBar;
