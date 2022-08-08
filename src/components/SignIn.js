import styled from "styled-components"
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import  { useState } from  "react"
import { ThreeDots } from "react-loader-spinner";
import Header from "./Header";

export default function SignUp(){
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [disableButton,setDisableButton] = useState(false)


    function SubmitSignUp(event){
        event.preventDefault();
        
        setDisableButton(true);
        
        const infoSignIn =
            {
                email,
                password
                
            }

        const promise = axios.post("https://shortly-project-api.herokuapp.com/signin", infoSignIn)
        
        promise
        .then(res =>{ 
            navigate("/main");
        })
        .catch(err=> {alert("Erro, preencha corretamente os dados");
        setDisableButton(false);});

    }

    return(
        <ContainerAuth >
            <Header></Header>
            <Form onSubmit={SubmitSignUp} >
                <input type="email" disabled={disableButton} placeholder="email"  value={email} onChange={e => setEmail(e.target.value)} required/>
                <input type="password" disabled={disableButton} placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                <div><Entrar type="submit" disabled={disableButton}>{disableButton ? <ThreeDots color="white"/> : "Entrar"}</Entrar></div>
            </Form >
        </ContainerAuth>
   )
}

const ContainerAuth = styled.div`
    width: 100%;
    height: 100vh;   
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color: #FFFFFF;

`
const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 35%;
    background-color: #FFFFFF;
    input{
        height:5vh;
        background: ${props => props.disabled ? "grey" : "#fff5e0" };
        color: ${props => props.disabled ? "#9C9C9C" : "grey" };
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        margin-bottom:8px;
        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
        ::placeholder{
            font-size: 14px;
            color: #9C9C9C;}
        }
    div{
        display:flex;
        justify-content:center;
        margin-top:5vh;
    }
`
const Entrar = styled.button`
        width: 40%;
        height: 7vh;
        border:none;
        background-color: #5D9040;
        border-radius: 12px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;

        color: #FFFFFF;

        display: flex;        
        justify-content: center;
        align-items: center;
        opacity: ${props => props.disabled ? 0.4 : 1 };
        &:hover{
            cursor:pointer;
        }
`
