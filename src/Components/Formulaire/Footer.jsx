import flecheDroite from '../../Assets/arrowRight.svg';
import flecheGauche from '../../Assets/arrowLeft.svg';

export const Footer = ({question, setQuestion}) => {

    return (

        <footer className="footer">
            {question !== 0 ?
                <button
                    className="footer__bouton-precedent" 
                    type="button" 
                    disabled={question === 0} 
                    onClick={() => {
                        setQuestion((currentQuestion) => currentQuestion - 1);
                    }}
                >
                    <img src={flecheGauche} alt="fleche vers la Gauche" />
                    <p>PRECEDENT</p>
                </button>
            :
                <button
                    type="button" 
                    disabled={question === 0}
                >
                </button>
            }
            
            {question === 6 ?
                <button className="footer__bouton-envoyer">            
                    <p>ENVOYER</p>                        
                </button>
            :
                <button className="footer__bouton-suivant">                
                    <p>SUIVANT</p>
                    <img src={flecheDroite} alt="fleche vers la Droite" />
                </button>
            }
        </footer>
    )
}
