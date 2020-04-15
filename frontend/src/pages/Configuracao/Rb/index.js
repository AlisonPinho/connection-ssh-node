import React from 'react'
import Img from 'react-image'
import './styles.css'
import { useHistory, Link } from 'react-router-dom'
import image from '../../../assets/background.jpg'

export default function ConfigRb () {


    const history = useHistory()



    return(

        <div className="configRb-container">
            <div className="configRb-nav-bar">
                <Link onClick={()=>{history.push('/home')}}><h2>Home</h2></Link>
                <Link onClick={()=>{history.push('/monitor')}}><h2>Monitoramento</h2></Link>
                <Link onClick={()=>{history.push('/config')}}><h2>Configuração</h2></Link>
                <div className="div-sair" >
                    <h3>Alison</h3>
                    <Link onClick={()=>{history.push('/')}}><h2>Sair</h2></Link>
                </div>
            </div>
            <Img src={image}/>
            <div className="body">
                
            </div>
        </div>
    )
}