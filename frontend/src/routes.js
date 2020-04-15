import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Configuracao from './pages/Configuracao'
import ConfigOnu from './pages/Configuracao/Onu'
import ConfigRb from './pages/Configuracao/Rb'
import Monitoramento from './pages/Monitoramento'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" exact component={Home}/>  
                <Route path="/config" exact component={Configuracao}/>  
                <Route path="/config/onu" exact component={ConfigOnu}/>
                <Route path="/config/rb" exact component={ConfigRb}/>
                <Route path="/monitor" exact component={Monitoramento}/>
            </Switch>
        </BrowserRouter>
    )
} 