import { useEffect } from 'react';
import JsSvg from '../../../assets/svgs/tech/JsSvg';
import ReactSvg from '../../../assets/svgs/tech/ReactSvg';
import SassSvg from '../../../assets/svgs/tech/SassSvg';
import ThreeSvg from '../../../assets/svgs/tech/ThreeSvg';
import TsSvg from '../../../assets/svgs/tech/TsSvg';
import SoundDisplacement from './SoundDisplacement/SoundDisplacement';

const portfolioImg = require("../../../img/port.png")
const labSolverImg = require("../../../img/lab.png")
const SoundDisplacementImg = require("../../../img/displace.png")

export const worksList = [
    {
        title: "Portolio",
        content: (setPopUp) => <SoundDisplacement setPopUp={setPopUp} />,
        date: "29/03/2023",
        demo: false,
        github: false,
        type: "PERSONAL PROJECT",
        img: portfolioImg,
        tech: ["JavaScript", "React.js", "Sass", "Three.js"]
    },
    {
        title: "Lab solver",
        content: (setPopUp) => <SoundDisplacement setPopUp={setPopUp} />,
        date: "29/03/2023",
        demo: "https://carlstorm.github.io/labSolver/",
        github: "https://github.com/Carlstorm/labSolver",
        type: "PERSONAL PROJECT",
        img: labSolverImg,
        tech: ["TypeScript", "React.js", "Sass"]
    },
    {
        title: "Sound displacement",
        content: (setPopUp) => <SoundDisplacement setPopUp={setPopUp} />,
        date: "29/03/2023",
        demo: false,
        github: false,
        type: "PERSONAL PROJECT",
        img: SoundDisplacementImg,
        tech: ["JavaScript", "React.js", "Sass", "Three.js"]
    }
]

export const getTechIcon = (title) => {
    switch(title) {
        case "JavaScript": return <JsSvg />;
        case "TypeScript": return <TsSvg />;
        case "React.js": return <ReactSvg />;
        case "Sass": return <SassSvg />;
        case "Three.js": return <ThreeSvg />;
    }
}