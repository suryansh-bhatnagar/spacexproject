import "./App.css";
import { useEffect , useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./Components/Navbar";
import  LaunchpadTable  from "./Components/LaunchpadTable";
import axiosInstance from "./Axios";
import Spinner from "./Components/Spinner";
import LaunchSection from "./Components/LaunchSection";
// import axios from "axios";
// import axios from "axios";


function App() {
  const [loading, setLoading] = useState(false);
  const [launchpadData, setlaunchpadData] = useState([]);
  // const [launchesData, setlaunchesData] = useState([]);
  const [launchId, setlaunchId] = useState('');
  // const [launchData, setlaunchData] = useState([]);

  useEffect(() => {
     fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   fetchlaunch();
  // }, [ launchId , launchData]);

   const fetchData = async() => {
    setLoading(true);
     axiosInstance.get(`https://api.spacexdata.com/v4/launchpads`)
     .then((res) => {
    return  res;
        })
        .then((data)=>{
          setLoading(false);
          if(data.status === 200){
            setlaunchpadData(data.data);
            console.log(data.data );
            
          }

          
          
        })
        .catch((error) => {
          console.log(error);
        });
   
  };


  // eslint-disable-next-line react-hooks/exhaustive-deps
 
  function handleChange(newValue) {
    setlaunchId(newValue);
  }

  if (loading) {
    return <div> <Spinner/> </div>;
  }
  return (
    
    <Router>
    <header className="App-header ">
     
       <Routes>
         <Route 
         exact 
         path="/"
         element = {
          <LaunchpadTable launchpadData = {launchpadData} launchId = {launchId} setlaunchId ={setlaunchId} onchange={handleChange} />
         }
         >

         </Route>
         <Route 
         exact 
         path="/launchitem"
         element = {
          <LaunchSection  launchId = {launchId}/>
         }
         >

         </Route>

         
       </Routes>
      
     
    </header>
    </Router>
  );
}

export default App;
