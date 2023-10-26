import { useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
    return (
            <div className="footer flex justify-end">
                <h5>{t('made')}</h5>
                <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    className="language inline m-4" alt="react"
                    ></img>
            </div>
  
    )
}

export default Footer