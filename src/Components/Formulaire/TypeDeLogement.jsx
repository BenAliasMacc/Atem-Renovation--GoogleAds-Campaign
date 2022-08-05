import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import { HeaderForm } from "./HeaderForm";

export const TypeDeLogement = ({question, setQuestion, setFormData, formData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setQuestion((currentQuestion) => currentQuestion + 1);
        setFormData({ ...formData, Q2: data });
        console.log(data)
    }

    return (
        <form className="questions-radio" onSubmit={handleSubmit(onSubmit)} >

            <HeaderForm titre='Les travaux concernent :' />

            <div className="questions-radio--container">
                <div className="questions-radio__choices">
                    <label htmlFor="maison" >
                        <img src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/maison%20new.61ee97c06dee05.85677018.jpg" alt="maison" />
                        <p>Une maison</p>
                    </label>
                    <input 
                        type="radio"
                        id="maison"
                        name="logement"
                        value="maison"
                        {...register("Type de logement", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>   

                <div className="questions-radio__choices">
                    <label htmlFor="appartement" >
                        <img className="" src="https://www.jotform.com/uploads/tomguerreau.ads/form_files/PHOTO-2022-01-24-12-44-45.61ee950314b615.09474320.jpg" alt="appartement" />
                        <p>Un appartement</p>
                    </label>
                    <input 
                        type="radio"
                        id="appartement"
                        name="logement"
                        value="appartement"
                        {...register("Type de logement", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>
            </div>

            <Footer question={question} setQuestion={setQuestion} />    
        </form>
    )
}