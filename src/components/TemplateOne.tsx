import React from "react";
import ResumeSkills from "./ResumeSections/Skills";
import ResumePersonalInfo from "./ResumeSections/PersonalInfo";
import ResumeWorkExperience from "./ResumeSections/WorkExperience";
import ResumePreview from "./ResumeSections/ResumePreview";

export default function TemplateOne({ data }: any) {
    console.log("Data in TemplateOne:", data);

    return (
        <div className="grid grid-cols-2 gap-4 m-[20px]">
            <div className="border p-[15px]">
                <ResumePersonalInfo personalInfo={data?.data} />
                <ResumeSkills skills={data?.data?.skills} />
                <section className="summary-section">
                    <label>Professional Summary</label>
                    <textarea value={data?.summary} />
                </section>

                <ResumeWorkExperience workExperience={data?.data?.experience} />

                <section className="education-section">
                    <h2><i className="fas fa-graduation-cap"></i> Education</h2>
                    {data?.data?.education.map((edu: any, index: number) => (
                        <div key={index} className="education-item">
                            <div>
                                <label>Degree</label>
                                <input type="text" value={edu.degree} />
                            </div>
                            <div>
                                <label>School</label>
                                <input type="text" value={edu.school} />
                            </div>
                            <div>
                                <label>Year</label>
                                <input type="date" value={edu.year} />
                            </div>

                        </div>
                    ))}
                </section>
            </div>
            <div className="border p-[15px]">
                <ResumePreview data={data?.data} />
            </div>
        </div>
    );
}