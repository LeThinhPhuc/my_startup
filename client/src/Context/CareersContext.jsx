import { useState, useEffect, createContext , useContext } from "react";
import axios from "axios";
import useFetchAllEmploy from "../hooks/useFetchAllEmploy";
import { dataServices } from "../services/dataService";
import { BASE_URL, JOBS_ENDPOINT } from "../constants";
export const CareersContext = createContext({});
import { AuthContext } from "./AuthContext";

export const AppProvider = ({ children }) => {
  const [jobsData, setJobsData] = useState([]);

  const { employee , setEmploysData } = useFetchAllEmploy();

  // const { state: { accessToken } } = useContext(AuthContext)

  useEffect(() => {
    
    console.log("LOGGER");
    const handleFetchJobs = async () => {
      const response = await dataServices.getData(`${BASE_URL}${JOBS_ENDPOINT}`);
      setJobsData(response.data);
    };
      handleFetchJobs();
  }, []);
  
  return (
    <CareersContext.Provider value={{ jobsData, employee, setEmploysData }}>
      {children}
    </CareersContext.Provider>
  );
};
