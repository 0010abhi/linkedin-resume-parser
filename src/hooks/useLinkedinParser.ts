import { GoogleGenAI } from "@google/genai";
import { useState, useEffect } from "react";
const GOOGLE_AI_API_KEY = import.meta.env.VITE_GOOGLE_AI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GOOGLE_AI_API_KEY! });

export default function useLinkedInParser(data: any) {
    const [response, setResponse] = useState<any>(null);

    useEffect(() => {
        async function generateParsedData() {
            if (data == null) return;
            const contents = [
                { text: "Parse the following Linkedin resume and extract the name, email, phone number, skills, experience and education in json object like {data: {name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890', skills: ['JavaScript', 'React'], experience: [{title: 'Software Engineer', company: 'ABC Corp', duration: '2020 - Present', responsibilities: '*'}], education: [{degree: 'B.S. Computer Science', school: 'XYZ University', year: '2016 - 2020'}]}}" },
                {
                    inlineData: {
                        mimeType: 'application/pdf',
                        data: data
                    }
                }
            ];
            // const response: any = await ai.models.generateContent({
            //     model: "gemini-2.5-flash",
            //     contents: contents
            // });
            const response: any = {
    "candidates": [
        {
            "content": {
                "parts": [
                    {
                        "text": "```json\n{\n  \"data\": {\n    \"name\": \"Abhishek Sachdeva\",\n    \"email\": \"0010abhi@gmail.com\",\n    \"phone\": null,\n    \"skills\": [\n      \"Datadog\",\n      \"Harness\",\n      \"Cypress\"\n    ],\n    \"experience\": [\n      {\n        \"title\": \"Senior Software Developer (Contract)\",\n        \"company\": \"PayPal\",\n        \"duration\": \"August 2024 - December 2025\",\n        \"responsibilities\": [\n          \"Improved overall code quality by resolving SonarQube-reported issues and increasing FT and UT test coverage.\",\n          \"Triaged and diagnosed issues using Datadog, Elastic Search dashboards, and PayPal's CAL & FPTI logging systems.\",\n          \"Developed and maintained features and bug fixes while ensuring project alignment with the PYPL ecosystem, including managing Node modules for the Donate Button.\",\n          \"Assisted in deploying production changes using CI/CD pipelines and ensuring safe, gradual rollouts.\",\n          \"Gained hands-on experience with micro-frontend architecture and resolving security-related issues\"\n        ]\n      },\n      {\n        \"title\": \"Senior Software Engineer\",\n        \"company\": \"Vertisystem\",\n        \"duration\": \"December 2022 - October 2023\",\n        \"responsibilities\": [\n          \"Initiated a low-code/no-code product tailored to the retail industry and developed shared components using React.\",\n          \"Implemented modules for creating, updating, and viewing projects, and integrated authentication using Keycloak.\",\n          \"Gained experience with basic tasks in microservices architecture, Kafka, and Elasticsearch.\"\n        ]\n      },\n      {\n        \"title\": \"Freelance Software Developer\",\n        \"company\": \"Freelance\",\n        \"duration\": \"July 2019 - November 2022\",\n        \"responsibilities\": [\n          \"Collaborated with diverse clients on various deadline-driven projects, demonstrating a strong aptitude for understanding business needs and providing tailored solutions.\",\n          \"Spearheaded React architecture, integrated Google APIs, and implemented payment gateway integration for an MVP for Aerologix.\",\n          \"Contributed to product management features, UI enhancements, bug fixes, and unit testing for ERP systems.\",\n          \"Developed proof-of-concept for a SaaS project financing platform (Octave) using React, Apollo Client, Express-GraphQL, AWS, and Docker.\",\n          \"Contributed to the frontend UPI autopay mandate feature for the Simpl mobile app.\",\n          \"Worked with clients such as Netwila, Upshift Cars, MyAva, and Premier LPG on their web and mobile-based applications.\"\n        ]\n      },\n      {\n        \"title\": \"SDE - 1 (UI)\",\n        \"company\": \"FP Tech Science Pvt. Ltd.\",\n        \"duration\": \"April 2019 - April 2020\",\n        \"responsibilities\": [\n          \"Worked on internal portals of an e-commerce platform, including Category Account Terminal (CAT) and Marketing Account Terminal (MAT).\",\n          \"Refactored CAT to adopt a common architecture with MAT, reducing system bugs and simplifying debugging.\",\n          \"Initiated MAT development, including shared components, an Incentive Engine module, and authentication using Okta.\"\n        ]\n      },\n      {\n        \"title\": \"Software Developer\",\n        \"company\": \"CoWrks\",\n        \"duration\": \"July 2018 - March 2019\",\n        \"responsibilities\": [\n          \"Worked on products Connect (Web & Mobile), Arrivè (iPad), and Nucleus (Web).\",\n          \"Developed features including Community Support, Community Search, User Profile, and related admin modules.\",\n          \"Optimized applications by upgrading React Navigation, integrating API-v2, and implementing solutions for infinite list feeds.\",\n          \"Contributed to REST API development for visitor management and third-party integration, such as Shoptree.\"\n        ]\n      },\n      {\n        \"title\": \"Software Developer\",\n        \"company\": \"Fintellix Solutions (formerly iCreate)\",\n        \"duration\": \"December 2017 - June 2018\",\n        \"responsibilities\": [\n          \"Developed a POC for a regulatory system web application using Angular for PayPal India, initiating an Angular project, developing reporting and dashboard analytics modules, and contributing to Node.js middleware.\",\n          \"Participated in scrum planning and deployment infrastructure planning.\"\n        ]\n      },\n      {\n        \"title\": \"Software Engineer\",\n        \"company\": \"Mindtree\",\n        \"duration\": \"December 2015 - December 2017\",\n        \"responsibilities\": [\n          \"Developed HttpInterceptor, Print Baggage File, Frontend Error Logger, and Application Modes, and collaborated on delayed and damaged bag module using AngularJS, jQuery, and Angular for aviation client SITA.\"\n        ]\n      },\n      {\n        \"title\": \"Engineer\",\n        \"company\": \"Mindtree\",\n        \"duration\": \"October 2015 - December 2015\",\n        \"responsibilities\": [\n          \"*\"\n        ]\n      }\n    ],\n    \"education\": [\n      {\n        \"degree\": \"Bachelor of Technology (B.Tech.), Computer Science\",\n        \"school\": \"The ICFAI University, Dehradun\",\n        \"year\": \"2011 - 2015\"\n      },\n      {\n        \"degree\": \"Internship, Web Development\",\n        \"school\": \"Ahex Technologies\",\n        \"year\": \"January 2015 - June 2015\"\n      }\n    ]\n  }\n}\n```"
                    }
                ],
                "role": "model"
            },
            "finishReason": "STOP",
            "index": 0
        }
    ],
    "usageMetadata": {
        "promptTokenCount": 1166,
        "candidatesTokenCount": 1269,
        "totalTokenCount": 5675,
        "promptTokensDetails": [
            {
                "modality": "TEXT",
                "tokenCount": 134
            },
            {
                "modality": "DOCUMENT",
                "tokenCount": 1032
            }
        ],
        "thoughtsTokenCount": 3240
    },
    "modelVersion": "gemini-2.5-flash",
    "responseId": "4LZwactF6c-O4w-ekaixDw"
}
            setResponse(JSON.parse(response?.candidates[0]?.content?.parts[0]?.text.replace(/```json|```/g, "").trim()));
        }
        generateParsedData();
    }, [data]);

    return response;
}