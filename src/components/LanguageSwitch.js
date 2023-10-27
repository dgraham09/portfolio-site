import { useTranslation, Trans } from "react-i18next";
import { useState, useRef } from "react";
import english from "../assets/english.png";
import ReactCountryFlag from "react-country-flag";
import Dropdown from "react-bootstrap/Dropdown";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const dropdownRef = useRef(null);

  const [countries] = useState([
    { code: "fr", title: "France" },
    { code: "gb", title: "United Kingdom" },
  ]);

  const [toggleContents, setToggleContents] = useState(
    <span class={`fi fi-gb mx-2 dropDownItem`}></span>
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [language, setLanguage] = useState("gb");

  const lngs = {
    gb: { nativeName: "English" },
    fr: { nativeName: "French" },
  };

  const closeDropdown = (e) => {
    if (
      dropdownRef.current &&
      showDropdown &&
      !dropdownRef.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };

  document.addEventListener("mousedown", closeDropdown);

  return (
    <div className="language-switcher">
      <form>
        <Dropdown
          onSelect={(eventKey) => {
            const { code, title } = countries.find(
              ({ code }) => eventKey === code
            );

            setLanguage(code);
            setShowDropdown(true);
            i18n.changeLanguage(eventKey);
          }}
          onToggle={() => setShowDropdown(!showDropdown)}
        >
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-flags"
            className="text-left dropdownToggle"
            style={{ width: 300 }}
          >
            <span class={`fi fi-${language} mx-2 flagIcon`}></span>
          </Dropdown.Toggle>

          {showDropdown && (
            <Dropdown.Menu className="item-background" ref={dropdownRef}>
              {countries.map(({ code, title }) => (
                <Dropdown.Item key={code} eventKey={code}>
                  <span class={`fi fi-${code} mx-2 dropDownIcon`}></span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          )}
        </Dropdown>
      </form>
    </div>
  );
};

export default LanguageSwitcher;
