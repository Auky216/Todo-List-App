import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

export default function Navbar(){
    return (
        <div className="w-full   h-full bg-primary">
            <h1 className="font-bold text-2xl p-4 ">Todo List</h1>
            
            <nav>
                <ul className="flex flex-col p-4 font-bold">
                    <li className="flex items-center gap-2 hover:bg-black hover:text-white p-2 rounded ">
                        <IoHome />
                        <a href="/">Inicio</a>
                    </li>

                    <li className="flex items-center gap-2 hover:bg-black hover:text-white p-2 rounded">
                        <FaCalendarAlt />
                        <a href="/calendar">Calendario</a>
                    </li>

                    <li className="flex items-center gap-2 hover:bg-black hover:text-white p-2 rounded">
                        <FaUser />
                        <a href="/user">Usuario</a>
                    </li>
                    
                    
                </ul>
            </nav>
            
        </div>
    );
}