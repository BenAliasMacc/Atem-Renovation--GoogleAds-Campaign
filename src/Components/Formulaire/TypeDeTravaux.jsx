import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import { HeaderForm } from "./HeaderForm";

export const TypeDeTravaux = ({question, setQuestion, setFormData, formData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setQuestion((currentQuestion) => currentQuestion + 1);
        setFormData({ ...formData, Q4: data });
        console.log(data)
    }

    return (
        <form className="questions-radio" onSubmit={handleSubmit(onSubmit)} >

            <HeaderForm titre='Les travaux concernent :' description='Pompes à chaleur' />
            
            <div className="questions-radio--container">
                <div className="questions-radio__choices">
                    <label htmlFor="air-eau" >
                        <img src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.51.30.61eeb7113d7776.98732913.png" alt="air-eau" />
                        <p>Pompe à chaleur air/eau</p>
                    </label>
                    <input 
                        type="radio"
                        id="air-eau"
                        name="travaux"
                        value="pompe à chaleur air-eau"
                        {...register("Type de travaux", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>   

                <div className="questions-radio__choices">
                    <label htmlFor="air-air" >
                        <img className="" src="https://www.jotform.com/uploads/laverneboerger28167/form_files/Capture%20d%E2%80%99e%CC%81cran%202022-01-24%20a%CC%80%2012.52.03.61eeb72e32d759.78376580.png" alt="air-air" />
                        <p>Pompe à chaleur air/air</p>
                    </label>
                    <input 
                        type="radio"
                        id="air-air"
                        name="travaux"
                        value="pompe à chaleur air-air"
                        {...register("Type de travaux", {required: 'Ce champ est obligatoire'})}                        
                    />                
                </div>
            </div>

            <Footer question={question} setQuestion={setQuestion} />    
        </form>
    )
}