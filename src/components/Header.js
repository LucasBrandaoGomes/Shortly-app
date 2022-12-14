import logoShortly from '../images/shortly.png'
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"

export default function Header(){
    
    const navigate = useNavigate()
    function goInit(){
        navigate("/")
    }

    return(
        <Top>
            <Bar>
                <p>Seja bem-vindo(a)</p>
                <div>
                    <Link to="/signin" style={{textDecoration: 'none'}}>
                        <p>Entrar</p>
                    </Link>
                    <Link to="/signup" style={{textDecoration: 'none'}}>
                        <p>Cadastrar-se</p>
                    </Link>
                </div>
            </Bar>
            <Logo>
                <h1>Shortly</h1>
                <img src={logoShortly} onClick={goInit} alt="icone-logo"/>
            </Logo>
        </Top>
    )
}
const Top = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    position: fixed;
    top:6vh;
    left:0;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #9C9C9C
    }
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 200;
        font-size: 64px;
        line-height: 80px;
        color: #000000
    }
`
const Bar = styled.div`
    padding-left:10%;
    padding-right:10%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    div{
        display:flex;
        width:15%;
        justify-content:space-between;
    }
    margin-bottom:3vh;
`
const Logo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    img, h1{
        &:hover{
            cursor: pointer;

        }}
    img{
        width:12vh;
        height:12vh;
        
    }
`
