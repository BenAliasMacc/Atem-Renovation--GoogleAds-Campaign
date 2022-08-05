import francerenov from "../Assets/francerenov.png"
import maprimerenov from "../Assets/maprimerenov.png"
import cee from "../Assets/cee.png"
import qualibat from "../Assets/qualibat.png"
import rgequalipac from "../Assets/rge-qualipac.png"
import republiquefrancaise from "../Assets/republiquefrancaise.png"

export const Header = () => {
    return (

        <header className="header">
            <nav>
                <ul>
                    <li><img src={republiquefrancaise} alt="" /></li>
                    <li><img src={francerenov} alt="" /></li>
                    <li><img src={maprimerenov} alt="" /></li>
                    <li><img src={cee} alt="" /></li>
                    <li><img src={qualibat} alt="" /></li>
                    <li><img src={rgequalipac} alt="" /></li>
                </ul>
            </nav>
        </header>
    )

}