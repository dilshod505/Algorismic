import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import TopButton from "./components/top-btn.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <TopButton/>
    </StrictMode>,
)
