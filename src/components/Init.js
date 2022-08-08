import styled from "styled-components"
import axios from "axios";
import { useEffect } from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import  { useState } from  "react"


export default function Init(){

    const[ranking, setRanking] = useState([]);

    function AssembleRanking({name, linkCount, views}){
        return(
            <span>{name} - {linkCount} links - {views} visualizações</span>

        )
    }

    useEffect(()=>{
        const promise = axios.get("https://shortly-project-api.herokuapp.com/ranking")
        
        promise.then(res => {
            setRanking(res.data);
            console.log(res.data)
        })
       
        promise.catch(err => {
            console.log(err)
        })
    }, [])  

    return (
        <ContainerInit>
            <Header></Header>
            <Title>
                <p><ion-icon name="trophy"></ion-icon></p>
                <p>Ranking</p>
            </Title>
            <Container>
                {(!ranking)?<p>Carregando ranking...</p> :
                ranking.map(user => <AssembleRanking name={user.name} linkCount={user.linksCount} views={user.visitCount}></AssembleRanking>)}
            </Container>
            <Link to='/signup' style={{textDecoration: 'none'}}>
                <p>Crie sua conta para usar nosso serviço!</p>
            </Link>
        </ContainerInit>
    )
}

const ContainerInit = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:85%;
    
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 85%;
    height: 35vh;
    left: 212px;
    top: 375px;
    margin-bottom: 3vh;
    padding-top:19px;
    padding-bottom:30px;
    padding-left:40px;
    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    overflow: hidden;
    p,span{
        margin-bottom:13px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: #000000;
    }
`

const Title = styled.div`
    margin-top:10vh;
    margin-bottom:5vh;
    display:flex;
    justify-content:space-around;
    width:20%;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #000000;
    }
    ion-icon{
        color: #FFD233;
    }
`