import React, { useState, createContext } from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import About from './About';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import List from './List';
import Login from './Component/Login';
import Logout from './Component/Logout';
import PrivateRoute from './Component/PrivateRoute';


export const LoginContext = createContext();
const App = () => {
   const [list, setList] = useState([])
   const [isLogedIn, setIsLogedIn] = useState(!!localStorage.getItem("authtoken"))

   const addToList = (formData, id) => {
      if (id !== undefined) {
         let newList = [...list];
         newList[id] = { ...formData };
         setList(newList)
      } else {
         let newList = [...list];
         newList.push(formData);
         setList(newList)
      }
   }
   const remove = (index) => {
      let newList = [...list];
      newList.splice(index, 1);
      setList(newList);
   }
   return (
      <>
         <LoginContext.Provider value={{ isLogedIn, setIsLogedIn }}>
            <Navbar />
            <Routes>
               <Route exact path="/about" element={<About />} />
               <Route exact path="/" element={<PrivateRoute><Home addToList={addToList} list={list} /></PrivateRoute>} />
               <Route exact path="/:id" element={<PrivateRoute><Home addToList={addToList} list={list} /></PrivateRoute>} />
               <Route exact path='/List' element={<PrivateRoute><List list={list} remove={remove} /></PrivateRoute>} />
               <Route exact path='/login' element={<Login />} />
               <Route exact path='/logout' element={<Logout />} />
            </Routes>
         </LoginContext.Provider>
      </>
   )
}
export default App;