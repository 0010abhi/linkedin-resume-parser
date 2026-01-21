import { useState } from "react";
import TemplateOne from "./TemplateOne";

export default function ChooseTemplate({ data }: { data: any }) {
    const [selectedTemplate, setSelectedTemplate] = useState<string>("template1");
    console.log("Data in ChooseTemplate:", data);
    return (
        <div>
            <div className="text-3xl font-bold text-blue-600">
                Choose Template Component
            </div>
            <div className="my-4">
                <label className="mr-4">
                    <input
                        type="radio"
                        name="template"
                        value="template1"
                        checked={selectedTemplate === "template1"}
                        onChange={() => setSelectedTemplate("template1")}
                        className="mr-2"
                    />
                    Template 1
                </label>
                <label>
                    <input
                        type="radio"
                        name="template"
                        value="template2"
                        checked={selectedTemplate === "template2"}
                        onChange={() => setSelectedTemplate("template2")}
                        className="mr-2"
                    />
                    Template 2
                </label>
            </div>
            {
                data && selectedTemplate === "template1" ? (
                    <TemplateOne data={data} />
                ) : null
            }
        </div>
    );
}