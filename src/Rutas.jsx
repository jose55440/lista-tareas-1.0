import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {View} from './components/View';
import {Create} from './components/Create';
import {EditTask} from './components/EditTask';
import { useTaskList } from './hooks/useTaskList';
import { NavBar } from './helper/NavBar';
 // Esto asegura que el efecto se ejecute cada vez que la lista de tareas cambie
export const Rutas = () => {
  const { tasks } = useTaskList();
  useEffect(() => {
    console.log(tasks); // Aquí puedes realizar cualquier acción que necesites con la lista de tareas
  }, [tasks]);
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<View/>} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

