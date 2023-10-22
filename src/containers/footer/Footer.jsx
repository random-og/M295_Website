import React, {useState} from "react";
import "./footer.css";
import logo from "../../assets/OIG.png"

const Footer = () => {
    const [toggleImpressum, setToggleImpressum] = useState(false);
    return (
        <div className="bw__footer section__padding unselectable">
            <div className="bw__footer-links">
                <div className="bw__footer-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="bw__footer-links_div">
                    <h4>Social Medias</h4>
                    <a href="https://www.twitch.tv/random_og_">Twitch</a>
                    <a href="https://twitter.com/GrossBouf_OG">X (Twitter)</a>
                    <a herf="https://www.linkedin.com/in/brendan-demierre-18b66a297/">LinkedIn</a>
                </div>
                <div className="bw__footer-links_div">
                    <h4>Company</h4>
                    {toggleImpressum
                        ? <p onClick={() => setToggleImpressum(false)}>Impressum</p>
                        : <p onClick={() => setToggleImpressum(true)}>Impressum</p>
                    }
                    {toggleImpressum &&(
                        <div className="bw__footer-links_div-container scale-up-center">
                            <p><strong><i>Kontakt-Adresse</i></strong></p>
                            <p>Brendan Demierre<br/>Zieglerstrasse 51,<br/>3007 Bern<br/>Schweiz</p>
                            <p>E-Mail:<br/>contact@brendandemierre.com</p>
                            <br/>
                            <br/>
                            <p><strong><i>Haftungsausschluss</i></strong></p><p>
                            Der Autor &uuml;bernimmt keinerlei Gew&auml;hr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualit&auml;t, Zuverl&auml;ssigkeit und Vollst&auml;ndigkeit der Informationen.</p>
                            <p>Haftungsanspr&uuml;che gegen den Autor wegen Sch&auml;den materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der ver&ouml;ffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische St&ouml;rungen entstanden sind, werden ausgeschlossen.</p>
                            <p>Alle Angebote sind unverbindlich. Der Autor beh&auml;lt es sich ausdr&uuml;cklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ank&uuml;ndigung zu ver&auml;ndern, zu erg&auml;nzen, zu l&ouml;schen oder die Ver&ouml;ffentlichung zeitweise oder endg&uuml;ltig einzustellen.</p><br/><br/><p><strong><i>Haftungsausschluss f&uuml;r Links</i></strong></p><p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung f&uuml;r solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.</p>
                            <br/>
                            <br/>
                            <p><strong><i>Urheberrechte</i></strong></p>
                            <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, geh&ouml;ren ausschliesslich <strong>Brendan Demierre</strong> oder den speziell genannten Rechteinhabern. F&uuml;r die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtstr&auml;gers im Voraus einzuholen.</p>
                            <br/>
                            Quelle: <a href="https://www.swissanwalt.ch" target="_blank" rel="noreferrer">SwissAnwalt</a>
                        </div>
                    )}
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="bw__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Zieglerstrasse 51, 3007 Bern</p>
                    <p>078 802 52 23</p>
                    <p>contact@brendandemierre.com</p>
                </div>
            </div>
            <div className="bw__footer-copyright">
                <p>© 2022 Brendan Demierre. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer