import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Index from './Index/index.jsx'

let pages = ["Index","Room","Links","Learn"];
function updatePage(new_page) {
    switch (new_page) {
        case 0: // index
            break;
        case 1: // room finder
            break;
        case 2: // quick links
            break;
        case 3: // learning assistance/tools
            break;
        default:
            // write code to yell a bunch
    }
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Index />
    </StrictMode>
)
