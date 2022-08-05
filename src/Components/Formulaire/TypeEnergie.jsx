import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import { HeaderForm } from "./HeaderForm";

export const TypeEnergie = ({question, setQuestion, setFormData, formData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setQuestion((currentQuestion) => currentQuestion + 1);
        setFormData({ ...formData, Q3: data });
        console.log(data)
    }

    const description = "Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale"

    return (
        <form className="questions-radio" onSubmit={handleSubmit(onSubmit)} >

            <HeaderForm titre='Quelle est l’énergie de chauffage actuelle de votre logement ?' description={description} />
            
            <div className="questions-radio--container">
                <div className="questions-radio__choices">
                    <label htmlFor="fioul" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/icon%20.61ee98ab4f2903.12289323.jpg" alt="fioul" />
                        <p>Chauffage au fioul</p>
                    </label>
                    <input 
                        type="radio"
                        id="fioul"
                        name="energie"
                        value="fioul"
                        {...register("Energie Actuelle", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>   

                <div className="questions-radio__choices">
                    <label htmlFor="electrique" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/icon.61ee98c05d3ab9.69489558.jpg" alt="electrique" />
                        <p>Chauffage electrique</p>
                    </label>
                    <input 
                        type="radio"
                        id="electrique"
                        name="energie"
                        value="electrique"
                        {...register("Energie Actuelle", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>

                <div className="questions-radio__choices">
                    <label htmlFor="gaz" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-44-45.61ee950314b615.09474320.jpg" alt="gaz" />
                        <p>Chauffage au gaz</p>
                    </label>
                    <input 
                        type="radio"
                        id="gaz"
                        name="energie"
                        value="gaz"
                        {...register("Energie Actuelle", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>

                <div className="questions-radio__choices">
                    <label htmlFor="bois" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07%202.61ee98e4e96377.16161700.jpg" alt="bois" />
                        <p>Chauffage au bois</p>
                    </label>
                    <input 
                        type="radio"
                        id="bois"
                        name="energie"
                        value="bois"
                        {...register("Energie Actuelle", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>

                <div className="questions-radio__choices">
                    <label htmlFor="charbon" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07%204.61ee98f8cc03f5.01959819.jpg" alt="charbon" />
                        <p>Chauffage au charbon</p>
                    </label>
                    <input 
                        type="radio"
                        id="charbon"
                        name="energie"
                        value="charbon"
                        {...register("Energie Actuelle", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>

                <div className="questions-radio__choices">
                    <label htmlFor="pompe-a-chaleur" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-50-07%203.61ee990bc0d2f5.71543942.jpg" alt="pompe à chaleur" />
                        <p>Pompe à Chaleur</p>
                    </label>
                    <input 
                        type="radio"
                        id="pompe-a-chaleur"
                        name="energie"
                        value="pompe à chaleur"
                        {...register("Energie Actuelle", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>                
            </div>

            <Footer question={question} setQuestion={setQuestion} />    
        </form>
    )
}