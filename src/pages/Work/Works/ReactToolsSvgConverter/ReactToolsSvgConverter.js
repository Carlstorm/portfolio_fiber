import { AssetBox, AssetContainer, CodeBox, WorkSection } from "../WorkTemplate/WorkTemplate";
import { after, before } from "./assets/Code";


export default function ReactToolsSvgConverter({setPopUp}) {
    return (
        <>
            <WorkSection title="Description">
                <p>A tool for formatting and cleaning SVGs, as well as converting them into React components.</p>
            </WorkSection>
            <WorkSection title="Goal">
                <p>
                    When incorporating SVGs into React, there are essentially two approaches: utilizing an img tag, which confines SVG files to standard image limitations, or employing inline/react components, offering extensive control and dynamic interaction capabilities. Nevertheless, manually transcribing multiple SVGs into React-compatible syntax can be laborious. Therefore, our tool aims to efficiently optimize and automate this process, expediting development efforts
                </p>
            </WorkSection>

            <WorkSection title="Problems/solutions">
                <ol>
                    <li>
                        <h3>Programmatically Reading and Formatting SVG Code</h3>
                        <p>
                            Online SVG files often suffer from poor structure due to multiple processing stages, including compression and optimization. This can compromise code integrity and lead to challenges in integration and manipulation. Moreover, they may contain unnecessary or redundant code, complicating maintenance and impeding efficient usage within projects.
                        </p>
                        <p>
                            Achieving the desired clean code structure proved challenging due to the dynamic nature of SVG code. SVG files frequently feature intricate and diverse structures, complicating the streamlining of the formatting process. Interestingly, while the tool wasn't initially designed for SVG cleaning, it ended up being a significant part of its codebase.
                        </p>
                        <AssetContainer>
                            <AssetBox title="Cleaning" setPopUp={setPopUp} contentType="img" content={require("./assets/beforeAfter.png")}  />
                            <AssetBox title="Ts/scss Example" setPopUp={setPopUp} contentType="img" content={require("./assets/TypescriptScssExample.png")}  />
                        </AssetContainer>
                    </li>
                    <li>
                        <h3>Dynamic Resizing</h3>
                        <p>
                            SVG files may come in various sizes and aspect ratios, and there might be inconsistencies between the dimensions of the viewBox property and the actual content when downloading SVG files. To ensure proper rendering and scalability within React components, it became imperative to dynamically adjust the viewBox property based on the dimensions of the SVG content.
                        </p>
                        <p>
                            To fix this i made algorithms to scrutinize the structures of SVG files and compute the most suitable viewBox values derived from the content dimensions. This method facilitated automated adjustments of the viewBox property, minimizing the need for manual intervention. Additionally, I implemented an interface to enable manual editing of the viewBox, offering users flexibility in fine-tuning the SVG conversion process.
                        </p>
                        <AssetContainer>
                            <AssetBox title="Resize" setPopUp={setPopUp} contentType="img" content={require("./assets/resize.png")}  />
                        </AssetContainer>
                    </li>
                    <li>
                        <h3>Format options</h3>
                        <p>
                            The tool is primarily designed to enhance my personal development efficiency. To ensure its usability, I made sure it was capable of exporting components that seamlessly fit the environments I frequently work in.
                        </p>
                        <p>
                            Accommodating various development environments, such as TypeScript with SCSS or JavaScript with Sass, posed a significant challenge due to the inherent difficulty in seamlessly integrating disparate technologies. Achieving compatibility across different syntaxes, structures, and compilation processes required careful consideration and meticulous adjustment
                        </p>
                        <AssetContainer>
                            <AssetBox title="Format options" setPopUp={setPopUp} contentType="img" content={require("./assets/exportOptions.png")}  />
                            <AssetBox title="Download" setPopUp={setPopUp} contentType="img" content={require("./assets/downloadExample.png")}  />
                        </AssetContainer>
                    </li>
                </ol>
            </WorkSection>

            <WorkSection title="Package.json">
                <CodeBox code={`{
    "name": "react-tools",
    "version": "0.1.0",
    "homepage": "https://carlstorm.github.io/react_tools/",
    "private": true,
    "dependencies": {
        "@reduxjs/toolkit": "^1.9.7",
        "@testing-library/jest-dom": "^6.1.4",
        "@testing-library/react": "^14.0.0",
        "@testing-library/user-event": "^14.5.1",
        "buffer": "^6.0.3",
        "eslint-plugin-prettier": "^5.0.1",
        "gh-pages": "^6.1.1",
        "js-beautify": "^1.14.11",
        "jszip": "^3.10.1",
        "npm": "^10.4.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-dropzone": "^14.2.3",
        "react-redux": "^8.1.3",
        "react-router-dom": "^6.17.0",
        "react-scripts": "^5.0.1",
        "redux-persist": "^6.0.0",
        "redux-thunk": "^2.4.2",
        "sass": "^1.69.5",
        "sass-loader": "^13.3.2",
        "timers": "^0.1.1",
        "xml2js": "^0.6.2"
    },
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "lint": "eslint --cache .",
        "format": "prettier --check .",
        "prettier": "prettier --write ."
    },
    "eslintConfig": {
        "extends": "react-app"
    },
    "browserslist": [
        "defaults",
        "not IE 11"
    ],
    "overrides": {
        "typescript": "^5.2.2"
    },
    "devDependencies": {
        "@types/css": "^0.0.37",
        "@types/jest": "^29.5.6",
        "@types/js-beautify": "^1.14.3",
        "@types/node": "^20.8.9",
        "@types/react": "^18.2.33",
        "@types/react-dom": "^18.2.14",
        "@types/xml2js": "^0.4.13",
        "typescript": "^5.2.2"
    },
    "postcss": {
        "plugins": {
            "autoprefixer": {}
        }
    }
}
`}/>
            </WorkSection>

            <WorkSection title="Helpfull links">
                <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG: Scalable Vector Graphics</a>
            </WorkSection>
        </>
    )
}
