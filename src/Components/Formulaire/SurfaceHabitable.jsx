import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
    import { HeaderForm } from "./HeaderForm";

export const SurfaceHabitable = ({question, setQuestion, setFormData, formData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setQuestion((currentQuestion) => currentQuestion + 1);
        setFormData({ ...formData, Q5: data });  
        console.log(data)
    }

    return (
        <form  className="questions-input" onSubmit={handleSubmit(onSubmit)}>

            <HeaderForm titre='Quelle surface sera chauffée par la pompe à chaleur ?' />        

            <div className="questions-input--container">  
                <label htmlFor='surface'>Surface en m² :
                    <input id='surface' type="number" placeholder="Surface" {...register('Surface à chauffer', {required: 'Ce champ est obligatoire'})} />
                </label> 
            </div>          

            <Footer question={question} setQuestion={setQuestion} /> 
        </form>
    )
}
