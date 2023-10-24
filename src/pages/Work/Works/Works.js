// assets
    // imgs
        const portfolioImg = require("../../../img/port.png")
        const labSolverImg = require("../../../img/lab.png")
        const soundDisplacementImg = require("../../../img/displace.png")
        const itucation = require("../../../img/itucation.png")
    // svgs
    import JsSvg from '../../../assets/svgs/tech/JsSvg';
    import ReactSvg from '../../../assets/svgs/tech/ReactSvg';
    import SassSvg from '../../../assets/svgs/tech/SassSvg';
    import ThreeSvg from '../../../assets/svgs/tech/ThreeSvg';
    import TsSvg from '../../../assets/svgs/tech/TsSvg';
    import AzureSvg from '../../../assets/svgs/tech/AzureSvg';
    import SqlDatabaseSvg from '../../../assets/svgs/tech/SqlDatabaseSvg';
    import PrismaSvg from '../../../assets/svgs/tech/PrismaSvg';
    import GraphqlSvg from '../../../assets/svgs/tech/GraphqlSvg';
    import ApolloSvg from '../../../assets/svgs/tech/ApolloSvg';
    

// components
    import SoundDisplacement from './SoundDisplacement/SoundDisplacement';
    import LabSolver from './LabSolver/LabSolver';
    import Port from './Port/Port';
    import Itucation from './Itucation/Itucation';

export const worksList = [
    {
        title: "Portolio",
        content: (setPopUp) => <Port setPopUp={setPopUp} />,
        date: "29/03/2023",
        demo: "https://carlstorm.github.io/portfolio_fiber/",
        github: "https://github.com/Carlstorm/portfolio_fiber",
        type: "PERSONAL PROJECT",
        img: portfolioImg,
        tech: ["JavaScript", "React.js", "Sass", "Three.js"]
    },
    {
        title: "Lab solver",
        content: (setPopUp) => <LabSolver setPopUp={setPopUp} />,
        date: "12/04/2023",
        demo: "https://carlstorm.github.io/labSolver/",
        github: "https://github.com/Carlstorm/labSolver",
        type: "PERSONAL PROJECT",
        img: labSolverImg,
        tech: ["TypeScript", "React.js", "Sass"]
    },
    {
        title: "Sound displacement",
        content: (setPopUp) => <SoundDisplacement setPopUp={setPopUp} />,
        date: "04/05/2023",
        demo: "https://carlstorm.github.io/SimplexNoise4Ddisplacement/",
        github: "https://github.com/Carlstorm/SimplexNoise4Ddisplacement",
        type: "PERSONAL PROJECT",
        img: soundDisplacementImg,
        tech: ["JavaScript", "React.js", "Sass", "Three.js"]
    },
    {
        title: "Itucation Adminstration",
        content: (setPopUp) => <Itucation setPopUp={setPopUp} />,
        date: "24/06/2023",
        demo: false,
        github: false,
        type: "PROFFESIONAL PROJECT",
        img: itucation,
        tech: ["JavaScript", "TypeScript", "React.js", "Sass", "GraphQL", "Prisma", "Apollo", "Sql Database", "Azure"]
    }
]

export const getTechIcon = (title) => {
    switch(title) {
        case "JavaScript": return <JsSvg />;
        case "TypeScript": return <TsSvg />;
        case "React.js": return <ReactSvg />;
        case "Sass": return <SassSvg />;
        case "Three.js": return <ThreeSvg />;
        case "Azure": return <AzureSvg />;
        case "Sql Database": return <SqlDatabaseSvg />;
        case "Prisma": return <PrismaSvg />;
        case "GraphQL": return <GraphqlSvg />;
        case "Apollo": return <ApolloSvg />
    }
}