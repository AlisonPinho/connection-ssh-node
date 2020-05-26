import React, { useState } from 'react'
import './styles.css'
import { useHistory, Link } from 'react-router-dom'
import image from '../../../assets/background.jpg'
import api from '../../../services/api'

export default function ConfigOnu () {


    const history = useHistory()
    const name = "olt01cacm"
    const [interFace, setInterFace] = useState("")
    const [sn, setSn] = useState("")
    //const scriptt = localStorage.getItem('script')
    const [script, setScript] = useState('')


    

    async function handleScript(e) {
        e.preventDefault()

        
        try {   
            const res = await api.post('config/onu',{ name, interFace, sn })
            //localStorage.setItem('script',res.data.script)
            
            setScript(res.data.script)
            console.log(script)
        } catch (error) {
            
        }
        
    }

    

    return(

        <div className="configOnu-container">
            <div className="configOnu-nav-bar">
                <Link onClick={()=>{history.push('/home')}}><h2>Home</h2></Link>
                <Link onClick={()=>{history.push('/monitor')}}><h2>Monitoramento</h2></Link>
                <Link onClick={()=>{history.push('/config')}}><h2>Configuração</h2></Link>
                <div className="div-sair" >
                    <h3>Alison</h3>
                    <Link onClick={()=>{history.push('/')}}><h2>Sair</h2></Link>
                </div>
            </div>
            <img src={image} alt="Fundo"/>
            <div className="body-onu">
                <div className="form-script-onu">
                    <form>
                        <div>
                            <h2>Cidade:</h2>  
                            <select>
                                <option value="itabira1">Cachoeira do Campo</option>
                                <option value="novaEra1">Nova Era</option>
                            </select>
                        </div>
                        <div>
                            <h2>Serial:</h2>
                            <input placeholder="CMSZ00000000"
                            value={sn} onChange={e=>setSn(e.target.value)}
                            />
                        </div>
                        <div>
                            <h2>Interface:</h2>
                            <input placeholder="1/1/1:1"
                            value={interFace} onChange={e=>setInterFace(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={handleScript} type="submit">Gerar</button>
                        </div>
                        
                    </form>
                </div>
                <div className="result-script">
                    <h1>Script gerado:</h1>
                    <textarea>
                        {script}
                    </textarea>
                </div>
            </div>
        </div>
    )
}