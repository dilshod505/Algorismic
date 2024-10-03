import './App.css'
import Header from "./Header/page.tsx";

function App() {

  return (
    <>
        <div className={'bg-black text-white h-screen'}>
            {/*<video autoPlay muted loop className={'w-full h-full object-cover'}>*/}
            {/*    <source src="/48420-453832153.mp4" type="video/mp4"/>*/}
            {/*</video>*/}
            <Header/>
        </div>
    </>
  )
}

export default App
