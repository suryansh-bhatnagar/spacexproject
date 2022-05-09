import React ,{useState} from 'react';
import {useNavigate } from 'react-router-dom';

const LaunchIdSec = ({index , elem , setlaunchId}) => {
    let navigate = useNavigate();
    const [auth, setAuth] = useState(true)
    if(!auth){
        return navigate("/launchitem", {replace: true})
    }

  return (
    <p className="nav-link" key={index} onClick={()=>{setlaunchId(elem)
    setAuth(false)}}
    >{elem}</p>
  )
}

export default LaunchIdSec