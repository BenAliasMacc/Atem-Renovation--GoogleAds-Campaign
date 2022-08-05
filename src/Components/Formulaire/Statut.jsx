import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import { HeaderForm } from "./HeaderForm";

export const Statut = ({question, setQuestion, setFormData, formData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setQuestion((currentQuestion) => currentQuestion + 1);
        setFormData({ ...formData, Q1: data });
        console.log(data)
    }

    return (
        <form className="questions-radio" onSubmit={handleSubmit(onSubmit)} >

            <HeaderForm titre='Dans ce logement vous êtes :' />
            
            <div className="questions-radio--container">
                <div className="questions-radio__choices">
                    <label htmlFor="proprietaire-occupant" >
                        <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.23.38.61eeb83ddeb765.03482046.png" alt="propriétaire occupant" />
                        <p>Propriétaire occupant</p>
                    </label>
                    <input 
                        type="radio"
                        id="proprietaire-occupant"
                        name="statut"
                        value="propriétaire occupant"
                        {...register("Votre statut", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>

                <div className="questions-radio__choices">
                    <label htmlFor="proprietaire-residence-secondaire" >
                        <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.23.40.61eeb8454f4977.86500467.png" alt="propriétaire d'une résidence secondaire" />
                        <p>Propriétaire d'une résidence secondaire</p>
                    </label>
                    <input 
                        type="radio"
                        id="proprietaire-residence-secondaire"
                        name="statut"
                        value="propriétaire d'une résidence secondaire"
                        {...register("Votre statut", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>

                <div className="questions-radio__choices">
                    <label htmlFor="proprietaire-bailleur" >
                        <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2015.23.42.61eeb84da4fd80.22554435.png" alt="propriétaire bailleur" />
                        <p>Propriétaire bailleur</p>
                    </label>
                    <input 
                        type="radio"
                        id="proprietaire-bailleur"
                        name="statut"
                        value="propriétaire bailleur"
                        {...register("Votre statut", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>

                <div className="questions-radio__choices">
                    <label htmlFor="locataire" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07%203.61ee990bc0d2f5.71543942.jpg" alt="locataire" />
                        <p>Locataire</p>
                    </label>
                    <input 
                        type="radio"
                        id="locataire"
                        name="statut"
                        value="locataire"
                        {...register("Votre statut", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>                
            </div>

            <Footer question={question} setQuestion={setQuestion} />
        </form>
    )
}