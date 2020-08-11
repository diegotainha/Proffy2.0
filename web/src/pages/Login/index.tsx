import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/images/logo.svg';
import logo2 from '../../assets/images/logo2.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import api from '../../services/api';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

function Login(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(reponse => {
            const { total } = reponse.data;
            setTotalConnections(total);
        });
    }, [])

    return (
        <div className="page-login">
            <div className="logo-content">
                <div className="sub-logo-content">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2> 
                </div>
            </div>
            <div className="login-content">
                <main className="sub-login-content">
                    <div >
                        <h1>Fazer Login</h1>
                        <Input
                            name="email"
                            label="E-mail"
                            type="email"
                            // value={time}
                            // onChange={ e => { 
                            //     setTime(e.target.value) 
                            // } }
                        />
                        <Input
                            name="password"
                            label="Senha"
                            type="password"
                            // value={time}
                            // onChange={ e => { 
                            //     setTime(e.target.value) 
                            // } }
                        />
                        <div className="links-content">
                            <div className="check-cotent">
                                <input 
                                    name='remember' 
                                    type="checkbox" 
                                />
                                <label>Lembrar-me</label>
                            </div>
                            <Link to="/give-classes" className="give-classes">
                                Esqueci minha senha
                            </Link>
                        </div>

                        <button type="submit" >Entrar</button>
                    </div>

                    <footer className="login-footer">
                        <div className="sub-footer">
                            <div>Não tem conta?</div>
                            <Link to="/give-classes" className="give-classes">
                                Cadastre-se
                            </Link>
                        </div>
                        <div>
                            <p>É de Graça <img src={purpleHeartIcon} alt="Coração roxo"></img></p>
                        </div>
                    </footer>
                </main>

                
            </div>
        </div>

    //    <div id="page-login">
    //        <div id="page-login-content" className="container">
    //            <div className="logo-container">
    //                 <img src={logoImg} alt="Proffy" />
    //                 <h2>Sua plataforma de estudos online.</h2>     
    //            </div>

    //            {/* <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/> */}
    //             <div className="input-container">
    //                 <Input
    //                     name="email"
    //                     label="E-mail"
    //                     type="email"
    //                     // value={time}
    //                     // onChange={ e => { 
    //                     //     setTime(e.target.value) 
    //                     // } }
    //                     />
    //                 <Input
    //                     name="password"
    //                     label="Senha"
    //                     type="password"
    //                     // value={time}
    //                     // onChange={ e => { 
    //                     //     setTime(e.target.value) 
    //                     // } }
    //                 />
    //                 <Link to="/give-classes" className="give-classes">
    //                     <img src="" alt="Esqueci a senha"></img>
    //                     Esqueci a senha
    //                 </Link>
                    
    //                 <button type="submit" >Entrar</button>
    //             </div>
    //             {/* <div className="buttons-container">
    //                 <Link to="/study" className="study">
    //                     <img src={studyIcon} alt="estudar"></img>
    //                     Estudar
    //                 </Link>

    //             </div> */}

    //             <span className="total-connections">
    //                 Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"></img>
    //             </span>
    //        </div>
    //    </div>
    )
}

export default Login;