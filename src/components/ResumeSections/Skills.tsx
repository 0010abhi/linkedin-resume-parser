import AppBadge from "../app-components/Badge";
import SectionTitle from "./SectionTitle";

export default function ResumeSkills({ skills }: { skills: string[] }) {
    return (
        <div className="skills-section">
            <SectionTitle title="Skills" />
            <div className="flex flex-row flex-wrap">
                {skills.map((skill: string, index: number) => (
                    <AppBadge key={index} text={skill} />
                ))}
            </div>
        </div>
    )
}