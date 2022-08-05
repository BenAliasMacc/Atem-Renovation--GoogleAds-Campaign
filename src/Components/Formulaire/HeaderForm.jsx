export const HeaderForm = ({titre, description}) => {

    return (

        <div className="header-form">
            <h2 className="header-form__titre">{titre}</h2>
            {description && <p className="header-form__description">{description}</p>}
        </div>
    )
}
