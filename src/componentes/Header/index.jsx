import styled from "styled-components";
import Boton from "../Boton";


const EstelizarHeader = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: #262626;
    height: 54px;
    max-height: fit-content;
    box-sizing: border-box;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0 5px 29px 0 rgba(34, 113, 209, 0.7);

    img {
        height: 80%;
    }
    
    div {
        display:flex;
        gap: 25px;
        width: 400px;
    }

`

const Header = () => {
    return (
        <EstelizarHeader>
            <img src="Logo.svg" alt="Logo Alura Flix" />
            <div>
                <Boton texto="HOME" />
                <Boton texto="NUEVO VIDEO"></Boton>
            </div>
        </EstelizarHeader>
    )
}

export default Header;