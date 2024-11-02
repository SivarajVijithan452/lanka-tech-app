import Link from "next/link";
import Container from "../Container";
import Image from "next/image"; 

const NavBar = () => {
    return (
        <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between relative">
                        <Link href="/" className="btn btn-ghost">
                            <Image
                                src="/logo_tech.png" 
                                alt="Lanka Tech Logo"
                                width={250} 
                                height={50} 
                            />
                        </Link>
                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                            search
                        </div>
                        <div className="flex items-center gap-2">
                            <div>Cart count</div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Avatar"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default NavBar;
