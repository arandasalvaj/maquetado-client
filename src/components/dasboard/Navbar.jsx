import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdRemoveCircle } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Navbar = () => {
  const {setAuth,setCounter} =useContext(UserContext)

  const handleLogout = () =>{
    setAuth(false)
    window.localStorage.removeItem('loggedUser')
    document.cookie.split(";").forEach((c) => { 
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setCounter(0) 
  }
  return (
    <header className="fixed w-full bg-[#406343]  gap-[450px] xl:pl-96 p-4 z-40">
      <div className="flex justify-between">

      </div>
    </header>
  )
}

export default Navbar