import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavBar({ changeLanguage, currentLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="NavBar">
      <h3>{t("languageSelector")}: </h3>

      {currentLanguage === "en" && (
        <Link to="/de/graph" onClick={() => changeLanguage("de")}>
          <h3>de</h3>
        </Link>
      )}
      {currentLanguage === "de" && (
        <Link to="/en/graph" onClick={() => changeLanguage("en")}>
          <h3>en</h3>
        </Link>
      )}
    </div>
  );
}

export default NavBar;
