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
            const response: any = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: contents
            });
            // const response: any = {
            //     "candidates": [
            //         {
            //             "content": {
            //                 "parts": [
            //                     {
            //                         "text": "```json\n{\n  \"data\": {\n    \"name\": \"Abhishek Sachdeva\",\n    \"email\": \"0010abhi@gmail.com\",\n    \"phone\": null,\n    \"skills\": [\n      \"Datadog\",\n      \"Harness\",\n      \"Cypress\",\n      \"React\",\n      \"React Native\",\n      \"Node.js\",\n      \"Cloud-based Applications\",\n      \"SonarQube\",\n      \"Elasticsearch\",\n      \"CI/CD Pipelines\",\n      \"Micro-frontend Architecture\",\n      \"Keycloak\",\n      \"Microservices Architecture\",\n      \"Kafka\",\n      \"Google APIs\",\n      \"Payment Gateway Integration\",\n      \"Product Management\",\n      \"UI Enhancements\",\n      \"Unit Testing\",\n      \"SaaS\",\n      \"Apollo Client\",\n      \"Express-GraphQL\",\n      \"AWS\",\n      \"Docker\",\n      \"Web Development\",\n      \"Mobile Development\",\n      \"E-commerce Platforms\",\n      \"Okta\",\n      \"REST API\",\n      \"Angular\",\n      \"AngularJS\",\n      \"jQuery\",\n      \"Scrum Planning\",\n      \"Deployment Infrastructure Planning\",\n      \"HttpInterceptor\"\n    ],\n    \"experience\": [\n      {\n        \"title\": \"Senior Software Developer (Contract)\",\n        \"company\": \"PayPal\",\n        \"duration\": \"August 2024 - December 2025\"\n      },\n      {\n        \"title\": \"Senior Software Engineer\",\n        \"company\": \"Vertisystem\",\n        \"duration\": \"December 2022 - October 2023\"\n      },\n      {\n        \"title\": \"Freelance Software Developer\",\n        \"company\": \"Freelance\",\n        \"duration\": \"July 2019 - November 2022\"\n      },\n      {\n        \"title\": \"SDE - 1 (UI)\",\n        \"company\": \"FP Tech Science Pvt. Ltd.\",\n        \"duration\": \"April 2019 - April 2020\"\n      },\n      {\n        \"title\": \"Software Developer\",\n        \"company\": \"CoWrks\",\n        \"duration\": \"July 2018 - March 2019\"\n      },\n      {\n        \"title\": \"Software Developer\",\n        \"company\": \"Fintellix Solutions (formerly iCreate)\",\n        \"duration\": \"December 2017 - June 2018\"\n      },\n      {\n        \"title\": \"Software Engineer\",\n        \"company\": \"Mindtree\",\n        \"duration\": \"December 2015 - December 2017\"\n      },\n      {\n        \"title\": \"Engineer\",\n        \"company\": \"Mindtree\",\n        \"duration\": \"October 2015 - December 2015\"\n      },\n      {\n        \"title\": \"Internship, Web Development\",\n        \"company\": \"Ahex Technologies\",\n        \"duration\": \"January 2015 - June 2015\"\n      }\n    ],\n    \"education\": [\n      {\n        \"degree\": \"Bachelor of Technology (B.Tech.), Computer Science\",\n        \"school\": \"The ICFAI University, Dehradun\",\n        \"year\": \"2011 - 2015\"\n      }\n    ]\n  }\n}\n```"
            //                     }
            //                 ],
            //                 "role": "model"
            //             },
            //             "finishReason": "STOP",
            //             "index": 0
            //         }
            //     ],
            //     "usageMetadata": {
            //         "promptTokenCount": 1161,
            //         "candidatesTokenCount": 776,
            //         "totalTokenCount": 5120,
            //         "promptTokensDetails": [
            //             {
            //                 "modality": "TEXT",
            //                 "tokenCount": 129
            //             },
            //             {
            //                 "modality": "DOCUMENT",
            //                 "tokenCount": 1032
            //             }
            //         ],
            //         "thoughtsTokenCount": 3183
            //     },
            //     "modelVersion": "gemini-2.5-flash",
            //     "responseId": "P41waYzRNorrjuMPjdbZuAY"
            // }
            setResponse(JSON.parse(response?.candidates[0]?.content?.parts[0]?.text.replace(/```json|```/g, "").trim()));
        }
        generateParsedData();
    }, [data]);

    return response;
}