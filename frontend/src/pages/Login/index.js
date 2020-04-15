import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'
//import api from '../../services/api'

export default function Login() {
    
    const history = useHistory()

    async function handleLogin (e) {
        e.preventDefault()

        

        try {
            history.push('/home')
        } catch (error) {
            
        }
    }


    
    return( 
        <div className="login-container">
            <section className="form">
                <h1>Faça seu login</h1>
                <input placeholder="Usuário"></input>
                <input placeholder="Senha"></input>
                <button onClick={handleLogin}className="button" type="submit">Entrar</button>
            </section>
        </div>
        
    )
}