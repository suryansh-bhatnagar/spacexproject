import React from 'react';
import LaunchIdSec from './LaunchIdSec';
// import { Link } from "react-router-dom";

const  LaunchpadTable = (props) =>{
    return(
        <>
        <div className="container-fluid text-white">
          <div className="main-Heading">
            <h1 className="mb-5">
              {" "}
              <span className="font-weight-bold">SpaceX Launchpads</span>
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
                      <td>{ curElem.launches && curElem.launches.splice(0,3).map((elem,index)=>{
                        return <LaunchIdSec elem = {elem} index = {index} setlaunchId={props.setlaunchId}/>
                      })}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p id="notFound" style={{'fontWeight':'bold'}}></p>
          </div>
        </div>
      </>

    )
}

export default LaunchpadTable;
