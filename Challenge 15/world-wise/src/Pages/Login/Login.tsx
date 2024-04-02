/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../../Components/PageNav/PageNav";
import Button from "../../Components/Button/Button";
import { useAuth } from "../../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin,isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isAuthenticated)
      navigate('/app',{replace:true});
  },[isAuthenticated,navigate]);

  const login = (event:any) => {
    event.preventDefault();
    handleLogin(email,password);
  }

  return (
    <main className={styles.login}>
      <PageNav/>
      <form className={styles.form} onSubmit={login}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type='primary' onClick={(event:any)=>{
              event.preventDefault();
              handleLogin(email,password);
            }}>Login</Button>
        </div>
      </form>
    </main>
  );
}
