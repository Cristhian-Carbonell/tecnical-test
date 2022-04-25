import React from 'react';
import './Login.css';
import axios from 'axios';

const urlsingup = "http://localhost:3001/api/singup"
const urlsingin = "http://localhost:3001/api/singin"

const Login = (props) => {
    const [containerActive, setContainerActive] = React.useState(false);
    const [form, setForm] = React.useState({
      displayName: "",
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const newData = {...form};
      newData[e.target.name] = e.target.value;
      setForm(newData)
    }

    const singup = (e) => {
      e.preventDefault();
      axios.post(urlsingup, {
        displayName: form.displayName,
        email: form.email,
        password: form.password,
        mode: 'no-cors',
      })
      .then(res => {
        console.log(res.data);
      })
    }

    const singin = (e) => {
      e.preventDefault();
      axios.post(urlsingin, {
        email: form.email,
        password: form.password,
        mode: 'no-cors'
      })
      .then(res => {
        console.log(res.data);
      });
    }

    const signInButton = () => {
        setContainerActive(false);
    }

    const signUpButton = () => {
        setContainerActive(true);
    }


        return (
            <div className={`container1 ${containerActive ? "right-panel-active" : ""}`} id="container">
                <div className="form-container sign-up-container">
                    <form onSubmit={(e) => singup(e)}>
                        <h1>Crea tu Cuenta</h1>
                        <div className="social-container">
                            <a href="#" className="social>">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social>">
                                <i class="fab fa-google" id="red"></i>
                            </a>
                            <a href="#" className="social>">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span>o usa tu email como registro</span>
                        <input type="text" placeholder="Name" name="displayName" onChange={handleChange}/>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        <button id="lila" onClick={signInButton}>Registrar</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={(e) => singin(e)}>
                      <h1>Iniciar Sesión</h1>
                      <div className="social-container">
                        <a href="#" className="social">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social>">
                          <i className="fab fa-google" id="red"></i>
                        </a>
                        <a href="#" className="social">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                      <span>o usa tu email</span>
                      <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                      <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                      <a href="#">Olvidaste tu contraseña?</a>
                      <button>Iniciar sesión</button>
                    </form>
                </div>
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="overlay-panel overlay-left">
                      <h1>¡Bienvenido!</h1>
                      <p>
                        Inicia sesión con tu cuenta
                      </p>
                      <button className="ghost" id="signIn" onClick={signInButton} >Inicia sesión</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                      <h1>Hola!!!</h1>
                      <p>Crear tu cuenta</p>
                      <button className="ghost" id="signUp" onClick={signUpButton}>Registrar</button>
                    </div>
                  </div>
                </div>
            </div>
        );
}

export default Login;
