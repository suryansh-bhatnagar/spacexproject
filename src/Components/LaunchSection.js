import { useState, useEffect } from "react";
import './LaunchSection.css'
import axiosInstance from "../Axios";

// import Spinner from "./Spinner";

const LaunchSection = ({ launchId }) => {
  const [launchData, setlaunchData] = useState([]);

  useEffect(() => {
    fetchlaunch(launchId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [launchId]);


  async function fetchlaunch(id) {
  await  axiosInstance
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        return res;
      })
      .then((data) => {
        //   setlaunchData(data.data);
        setlaunchData(data.data);
        console.log(data.data);
        console.log(launchData);
        console.log( launchData.cores[0].reused);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
   
      <div className="main">
      
      <div class="card text-white  text-center w-50">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">{launchData.name}</h5>
    <p class="card-text">{launchData.details}</p>
    <a href={launchData.links && launchData.links.webcast} target='_blank' rel="noreferrer" class="btn btn-primary">See Webcast</a>
  </div>
  <div class="card-footer ">
   {launchData.date_local}
  </div>
</div>
</div>
    </>
  );
};

export default LaunchSection;
