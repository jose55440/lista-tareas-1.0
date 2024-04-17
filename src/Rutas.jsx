import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Vista } from './components/Vista';
import { Crear } from './components/Crear';
import { Editar } from './components/Editar';
export const Rutas = () => {
  return (
    <Routes>
      <Route path='/:tasks'>
        <Vista/>
      </Route>
      
      <Route path='/crear/:tasks'>
        <Crear/>
      </Route>

      <Route path='/editar/:id/:task'>
        <Editar/>
      </Route>

    </Routes>

  )
}
