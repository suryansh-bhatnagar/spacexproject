import { useState, useEffect } from "react";
import './LaunchSection.css'
import axiosInstance from "../Axios";



const LaunchSection = ({ launchId , setLoading , setlaunchId

 }) => {
  const [launchData, setlaunchData] = useState([]);

  useEffect(() => {
    // if launchId is empty then assigning value to it
    if(launchId==="" && localStorage.getItem('myKey')){
      let temp  = localStorage.getItem('myKey');
      setlaunchId(temp);
    }
    fetchlaunch(launchId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launchId]);


  useEffect(() => {
// Storing the launch id in local storage so that if we refresh the page we will not lose the data
    if(launchId !== ""){
      localStorage.setItem('myKey', launchId);
 }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  


  async function fetchlaunch(id) {
          // Fetching the data of particular launch using its id
  await  axiosInstance
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        return res;
      })
      .then((data) => {
        setlaunchData(data.data);
       setLoading(false)
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
   
      <div className="main">
      <div className="card text-white  text-center w-50">
  <div className="card-header">
    ABOUT LAUNCH 
  </div>
  <div className="card-body">
    <h5 className="card-title">{launchData.name}</h5>
    <p className="card-text">{launchData.details===null? "No details" : launchData.details}</p>
    <p className="card-text"> <span>Reused : </span> {launchData.reused === true ? "True" : "False"}</p>
    <a className="webcastBtn" href={launchData.links && launchData.links.webcast} target='_blank' rel="noreferrer">Webcast</a>
  </div>
  <div className="card-footer text-muted ">
   {launchData.date_local}
  </div>
</div>
</div>
    </>
  );
};

export default LaunchSection;
