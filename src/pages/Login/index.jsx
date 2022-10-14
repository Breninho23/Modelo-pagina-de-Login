import { useState } from 'react';

import './styles.css';
import logoImg from './assets/logo.png';
import googleIconImg from './assets/google-icon.svg';
import loginImg from './assets/enter.png';
import '../../styles/auth.scss'

export function Login() {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? "dark" : ''}>
      <div id="page-auth">
        <div className="grid grid-cols-12 h-screen">
          <div className="col-span-3 h-screen">
            <div className="bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl h-screen">
              <div className="flex flex-col items-center">
                <img src={logoImg} width={300} />
                <div className="main-content">
                  <button className="google-login">
                    <img src={googleIconImg} alt="Logo do Google" />
                    Logar com a conta Google
                  </button>

                  <div className="separator">Logue com o seu RA</div>
                  
                  <input
                    type="text"
                    placeholder="Digite o seu RA"
                    onChange={e => setSutdentName(e.target.value)}/>  
                  <input
                    type="text"
                    placeholder="Digite a sua senha"
                  />
                  <div className="separator">Esqueceu sua senha?</div>

                  <button className="default-login">     
                  <img src={loginImg}  />             
                    Login
                  </button>

                  {/*<input
                        type="text"
                        placeholder="Digite o código da sala" 
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
                        />
                  <Button onClick={handleJoinRoom}>
                            Entrar na sala
                        </Button>*/}


                </div>
              </div>

            </div>
          </div>
          <div className="col-span-9 h-screen">
            <div className='container h-screen'>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

