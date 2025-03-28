import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Index from './Index/index.jsx'
import Rooms from './Rooms/index.jsx'
import Links from './Links/index.jsx'
import Learn from './Learn/index.jsx'

const DOM_ROOT = createRoot(document.getElementById('root'));

let current_page = 0;
DOM_ROOT.render(
    <StrictMode>
        <Index />
    </StrictMode>
)

function updatePage(page) {
    switch (page) {
        case 0:                 // index
            DOM_ROOT.render(
                <StrictMode>
                    <Index />
                </StrictMode>
            )
            current_page = 0;
            break;
        case 1:                 // room finder
            DOM_ROOT.render(
                <StrictMode>
                    <Rooms />
                </StrictMode>
            )
            current_page = 1;
            break;
        case 2:                 // quick links
            DOM_ROOT.render(
                <StrictMode>
                    <Links />
                </StrictMode>
            )
            current_page = 2;
            break;
        case 3:                 // learning assistance/tools
            DOM_ROOT.render(
                <StrictMode>
                    <Learn />
                </StrictMode>
            )
            current_page = 3;
            break;
        default:
            // write code to yell a bunch
    }
}

