import { AssetBox, AssetContainer, CodeBox, WorkSection } from "../WorkTemplate/WorkTemplate";

export default function LabSolver({setPopUp}) {
    return (
        <>
            <WorkSection title="Description">
                <p>Fun visual representations of maze generating and solving algorithms</p>
            </WorkSection>
            <WorkSection title="Goal">
                <p>TypeScript Practice / Challenge</p>
            </WorkSection>

            <WorkSection title="Problems/solutions">
                <ol>
                    <li>
                        <h3>A different approach</h3>
                        <p>
                            I created a similar app during my education. In terms of functionality, it essentially mirrored the original version, which used to generate an HTML element for each square. However, that approach resulted in some noticeable lag when dealing with a larger number of elements, around 1000 in this case.
                        </p>
                        <p>
                            this time, I decided to use a canvas instead. As an added learning experience, I stuck to TypeScript and adopted a class-based structure. While I could have achieved a similar structure and outcome using regular JavaScript objects, I found that classes worked quite well with TypeScript, which I ended up liking.
                        </p>
                    </li>
                    <li>
                        <h3>Smooth/Clean drawing</h3>
                        <p>
                            The applications display is basically squares drawn on a canvas based on a collection of box class instances,
                            instead of directly drawing on the canvas from the cursors postion it instead assign a property to the box class and
                            then re-renders the canvas.
                            this needs to happen for every single box within the cursor, the problem is that constantly triggering events e.g "mouse-move" or "scroll",
                            are highly unpredictable and might vary based on browser performance/stress or simply not trigger enough to hit all desired boxes,
                            to ensure a gapless drawing expierience the tool instead draws a vector every few millisecond between the previous
                            and the current cursor position and then fill in all the boxes within the vector. this way no matter how quckly the cursor is moved or how laggy
                            the system is, a solid line is ensured. 
                        </p>
                        <AssetContainer>
                            <AssetBox title="Vector Draw" setPopUp={setPopUp} contentType="img" content={require("./assets/mazeDraw.jpg")} />
                        </AssetContainer>
                    </li>
                </ol>
            </WorkSection>

            <WorkSection title="Package.json">
                <CodeBox code={`"name": "lab-solver-app",
"version": "0.1.0",
"homepage": "https://Carlstorm.github.io/labSolver",
"private": true,
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.14",
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "sass": "^1.58.3",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
},
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build"
},
"eslintConfig": {
    "extends": [
    "react-app",
    "react-app/jest"
    ]
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
`}/>
            </WorkSection>

            <WorkSection title="Helpfull links">
                <a href="https://www.jamisbuck.org/mazes/">Amazing blog on maze generation by Jamis Buck</a>
            </WorkSection>
        </>
    )
}