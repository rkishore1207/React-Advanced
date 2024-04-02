/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAuth } from "../../Contexts/FakeAuthContext";
import Button from "../Button/Button";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";

function User() {
  const {user,handleLogout,isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!isAuthenticated)
        navigate('/');
  },[isAuthenticated,navigate]);

  if(!isAuthenticated)
    return;

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button type='primary' onClick={()=>handleLogout()}>Logout</Button>
    </div>
  );
}

export default User;

