import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
// import EmployService from "../services/employService";
import EmployService from "../services/employSevice";

const useFetchAllEmploy = (props) => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorCandidate, setErrorCandidate] = useState(null);
  
  useEffect(() => {
    fetchEmploy();
  }, []);

  const setEmploysData = (newContacts) => setEmployee(newContacts);

  const fetchEmploy = async () => {
    setLoading(true);

    try {
      const employResponse = await EmployService.getAll();
      const employData = employResponse.data.data;
      setEmployee(employData);
      setLoading(false);
    } catch (error) {
      // console.error(error?.response.data);
      // setErrorCandidate(error?.response.data);
      setLoading(false);
    }
  };

  return { employee, errorCandidate , setEmploysData};
};

export default useFetchAllEmploy;
