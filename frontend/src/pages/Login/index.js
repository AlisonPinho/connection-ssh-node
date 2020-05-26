import React, { useState } from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Login() {
    
    const history = useHistory()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin (e) {
        e.preventDefault()

        

        try {
            const res = await api.post('sessions',{ user, password })
            
            localStorage.setItem('name', res.data.name)
            
            history.push('/home')
        } catch (error) {
            alert('Falha no login.')
            console.log(error)
        }
    }


    
    return( 
        <div className="login-container">
            <form onSubmit={handleLogin} className="form">
                <h1>Faça seu login</h1>
                <input placeholder="Usuário" value={user} onChange={e=>setUser(e.target.value)}></input>
                <input placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)}></input>
                <button className="button" type="submit">Entrar</button>
            </form>
        </div>
        
    )
}