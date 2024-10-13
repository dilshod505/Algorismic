import './App.css'
import MainHeader from "./components/header.tsx";
import {AiFillPhone} from "react-icons/ai";
import {defaultPadding} from "../variables.ts";

function App() {

    return (
        <>
            <div className={'text-white h-screen'}>
                <video
                    autoPlay
                    muted
                    loop
                    id="myVideo"
                    className="absolute w-[100%]  bg-cover bg-center object-cover min-h-[100vh] -z-10"
                >
                    <source src="/bg-video.mp4" type="video/mp4"/>
                </video>
                <div
                    onClick={() =>
                        window.open(
                            "https://www.google.com/maps/place/41%C2%B020'55.5%22N+69%C2%B020'14.4%22E/@41.348747,69.337344,16z/data=!4m4!3m3!8m2!3d41.348747!4d69.337344?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
                            "_blank",
                        )
                    }
                    data-aos="fade-right"
                    className={`${defaultPadding} pt-32 text-white w-[100%] min-h-[100vh] flex flex-col justify-center gap-3`}
                >
                    <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-bold">
                        Cloud <br/> Solutions <br/> IT Company <br/>
                    </h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]">
                        КОМПАНИЯ СЕГОДНЯШНЕГО И БУДУЩЕГО!
                    </p>
                    <button
                        className={
                            "bg-green-600 flex items-center justify-center gap-3 w-[330px] text-white px-5 py-3 rounded-md"
                        }
                        onClick={() => (window.location.href = "tel:+998889006003")}
                    >
                        <AiFillPhone/>
                        позвонить
                    </button>
                </div>
                <MainHeader/>
            </div>
        </>
    )
}

export default App
