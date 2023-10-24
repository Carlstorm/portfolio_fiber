import { AssetBox, AssetContainer, CodeBox, WorkSection } from "../WorkTemplate/WorkTemplate";
import {Cinema4dScript} from "./assets/Cinema4dScript";

export default function Port({setPopUp}) {
    return (
        <>
            <WorkSection title="Description">
                <p>
                    Portfolio made with react three fiber.
                </p>
            </WorkSection>
            <WorkSection title="Goal">
                <p>
                    My goal is to showcase my skills in web application development from March 2023 onwards and create a lasting impression. 
                    While I've designed several web applications during my education and career, I see this as an opportunity to start fresh 
                    and apply my current skills to create high-quality applications within reasonable timelines.
                </p>
                <p>
                    My plan is to only include projects that I've taken full responsibility for and make the source code accessible for all my applications.   
                </p>
                <p>
                    Depending on my availability, I hope to upload a new project every week or two until I secure employment.
                </p>
            </WorkSection>
            <WorkSection title="Problems/solutions">
                <ol>
                    <li>
                        <h3>Performance</h3>
                        <p>
                            This application contains alot of event triggers and animations happening simutaniously with the inclusion of 3D rendering and post processing,
                            its basically pushing the dom to the limit. with application such as theese there is a fine line between sexyness and UX, noone wants to use a 
                            laggy website.
                        </p>
                        <h4>Solutions:</h4>
                        <ul>
                            <li>
                                <h4>Limiting animation properties</h4>
                                <p>
                                    Style properties in web-development are not created equally, some properties are handled much more efficiently by the gpu 
                                    but often even more important are some properties much more localized, which means that the browser dosnt have to recalculate 
                                    multiple elements or the entire page to animate a single element.
                                    In general the two most recognized performance - style properties with great browser support are "opacity" and "transform".
                                    With this in mind and the knowledge of the scale of the applications animations, ive sadly had to set limitations on especially the 
                                    transitions to optimize the performance at the cost of sexyness.
                                </p>
                                <p>
                                    To additionally improve style-property performance ive carefully utilized the "will-change property"
                                    will-change is telling the browser that you expect the element to change in some way, The browser then creates a new layer for that element, 
                                    which is stored separately in memory and can be updated independently of the rest of the page by the gpu. (previusly done by hacks like "transformZ").
                                    Allthough a great tool for performance in css animations the property should be handled with care as an excesive amount of "layers" can have the 
                                    opposite effect and the turning point can be hard to predict.
                                </p>
                            </li>
                            <li>
                                <h4>Limiting processes/calculations</h4>
                                <p>
                                    For the 3d animation i made sure to "pre-bake" the animation flow, while less experienced i made a simmular website, 
                                    which basically dynamically calculated the postion of each 3d object almost like a very basic physics engine with random properties 
                                    which also meant each explosion would be different. 
                                    even though i think its a pretty cool solution, processing wise gooing through a array with the animation allready calculated (like i have done this time) 
                                    requires much less and allows me to control exacly how the explosion will play out.

                                    Allthough a performance increase was achieved i was suprised to find out how little it actually did, which goes to show how quick javascript is, 
                                    and just how much the dom is the limitation.
                                </p>
                                <p>
                                    I decided to try out react-three-fiber for this project which lead to some problems, basically the framework is designed the run a animation loop 
                                    inside a 3d container component, my applications however also contains alot of dynamic 2d animations aswell which cannot be placed within this component.
                                    As i absolutely did not want to rendering loops running simutaniously i had to come up with a "hacky" way to utilize the integrated animation-loop-hook,
                                    whereever i wanted in the application. which all animations-algortihms sharing a single loop the next step was to make sure that no unessesary calculation
                                    is happening, i did this by structuring the code in a way that allows me to carefully define exacly when each animation should run and stop based on simple variables
                                    to prevent any prossesing to even check if the algorithmes should run.
                                    this probably did ridiculously little, but hey every ms counts. 
                                </p>
                            </li>
                            <li>
                                <h4>Pray</h4>
                                <p>
                                    Although i spend alot of thought optimizing the performance it ultimately comes down the the users system and all i can do is hope that
                                    any potential job-giving users dont visit with an out-dated and or unplugged laptop, which will make me look like an idiot for talking about 
                                    performance optimization.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3> Rendering & Texturing</h3>
                        <p>
                            To ensure a clean edge between the "inside" and "outside" of the 3d models materials the optimal way was to simpy apply different materials
                            to the relevant polygons faces, this is however not supported by Gltf files and texturizing each fragment in a quality that ensures clean edges 
                            is not a good solution especially for web-development. instead i had to basically split the polygons for each edge fragment to produce two new object 
                            an "inside object" and an "outside object" with respective materials and then group them so they can be handled as a single entity. although containing the same amount
                            of polygons-faces this sadly results in a bigger file but its a nessesary sacrifice.

                            Because this isnt a common situaltion and i didnt want to do this manually for (150+ fragments) * (amount of prototypes) i pretty much 
                            had to write a custom python script for cinema4D. i am by no means an expierienced python developer and im sure anyone who is can tell by the code. 
                            it only needs to run onces though and it takes like a millisecond so who cares. 
                            Besides having litle to no experience in what i was doing i found it really fun to try out a different language in a new non web-based 
                            enviroment even with cinema4D's shitty integrated editor.
                        </p>
                        <AssetContainer>
                            <AssetBox title="Fragment splitting" setPopUp={setPopUp} contentType="img" content={require("./assets/fragmentSplitting.gif")} />
                            <AssetBox title="Cinema4D script" setPopUp={setPopUp} contentType="code" content={Cinema4dScript} />
                        </AssetContainer>
                    </li>
                </ol>
            </WorkSection>
            <WorkSection title="Package.json">
                <CodeBox
                code={`"name": "Portfolio",
"version": "0.1.0",
"homepage": "https://Carlstorm.github.io/portfolio_fiber",
"private": true,
"dependencies": {
    "@react-three/drei": "^9.57.3",
    "@react-three/fiber": "^8.12.0",
    "@react-three/postprocessing": "^2.7.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "sass": "^1.59.3",
    "three": "^0.150.1",
    "three-stdlib": "^2.21.8",
    "web-vitals": "^2.1.4"
},
"scripts": {
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
"browserslist": {
    "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
    ],
    "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
    ]
},
"devDependencies": {
    "gh-pages": "^5.0.0"
}
`} />
            </WorkSection>

            <WorkSection title="Helpfull links">
                <a href="https://developers.maxon.net/docs/py/2023_2/index.html">cinema4D python documentation</a>
                <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">react three fiber documentation</a>
            </WorkSection>
        </>
    )
}