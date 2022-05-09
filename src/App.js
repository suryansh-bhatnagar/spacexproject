import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaunchpadTable from "./Components/LaunchpadTable";
import axiosInstance from "./Axios";
import Spinner from "./Components/Spinner";
import LaunchSection from "./Components/LaunchSection";

function App() {
  const [loading, setLoading] = useState(false);
  const [launchpadData, setlaunchpadData] = useState([]);
  const [launchId, setlaunchId] = useState("");
  const [launchData, setlaunchData] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    //  Requesting data for launchpads
    axiosInstance
      .get(`https://api.spacexdata.com/v4/launchpads`)
      .then((res) => {
        return res;
      })
      .then((data) => {
        if (data.status === 200) {
          setlaunchpadData(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    //  Requesting data for launches
    axiosInstance
      .get(`https://api.spacexdata.com/v4/launches`)
      .then((res) => {
        return res;
      })
      .then((data) => {
        if (data.status === 200) {
          setlaunchData(data.data);
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

  // Displaying spinner until data is received
  if (loading) {
    return (
      <div>
        {" "}
        <Spinner />{" "}
      </div>
    );
  }
  return (
    <Router>
      <header className="App-header ">
        <Routes>
        {/* Route For displaying launchpads */}
          <Route
            exact
            path="/"
            element={
              <LaunchpadTable
                launchpadData={launchpadData}
                launchId={launchId}
                setlaunchId={setlaunchId}
                onchange={handleChange}
                launchData={launchData}
              />
            }
          ></Route>
          {/* Route for displaying Details of launch */}
          <Route
            exact
            path="/launchitem"
            element={
              <LaunchSection
                setLoading={setLoading}
                launchId={launchId}
                setlaunchId={setlaunchId}
              />
            }
          ></Route>
        </Routes>
      </header>
    </Router>
  );
}

export default App;
