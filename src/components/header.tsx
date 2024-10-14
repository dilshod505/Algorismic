import  {useState} from "react";
import {AiFillPhone} from "react-icons/ai";
import {FaBars} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import {observer} from "mobx-react-lite";

const MainHeader = observer(() => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header
            style={{background: "rgba(0,0,0,0.3)", backdropFilter: "blur(15px)"}}
            className={`w-[100%] text-white fixed top-0 z-50 transition-all duration-300`}
        >
            <div className={`px-5 md:px-10 lg:px-20 flex items-center justify-between py-7`}>
                <div className={"flex items-center gap-2"}>
                    <img src="/algorismic.png" alt="" width={180} height={100}/>
                </div>

                <div className={"flex items-center gap-4 sm:hidden"}>
                    {menuOpen ? (
                        <MdClose className="text-2xl cursor-pointer" onClick={toggleMenu}/>
                    ) : (
                        <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu}/>
                    )}
                    <AiFillPhone
                        onClick={() => (window.location.href = "tel:+998 97 888 10 27")}
                        className="text-2xl cursor-pointer"
                    />
                </div>


                <div className={"hidden sm:flex items-center gap-10"}>
                    <h3 className={"hover:text-blue-400 cursor-pointer transition-all duration-300"}>
                        <a href="/">Bosh sahifa</a>
                    </h3>
                    <a href="/">
                        <h3 className={"hover:text-blue-400 cursor-pointer transition-all duration-300"}>
                            Biz haqimizda
                        </h3>
                    </a>
                    <h3 className={"hover:text-blue-400 cursor-pointer transition-all duration-300"}>
                        <a href="/">Yangiliklar</a>
                    </h3>
                    <a href="/">
                        <h3 className={"hover:text-blue-400 cursor-pointer transition-all duration-300"}>
                            Xizmatlar
                        </h3>
                    </a>
                    <h3 className={"hover:text-blue-400 cursor-pointer transition-all duration-300"}>
                        <a href="/">Bog&apos;lanish</a>
                    </h3>
                    <h3 className={"hover:text-blue-400 cursor-pointer transition-all duration-300"}>
                        <a href="/">Buyurtma berish    </a>
                    </h3>
                    <div className={"bg-green-600 py-1 px-1 rounded-xl cursor-pointer"}>
                        <AiFillPhone
                            onClick={() => (window.location.href = "tel:+998 90 351 72 61")}
                        />
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div
                    className="sm:hidden bg-black text-white w-[100%] h-screen text-center px-4 py-4 space-y-6 flex flex-col items-center justify-center">
                    <div className="space-y-3">
                        <h3
                            className={
                                "hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <a href="/">
                                <span className="text-3xl relative hover:border-2-yellow-400 font-bold">
                                    Bosh sahifa
                                </span>
                            </a>
                        </h3>
                        <a href="/" onClick={closeMenu}>
                            <h3
                                className={
                                    "mt-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                                }
                            >
                                <span className="relative font-bold text-3xl">
                                    Biz haqimizda
                                </span>
                            </h3>
                        </a>
                        <h3
                            className={
                                " hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <a href="/">
                                <span className="relative text-3xl font-bold">
                                    Yangiliklar
                                </span>
                            </a>
                        </h3>
                        <h3
                            className={
                                " hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <a href="/">
                                <span className={'font-bold text-3xl'}>
                                    Bog&apos;lanish
                                </span>
                            </a>
                        </h3>
                        <h3
                            className={
                                " hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <a href="/">
                                <span className={'font-bold text-3xl'}>
                                    Buyurtma berish
                                </span>
                            </a>
                        </h3>
                        <h3
                            className={
                                "mt-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                        >
                            <a href="/" onClick={closeMenu}>
                                <span className="relative font-bold text-3xl">
                                    Xizmatlar
                                </span>
                            </a>
                        </h3>
                    </div>
                </div>
            )}
        </header>
    );
});

export default MainHeader;
