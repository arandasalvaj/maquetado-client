import { Outlet } from 'react-router-dom'
import Navbar from '../components/dasboard/Navbar'
import Sidebar from '../components/dasboard/Sidebar'

const Dashboard = () => {
  return (
    <div className="min-h-screen">
        <Sidebar/>
        <Navbar/>
        <main className="lg:pl-[390px] pt-[89px] bg-gray-200 z-30">
          <Outlet/>
        </main>

    </div>
  )
}

export default Dashboard