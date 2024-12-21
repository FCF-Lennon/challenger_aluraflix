import styled from "styled-components";
import Imagen from "../Imagen";

const EstilizarBoton = styled.button`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    color: #F5F5F5;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    padding: 10px;
    flex-grow:1;
    outline: none; 
    -webkit-tap-highlight-color: transparent;

    &:hover {
        border-color: #FFFFFF;
        color: #FFFFFF;
    }

    &:focus {
        background-color: rgba(0, 0, 0, 0.9);
        border-color: #2271D1;
        box-shadow: inset 0 0 12px 4px #2271D1;
        color: #2271D1;
    }

    img {
        display: none;
    }

    h3 {
        white-space: nowrap; 
    }

    @media (max-width: 430px) {
        background-color: ${(props) => (props.activo ? "rgba(34, 113, 209, 0.24)" : "none")};
        gap: 20px;
        border-radius: 50px;
        border: ${(props) => (props.activo ? "2px solid #2271D1" : "none")};
        padding: ${(props) => (props.activo ? "15px 15px" : "0")};
        flex-grow: 0;
        width: ${(props) => (props.activo ? "fit-content" : "auto")};
        transition: all 0.2s ease;

        &:hover {
            border-color: #2271D1;
            color: #2271D1;
        }
        
        &:focus {
            background-color: rgba(34, 113, 209, 0.24);
            border-color: #2271D1;
            box-shadow: none;
            color: #2271D1;
        }

        &:active {
            border-color: inherit;
        }

        & > img {
            display: block;
            width: ${(props) => (props.activo ? "32px" : "40px")};
            height: ${(props) => (props.activo ? "32px" : "40px")};
            transition: all 0.3s ease; 
        }

        & > h3 {
            display: ${(props) => (props.activo ? "flex" : "none")};
            color: #2271D1;
            margin: 0;
        }

    }

         
`


const Boton = ({texto, imagenBotonInactivo, imagenBotonActivo, alt, activo, onClick}) => {
    return (
        <EstilizarBoton activo={activo} onClick={onClick}>
            <Imagen src={activo ? imagenBotonActivo : imagenBotonInactivo} alt={alt}/>
            <h3>{texto}</h3>
        </EstilizarBoton>
    )
}

export default Boton; 