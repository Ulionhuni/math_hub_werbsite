import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import backgroundImage from './assets/math.jpg';
import {check} from "./http/userAPI";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

  return (
    <BrowserRouter>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        paddingTop: '0px'
      }}>
        <header style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)', // Semi-transparent black
          color: 'white',
          padding: '0',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // Optional: adds subtle shadow
        }}>
          <NavBar style={{ backgroundColor: 'transparent' }} /> {/* Make NavBar transparent */}
        </header>

        <AppRouter />
      </div>
    </BrowserRouter>
  );
});

export default App;