import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
// import EmployService from "../services/employService";
import EmployService from "../services/employSevice";

const useFetchAllEmploy = (props) => {
  const [employee, setEmployee] = useState([]);
  
  useEffect(() => {
    fetchEmploy();
  }, []);

  const setEmploysData = (newContacts) => setEmployee(newContacts);

  const fetchEmploy = async () => {

    try {
      const employResponse = await EmployService.getAll();
      const employData = employResponse.data.data;
      setEmployee(employData);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return { employee , setEmploysData};
};

export default useFetchAllEmploy;
