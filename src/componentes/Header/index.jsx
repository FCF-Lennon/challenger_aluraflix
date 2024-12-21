import styled from "styled-components";
import Boton from "../Boton";
import Imagen from "../Imagen";
import home_activo from "../../assets/iconos/home_activo.png";
import home_inactivo from "../../assets/iconos/home_inactivo.png";
import newvideo_activo from "../../assets/iconos/newvideo_activo.png";
import newvideo_inactivo from "../../assets/iconos/newvideo_inactivo.png";
import { useState } from "react";

console.log(home_inactivo)

const EstelizarHeader = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #262626;
    height: 54px;
    box-sizing: border-box;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0 5px 29px 0 rgba(34, 113, 209, 0.7);
    padding: 5px 50px;

    img {
        height: 40px;
    }
    
    div {
        display:flex;
        justify-content: center;
        gap: 25px;
        width: 400px;
        height: 100%;
        margin-left: 20px;
    }

    @media (max-width: 1024px) {
        height: 125px;
        padding: 35px 20px;
    }


    @media (max-width: 430px) {
        background-color: rgba(0, 0, 0, 0.9);
        margin-top:100px;
        order: 3;
        height: 100px;
        border-top: 4px solid #2271D1;
        border-bottom: 0;
        padding: 20px;
       
        img {
            display: none;
        }
        button > img {
            display: flex;
        }
        div {
            margin-left: 0;
        }
    }
`

const Header = () => {

    const [botonActivo, setBotonActivo] = useState("HOME");

    const handleSeleccionarBoton = (nombreBoton) => {
        setBotonActivo(nombreBoton);
    }

    return (
        <EstelizarHeader>
            <Imagen src="/Logo.svg" alt="Logo Alura Flix" />
            <div>
                <Boton 
                    texto="HOME" 
                    imagenBotonActivo={home_activo}
                    imagenBotonInactivo={home_inactivo} 
                    alt="Icono de pagina principal"
                    activo={botonActivo === "HOME"}
                    onClick={() => handleSeleccionarBoton("HOME")}
                     />
                <Boton 
                    texto="NUEVO VIDEO" 
                    imagenBotonActivo={newvideo_activo} 
                    imagenBotonInactivo={newvideo_inactivo}
                    alt="Icono de nuevo video"
                    activo={botonActivo === "NUEVO VIDEO"}
                    onClick={() => handleSeleccionarBoton("NUEVO VIDEO")}
                    />
            </div>
        </EstelizarHeader>
    )
}

export default Header;