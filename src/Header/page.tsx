
function Header() {
    return (
        <div className={'py-12 px-44 flex justify-between items-center'}>
            <div>
                <img src="/algorismic.png" alt="" width={180} height={180}/>
            </div>
            {/*<div>*/}
            {/*    <button className={'border-2 border-white text-white font-bold px-5 py-2 rounded-full'}>*/}
            {/*        <a href="#">+99897 8881027</a>*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div>
                <ul className={'flex gap-5'}>
                    <li className={'font-bold relative hover:text-white'}>
                        <a href="#">Bosh sahifa</a>
                        <span
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent transition-all duration-300 hover:bg-white hover:h-[2px]"></span>
                    </li>
                    <li className={'font-bold relative'}>
                        <a href="#">Biz haqimizda</a>
                        <span
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent transition-all duration-300 hover:bg-white hover:h-[2px]"></span>
                    </li>
                    <li className={'font-bold relative'}>
                        <a href="#">Xizmatlar</a>
                        <span
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent transition-all duration-300 hover:bg-white hover:h-[2px]"></span>
                    </li>
                    <li className={'font-bold relative'}>
                        <a href="#">Yangiliklar</a>
                        <span
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent transition-all duration-300 hover:bg-white hover:h-[2px]"></span>
                    </li>
                    <li className={'font-bold relative'}>
                        <a href="#">Bog&apos;lanish</a>
                        <span
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent transition-all duration-300 hover:bg-white hover:h-[2px]"></span>
                    </li>
                    <li className={'font-bold relative'}>
                        <a href="#">Buyurtma berish</a>
                        <span
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent transition-all duration-300 hover:bg-white hover:h-[2px]"></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;