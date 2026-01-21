import AppBadge from "../app/Badge";

export default function ResumeSkills({ skills }: { skills: string[] }) {
    return (
        <div className="skills-section">
            <label> Skills</label>
            <div className="flex flex-row flex-wrap">
                {skills.map((skill: string, index: number) => (
                    <AppBadge key={index} text={skill} />
                ))}
            </div>
        </div>
    )
}