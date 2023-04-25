import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/CareersContext";
import CareerHeader from "./components/CareerHeader";
import CareerFooter from "./components/CareerFooter";
import ApplyPage from "./pages/ApplyPage/ApplyPage";
import JobDetail from "./components/JobDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import CareerPage from "./components/CareerPage/CareerPage";
import AdminPage from "./pages/AdminPage";

//admin
import AuthState from "./Context/AuthContext";
import SearchAndInforAdmin from "./pages/AdminPage/SearchAndInforAdmin";
import Sidebar from "./pages/AdminPage/Sidebar";
import Overview from "./pages/AdminPage/Overview/Overview";
import CandidatesPage from "./pages/AdminPage/CandidatesPage";
import CandidatesDetail from "./pages/AdminPage/CandidatesPage/CandidatesDetail/CandidatesDetail";
import Jobs from "./pages/AdminPage/Jobs/Jobs";
import JobCreatorPage from "./pages/AdminPage/JobCreatorPage/JobCreatorPage";
import UpdateJobPage from "./pages/AdminPage/UpdateJobPage/UpdateJobPage";
import LoginRegisterPage from "./pages/AdminPage/AdminLoginPage/LoginRegisterPage";

function App() {
  return (
    <>
      {/* <AdminPage /> */}
      {/* <Router>
        <CareerHeader />
        <Routes>
          <Route exact path="/" element={<CareerPage />} />
          <Route exact path="/careers" element={<CareerPage />} />
          <Route exact path="/careers/:id" element={<JobDetail />} />
          <Route exact path="/careers/:id/apply" element={<ApplyPage />} />
          <Route exact path="/jobs/create" element={<JobCreatorPage />} />
          <Route exact path="/jobs/update/:id" element={<UpdateJobPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <CareerFooter />
      </Router> */}

      <AuthState>
        <AppProvider>
          
          <Router>
            <Routes>

              <Route exact path="/" element={<Overview />} />
              <Route exact path="/candidates" element={<CandidatesPage />} />
              <Route exact path="/candidates/:id/edit" element={<CandidatesDetail />} />
              <Route exact path="/login" element={<LoginRegisterPage />} />

            </Routes>
          </Router>

        </AppProvider>

      </AuthState>

    </>
  );
}

export default App;
