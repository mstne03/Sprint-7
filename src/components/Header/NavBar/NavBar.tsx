import { Link } from 'react-router-dom'
import { useAuthUserQuery, useLogoutMutation } from "@/query/authQueries"
import  { useState } from 'react'

const NavBar = () => {
    const { data: user } = useAuthUserQuery();
    const isLogged = !!user;

    const { mutate: logout, isPending } = useLogoutMutation()
    const [openProfileMenu, setOpenProfileMenu] = useState(false);

    return (
        <nav className="flex justify-between my-5">
            <div className="flex">
                <span className="">
                    <Link to="/">
                        <img src="" alt="" />
                        <p className="hidden sm:block font-bold text-inherit">LOGO</p>
                    </Link>
                </span>
                <nav className="hidden mx-10 sm:flex gap-5">
                    <p>
                        <Link to="/movies/page/1">
                            Movies
                        </Link>
                    </p>
                    <p>
                        <Link to="/">
                            Series
                        </Link>
                    </p>
                    <p>
                        <Link to="/">
                            Other
                        </Link>
                    </p>
                </nav>
            </div>

            <nav className="flex justify-center items-center gap-5">
                <input
                    className=""
                    placeholder="Buscar"
                    type="search"
                />
                {!isLogged && (
                    <Link
                        to="/login"
                        className="hover:text-blue-600"
                    >
                        Login
                    </Link>
                )}

                {isLogged && (
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            className="transition-transform border-2 border-blue-400 rounded-full w-8 h-8 flex items-center justify-center bg-gray-100"
                            aria-haspopup="true"
                            aria-expanded={openProfileMenu}
                            onClick={() => setOpenProfileMenu((open) => !open)}
                        >
                            <span className="font-bold text-blue-900">M</span>
                        </button>
                        {openProfileMenu && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                <div className="flex flex-col gap-2 p-3">
                                    <Link
                                        className="hover:text-blue-600"
                                        to="/"
                                    >
                                        MyLists
                                    </Link>
                                    <button
                                        className="hover:text-red-600 text-left"
                                        onClick={() => logout()}
                                        disabled={isPending}
                                    >
                                        {isPending ? "Logging out..." : "Logout"}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </nav>
    )
}

export default NavBar
