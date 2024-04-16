import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi" //importando a biblioteca dos icones 

import "./Navbar.css"

function Navbar(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // é chamado para prevenir o comportamento padrão de submissão do formulário, que é recarregar a página 

        if(!search) return

        // o navigate redireciona para uma rota quando a função é submetida 
        navigate(`/search?q=${search}`)
        setSearch("");
    }

    return(
        <nav id="navbar">
        <h2>
            <Link to="/">
               <BiCameraMovie/> MoviesLib
            </Link>
        </h2>
        
        {/* o onSubmit é uma função que é desparada quando é enviado um formulario*/}
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Busque um filme"
            onChange={(event) => setSearch(event.target.value)}   /*o onChange é chamado sempre que o valor do input é alterado. */
            value={search}/>
            
            <button type="submit">  
                <BiSearchAlt2/>
            </button>
        </form>
        </nav>
    );
}

export default Navbar;