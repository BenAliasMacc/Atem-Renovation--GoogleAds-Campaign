import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import { HeaderForm } from "./HeaderForm";

export const InfosPersonnelles = ({question, setQuestion, setFormData, formData}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setQuestion((currentQuestion) => currentQuestion + 1);
        setFormData({ ...formData, Q7: data });  
        console.log(data)
    }

    return (
        <form  className="questions-input" onSubmit={handleSubmit(onSubmit)}>

            <HeaderForm titre='Informations personnelles' />

            <div className="questions-input--container">            
                <label htmlFor='nom'>Votre Nom :
                    <input id='nom' type="text" placeholder="Nom" {...register('nom', {required: 'Ce champ est obligatoire'})} />
                </label>           
        
                <label htmlFor='prenom'>Votre Prénom :
                    <input id='prenom' type="text" placeholder="Prénom" {...register('prenom', {required: 'Ce champ est obligatoire'})} />
                </label>            
            
                <label htmlFor='telephone'>N° de téléphone :
                    <input id='telephone' type="text" placeholder="Téléphone" {...register('telephone', {required: 'Ce champ est obligatoire'})} />
                </label>           
            
                <label htmlFor='email'>Adresse Mail :
                    <input id='email' type="text" placeholder="Email" {...register('email', {required: 'Ce champ est obligatoire'})} />
                </label>
            </div>

            <Footer question={question} setQuestion={setQuestion} /> 
        </form>
    )
}
