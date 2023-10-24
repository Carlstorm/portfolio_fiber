import { AssetBox, AssetContainer, CodeBox, WorkSection } from "../WorkTemplate/WorkTemplate";

export default function Itucation({setPopUp}) {
    return (
        <>
            <WorkSection title="Description">
                <p>A complete cloud based remake of itucation's adminstration system</p>
            </WorkSection>
            <WorkSection title="Goal">
                <p>The company entrusted me with the task of migrating their current system and databases to Azure Cloud Services. In addition to this migration, I was also tasked with the substantial undertaking of reengineering their existing system to enhance administrative efficiency and streamline operational processes.</p>
            </WorkSection>

            <WorkSection title="Problems/solutions">
                <ol>
                    <li>
                        <h3>Azure enviroment</h3>
                        <p>
                            Coding a system in Azure Cloud was a learning journey, where I encountered and grappled with a series of significant challenges:
                        </p>
                        <ul>
                            <li>
                                <h4>Scalability and Elasticity:</h4>
                                <p>
                                    Adapting the system to Azure's dynamic scaling capabilities required meticulous planning and resource management.
                                </p>
                            </li>
                            <li>
                                <h4>Integration Complexity:</h4>
                                <p>
                                    Harmonizing the system with Azure services and technologies required in-depth understanding and seamless integration.
                                </p>
                            </li>
                            <li>
                                <h4>Service Dependencies:</h4>
                                <p>
                                    Managing evolving Azure services while maintaining system stability demanded agility.
                                </p>
                            </li>
                            <li>
                                <h4>Cost Management:</h4>
                                <p>
                                    Optimizing resource allocation and cost management required constant vigilance.
                                </p>
                            </li>
                            <li>
                                <h4>Security and Compliance:</h4>
                                <p>
                                    Meeting industry-specific regulations and maintaining a strong security posture proved challenging.
                                </p>
                            </li>
                            <li>
                                <h4>Cost Management:</h4>
                                <p>
                                    Optimizing resource allocation and cost management required constant vigilance.
                                </p>
                            </li>
                        </ul>
                        <p>
                        In retrospect, the experience of developing a system in Azure Cloud has been marked by the successful resolution of these intricate challenges. By embracing the complexity and harnessing Azure's capabilities, the system now stands as a robust, scalable, and secure solution, a testament to my dedication and expertise.
                        </p>
                    </li>
                    <li>
                        <h3>Bridging the Gap for Non-Technical Users</h3>
                        <p>
                            Navigating the realm of technical solutions for individuals who may not have an extensive technical background can be quite a challenge. It's a journey that demands a delicate balance between simplifying complex concepts and ensuring that the chosen solutions genuinely meet their needs.
                        </p>
                        <p>
                            Selecting the right solution for someone without a technical background is no small feat. It's not just about finding a solution that works; it's about finding one that's user-friendly, cost-effective, and reliable. This means considering factors like user interfaces, ongoing support, and scalability, which can often be overlooked.
                        </p>
                        <p>
                            In addition to the challenges of explaining technical concepts and selecting the right solutions, one more critical aspect is ensuring the user-centric design of applications. For those without extensive technical knowledge, user-friendly interfaces, intuitive navigation, and clear instructions are paramount. The design of applications should prioritize simplicity and accessibility, focusing on delivering a seamless and hassle-free user experience
                        </p>
                        <p>
                            In the end, the journey of finding the best technical solutions for those without extensive technical knowledge is about making technology accessible and beneficial, rather than overwhelming. It requires patience, empathy, and a commitment to simplifying the complex, ensuring that the solutions we recommend are truly a bridge to a more efficient, connected, and empowered future.
                        </p>
                    </li>
                    <li>
                        <h3>Preview images</h3>
                        <p>Several design decisions may not immediately appear logical to an outside observer, as they are meticulously tailored to precisely meet the unique preferences and requirements of the customer.</p>
                        <AssetContainer>
                            <AssetBox title="Themes" setPopUp={setPopUp} contentType="img" content={require("./assets/themes.gif")} />
                            <AssetBox title="admin menu" setPopUp={setPopUp} contentType="img" content={require("./assets/adminMenu.png")} />
                            <AssetBox title="hold" setPopUp={setPopUp} contentType="img" content={require("./assets/hold.png")} />
                            <AssetBox title="hold interface" setPopUp={setPopUp} contentType="img" content={require("./assets/holdInterface.png")} />
                            <AssetBox title="kursister" setPopUp={setPopUp} contentType="img" content={require("./assets/kursister.png")} />
                        </AssetContainer>
                    </li>
                </ol>
            </WorkSection>

            <WorkSection title="Package.json">
                <CodeBox code={`{
  "name": "KursusAdm",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@apollo/client": "^3.8.4",
    "@azure/msal-browser": "^2.28.3",
    "@azure/msal-react": "^1.4.7",
    "@microsoft/microsoft-graph-client": "^3.0.7",
    "buffer": "^6.0.3",
    "chart.js": "^4.2.1",
    "graphql": "^16.6.0",
    "process": "^0.11.10",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.0",
    "react-scripts": "5.0.1",
    "router": "^1.3.7",
    "stream-browserify": "^3.0.0",
    "xlsx": "^0.18.5"
  },
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject",
    "build-all-start-cli": "npm run build && cd api && npm run build && cd .. && swa start build --api-location api",
    "build-all": "npm run build && cd api && npm run build",
    "start-cli": "swa start build --api-location api",
    "codegen-graphql-types": "graphql-codegen --config codegen.yml"
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
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
    "@graphql-codegen/cli": "^2.13.12",
    "@graphql-codegen/typescript": "^2.8.2",
    "@graphql-codegen/typescript-operations": "^2.5.7",
    "@microsoft/microsoft-graph-types": "^2.38.0",
    "@types/node": "^18.11.3",
    "@types/react": "^18.0.21",
    "@types/react-dom": "^18.0.6",
    "react-app-rewired": "^2.2.1",
    "sass": "^1.55.0",
    "typescript": "^4.8.4",
    "webpack": "^5.88.2"
  }
}
`}/>
            </WorkSection>

            <WorkSection title="API Package.json">
                <CodeBox code={`{
  "name": "api",
  "version": "1.0.0",
  "description": "kursusadm api",
  "scripts": {
    "build": "tsc",
    "watch": "tsc -w",
    "prestart": "npm run build",
    "start": "func start",
    "test": "echo \"No tests yet...\""
  },
  "dependencies": {
    "@apollo/server": "^4.9.3",
    "@as-integrations/azure-functions": "^0.1.3",
    "@azure/msal-node": "^1.15.0",
    "@graphql-tools/load-files": "6.6.1",
    "@graphql-tools/merge": "^8.4.1",
    "@prisma/client": "^5.3.1",
    "graphql-fields": "^2.0.3",
    "graphql-tag": "^2.12.6",
    "jsonwebtoken": "^9.0.1",
    "jsonwebtoken-promisified": "^1.0.3",
    "jwks-rsa": "^3.0.1"
  },
  "devDependencies": {
    "@azure/functions": "^3.0.0",
    "@types/node": "^16.18.57",
    "graphql": "^16.6.0",
    "prisma": "^5.3.1",
    "typescript": "^4.9.5"
  }
}

`}/>
            </WorkSection>

            <WorkSection title="Helpfull links">
                <a href="https://learn.microsoft.com/en-us/azure/static-web-apps/">microsoft azure static web apps</a>
                <a href="https://www.apollographql.com/docs/">apollo docs</a>
                <a href="https://graphql.org/learn/">graphQL docs</a>
                <a href="https://www.prisma.io/docs">prisma docs</a>
            </WorkSection>
        </>
    )
}
