import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import { HeaderForm } from "./HeaderForm";

export const Localisation = ({question, setQuestion, setFormData, formData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setQuestion((currentQuestion) => currentQuestion + 1);
        setFormData({ ...formData, Q6: data });
    }

    const description = "Cette information est nécessaire car le montant d'aides peut varier en fonction de votre localisation";

    return (
        <form  className="questions-input" onSubmit={handleSubmit(onSubmit)}>

            <HeaderForm titre='Où se situe le logement concerné par les travaux ?' description={description} />     
            <div className="questions-input--container">  
                <label htmlFor='localisation'>Code postale du logement concerné :
                    <input id='localisation' type="number" placeholder="Ex: 75000" {...register('Localisation du logement', {required: 'Ce champ est obligatoire'})} />
                </label> 
            </div>          

            <Footer question={question} setQuestion={setQuestion} /> 
        </form>
    )
}
