import React from "react";
import ResumeSkills from "./ResumeSections/Skills";
import ResumePersonalInfo from "./ResumeSections/PersonalInfo";
import ResumeWorkExperience from "./ResumeSections/WorkExperience";
import ResumePreview from "./ResumeSections/ResumePreview";
import TextArea from "./app-components/TextArea";
import ResumeEducation from "./ResumeSections/Education";
import SectionTitle from "./ResumeSections/SectionTitle";

export default function TemplateOne({ data }: any) {
    console.log("Data in TemplateOne:", data);

    return (
        <div className="grid grid-cols-2 gap-4 m-[20px]">
            <div className="border p-[15px]">
                <ResumePersonalInfo personalInfo={data?.data} />
                <section className="border-b border-gray-400 pb-2 mb-2">
                    <SectionTitle title="Professional Summary" />
                    <TextArea name="summary" value={data?.data?.professionalSummary} />
                </section>
                <ResumeWorkExperience workExperience={data?.data?.experience} />
                <ResumeEducation education={data?.data?.education} />
                <ResumeSkills skills={data?.data?.skills} />
            </div>
            <div className="border p-[15px]">
                <ResumePreview data={data?.data} />
            </div>
        </div>
    );
}