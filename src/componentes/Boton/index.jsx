import styled from "styled-components";


const EstilizarBoton = styled.button`
    background: transparent;
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
`

const Boton = ({texto}) => {
    return (
        <EstilizarBoton>
            {texto}
        </EstilizarBoton>
    )
}

export default Boton; 