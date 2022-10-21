import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-[#406343] flex items-center justify-center gap-[450px] xl:pl-96 p-4 z-40">
      <form action="">
        <div className="relative">
          <RiSearch2Line className="absolute left-4 top-1/2 -translate-y-1/2"/>
          <input className="bg-white outline-none py-1 pl-10 pr-4 w-[300px] sm:w-[500px] rounded-full " type="text" placeholder="Buscar" />
        </div>
      </form>

    </header>
  )
}

export default Navbar