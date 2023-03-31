import EmployeesStatus from "./Overview/EmployeesStatus"
import JobStatistics from "./Overview/JobStatistics"
import SearchAndInforAdmin from "./SearchAndInforAdmin"
import Sidebar from "./Sidebar"

const AdminPage =()=>{
    return(
        <main class="flex justify-center ">
        <div class=" flex justify-start border-[1.5px] border-slate-300 ">
<Sidebar/>
<div class="flex flex-col">
<SearchAndInforAdmin/>
<JobStatistics/>
<EmployeesStatus/>
</div>
        </div></main>
    )
    
}
export default AdminPage