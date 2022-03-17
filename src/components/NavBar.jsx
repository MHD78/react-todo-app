import { BiMoon, BiSun } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const NavBar = (props) => {

    return (
        <nav className=" w-full z-10 bg-white/20 fixed top-0  backdrop-blur-sm dark:bg-black/30 " >
            <ul className="max-w-6xl m-auto text-center flex justify-between items-center p-2 font-mono text-lg sm:text-xl text-gray-700 dark:text-white font-bold" >
                <li className="flex items-center gap-x-1" >
                    <FaGithub className="animate-bounce" />
                    <a href="https://github.com/MHD78/React-Todo-App" target={"blank"} className="hover:text-gray-900 dark:hover:text-slate-300" >MHD78</a>
                </li>
                <li>ToDo App</li>
                <li onClick={() => props.Theme.userTheme(props.Theme.currentTheme === "bright" ? "dark" : "bright")} className={"cursor-pointer"} >
                    {props.Theme.currentTheme === "bright" ? <BiSun /> : <BiMoon />}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;