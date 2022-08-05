import { useState } from "react";
import { useForm } from "react-hook-form";
import { InfosPersonnelles } from "./InfosPersonnelles";
import { TypeDeLogement } from "./TypeDeLogement";
// import './Formulaire.scss';
import { TypeEnergie } from "./TypeEnergie";
import { TypeDeTravaux } from "./TypeDeTravaux";
import { SurfaceHabitable } from "./SurfaceHabitable";
import { Statut } from "./Statut";
import { Localisation } from "./Localisation";

export const Formulaire = () => {

    const { formState: { errors }, handleSubmit } = useForm({});
    const [question, setQuestion] = useState(0);
    const [formData, setFormData] = useState({
        Q1: "",
        Q2: "",
        Q3: "",
        Q4: "",
        Q5: "",
        Q6: ""
      });

      console.log(question);

      console.log(formData);

    const questionDisplay = () => {
        switch (question) {
            case 0:
                return <Statut question={question} setQuestion={setQuestion} setFormData={setFormData} formData={formData} />;
            case 1:
                return <TypeDeLogement question={question} setQuestion={setQuestion} setFormData={setFormData} formData={formData} />;
            case 2:
                return <TypeEnergie question={question} setQuestion={setQuestion} setFormData={setFormData} formData={formData} />;
            case 3:
                return <TypeDeTravaux question={question} setQuestion={setQuestion} setFormData={setFormData} formData={formData} />;
            case 4:
                return <SurfaceHabitable question={question} setQuestion={setQuestion} setFormData={setFormData} formData={formData} />;            
            case 5:
                return <Localisation question={question} setQuestion={setQuestion} setFormData={setFormData} formData={formData} />;        
            case 6:
                return <InfosPersonnelles question={question} setQuestion={setQuestion} setFormData={setFormData} formData={formData} />;        
            default:
                break;
        } 
      };

    return (

        <section className="formulaire">      
            {questionDisplay()}        
        </section>
    )
}
