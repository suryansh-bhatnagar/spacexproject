import React from 'react';
import LaunchIdSec from './LaunchIdSec';
import './LaunchpadTable.css';

const  LaunchpadTable = (props) =>{
  
  // Filtering out top 3 launches from  all the available launches in the launchpad
  const generateArray = (curElem)=>{
   let  array = curElem.launches.filter((item, index)=>{ return index >= 0 
    && index < 3 });
   return array;
   

  }
    return(
        <>
        <div className="container-fluid text-white">
          <div className="main-Heading">
            <h1 className="mb-5">
              {" "}
              <p className="mt-4 font-weight-bold text-center spaceXHead">SpaceX Launchpads</p>
            </h1>
          </div>
         
          <div className="table-responsive text-white">
            <table className="table  text-white" id="myTable">
              <thead className="thead-dark">
                <tr >
                  <th>Name</th>
                  <th>Status</th>
                  <th>Detail</th>
                  <th>Top 3 launches</th>
                </tr>
              </thead>
              <tbody>
                {props.launchpadData && props.launchpadData.map((curElem, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{curElem.name}</td>
                      <td>{curElem.status}</td>
                      <td>{curElem.details}</td>
                      <td>{ curElem.launches.length ===0 ? "No Launch Available" : generateArray(curElem).map((elem,index)=>{
                        return <LaunchIdSec launchData = {props.launchData} elem = {elem} index = {index} setlaunchId={props.setlaunchId}/>
                      })}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>

    )
}

export default LaunchpadTable;
