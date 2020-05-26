import React from 'react'
import './styles.css'
import { useHistory, Link } from 'react-router-dom'
import image from '../../assets/background.jpg'

export default function Configuracao () {


    const history = useHistory()


    function pageScriptRb() {
        history.push('/config/rb')
    }
    function pageScriptOnu() {
        history.push('/config/onu')
    }

    return(

        <div className="configuracao-container">
            <div className="configuracao-nav-bar">
                <Link onClick={()=>{history.push('/home')}}><h2>Home</h2></Link>
                <Link onClick={()=>{history.push('/monitor')}}><h2>Monitoramento</h2></Link>
                <Link onClick={()=>{history.push('/config')}}><h2>Configuração</h2></Link>
                <div className="div-sair" >
                    <h3>Alison</h3>
                    <Link onClick={()=>{history.push('/')}}><h2>Sair</h2></Link>
                </div>
            </div>
            <img src={image} alt="Fundo"/>
            <div className="body">
                <button onClick={pageScriptOnu}><h3>ONU</h3></button>
                <button onClick={pageScriptRb}><h3>Mikrotik</h3></button>
            </div>
        </div>
    )
}