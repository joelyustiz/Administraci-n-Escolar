import React from 'react'
import { Link } from 'react-router-dom'

//css
import './nav-option.css'
function NavOption(props) {
    return(
        <div className="NavOption">
            <Link to="/">Inicio</Link>
            <Link to="/secciones">Secciones</Link>
            <Link to="/alumnos">Alumnos</Link>
            <Link to="/personal">Personal</Link>
        </div>
    )
}
export default NavOption;