import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logoprs from "../../assets/prs.jpg"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="divFooter">
                <div>
                    <img src={logoprs}/>
                </div>
                <div>
                    <h4>PRS CORTINAS</h4>
                    <p>prscortinas@gmail.com</p>
                    <p>Elortondo, Santa Fe</p>
                    <p>+54 9 1233 123123</p>
                </div>
                <div>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>WhatsApp</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer 