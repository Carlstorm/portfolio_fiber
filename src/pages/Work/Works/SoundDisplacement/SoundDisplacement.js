import { AssetBox, AssetContainer, CodeBox, WorkSection } from "../WorkTemplate/WorkTemplate";
export default function SoundDisplacement({setPopUp}) {
    return (
        <>
            <WorkSection title="Description">
                <p>
                    Dynamic 3D displacement based on sound with simplex noise.
                </p>
            </WorkSection>
            <WorkSection title="Goal">
                <p>
                    Understanding react three fiber and three js practice.
                </p>
            </WorkSection>
            <WorkSection title="Problems/solutions">
                <ol>
                    <li>
                        <h3>Calibration</h3>
                        <p>
                            The 3d models vectors are modified through simplex noise, and are further multiplied by the
                            data from an uploaded audio-clip, instead of having the 3d model follow the audio data directly a more
                            visually pleasing and less "jumpy" result can be obtained by making some kind of "gravity" and then have each
                            vector fight it on a single axis pretty much exacly like a jump function in a simple 2d platformer.
                            the 3d model however has infinite "double jumps" and to prevent the vectors from jumping out the screen 
                            i added a modification that makes the gravity exponentially stronger the further away the vector is, 
                            kinda like jumping with a rubberband attached to the ground.
                        </p>
                        <p>
                            The problem with having multiple forces interacting in this way based on highly dynamic inputs (sound data),
                            is that the variables are hard to predict e.g "gravity force" or "elestic force", to get the best result a good amount
                            of fiddeling and calibration is required and the result might vary alot from each audio-clip to audio-clip. 
                        </p>
                        <p>
                            For a more consistant result possible solutions could include normalizing the sound data or programmatically defining 
                            and predictiing the best configuration for each audio-clip by "pre-interpreting" the data.
                        </p>
                    </li>
                    <li>
                        <h3>Fiddeling</h3>
                        <p>
                            I aimed to create a distinctive appearance for the orb, reminiscent of a "black-hole" effect, without imposing excessive strain on the browser due to reflections and post-processing. To achieve this, I opted to craft a custom environment map. Essentially, the orb itself is a highly reflective sphere with a metallic sheen. However, the key lies in the environment it reflects, which has been meticulously tailored to produce the desired effect.
                        </p>
                        <p>
                            Developing this high dynamic range (HDR) image entailed considerable fine-tuning to ensure that:
                        </p>
                        <ul>
                            <li>
                                <p>The light sources were positioned precisely in relation to the 3D model.</p>
                            </li>
                            <li>
                                <p>The relative light values were balanced to achieve the desired outcome.</p>
                            </li>
                            <li>
                                <p>There were no issues with visual artifacts or clipping on the reflective surface.</p>
                            </li>
                        </ul>
                        <AssetContainer>
                            <AssetBox title="env map" setPopUp={setPopUp} contentType="img" content={require("./assets/env.png")} />
                        </AssetContainer>
                    </li>
                    <li>
                        <h3>Enterperation of sound</h3>
                        <p>
                            The animation values are straightforwardly derived from the PCM (Pulse Code Modulation) values at the specified "audio time." In essence, this method primarily focuses on the power or volume of the audio. Consequently, it does not account for variations in sound, and audio tracks with a consistently uniform volume may not produce optimal results, even if they contain distinct elements such as a prominent bassline.
                        </p>
                        <p>
                            I opted to maintain this project as a modest personal project and decided to conclude it at this point. For more consistent outcomes, an advanced audio interpretation approach would need to be incorporated.
                        </p>
                    </li>
                </ol>
            </WorkSection>

            <WorkSection title="Package.json">
                <CodeBox
                code={`{
    "name": "soundDisplacement",
    "version": "0.1.0",
    "homepage": "https://Carlstorm.github.io/SimplexNoise4Ddisplacement",
    "private": true,
    "dependencies": {
        "@react-three/drei": "^9.40.0",
        "@react-three/fiber": "^8.9.1",
        "@react-three/postprocessing": "^2.7.0",
        "open-simplex-noise": "^2.5.0",
        "postprocessing": "^6.29.1",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "sass": "^1.69.4",
        "three": "^0.146.0",
        "three-buffer-geometry-utils": "^1.0.0",
        "web-vitals": "^2.1.4"
    },
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
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
        "gh-pages": "^5.0.0",
        "react-app-rewired": "^2.2.1"
    }
}
                  
`} />
            </WorkSection>

            <WorkSection title="Helpfull links">
                <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">React three fiber documentation</a>
            </WorkSection>
        </>
    )
}