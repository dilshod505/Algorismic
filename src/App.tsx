import './App.css'
import MainHeader from "./components/header.tsx";

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
                    <source src="/48420-453832153.mp4" type="video/mp4"/>
                </video>
                <MainHeader/>
            </div>
        </>
    )
}

export default App
