import CareerHeader from "./components/CareerHeader";
// import ApplyPage from "./pages/ApplyPage/ApplyPage";
import CareerFooter from "./components/CareerFooter";
import JobDetail from "./components/JobDetail";

import Header from "./components/CareerBody/Header/Header";
import Content from "./components/CareerBody/Content/Content";
function App() {
  return (
    <div className="min-h-screen flex flex-col ml-0">
      <CareerHeader />
      <main className="flex-1 w-full">
        <Header/>
        <Content/>
      </main>
      <CareerFooter />
    </div>
  );
}

export default App;
