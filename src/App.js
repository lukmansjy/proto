import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Home from './containers/pages/Home'

const App = ()=> {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App