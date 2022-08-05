import { Formulaire } from "./Formulaire/Formulaire"

export const PompeAChaleur = () => {
    return (

        <section className="pompe-a-chaleur">
            <div className="pompe-a-chaleur__content">
                <h1>Votre pompe à chaleur "Air Eau / Air Air" au meilleur prix</h1>
                <ul>
                    <li>Faites vous aider dans vos démarches par des professionnels</li>
                    <li>Comment profites des aides MaBénéficiez jusqu'à 9500€ d'aides </li>
                </ul>
            </div>
            <Formulaire />
        </section>
    )
}
