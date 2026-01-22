import DateRange from "../app-components/DateRange"
import TextArea from "../app-components/TextArea"
import TextInput from "../app-components/TextInput"
import SectionTitle from "./SectionTitle"

export default function ResumeWorkExperience({ workExperience }: { workExperience: any[] }) {
    return (
        <div className="flex flex-col border-b border-gray-400 pb-2 mb-2">
            <SectionTitle title="Work Experience" />
            {workExperience.map((job: any, index: number) => (
                <div key={index} className="flex flex-col mb-2">
                    <TextInput name="title" label="Title" value={job.title} onChange={() => { }} />
                    <TextInput name="company" label="Company" value={job.company} onChange={() => { }} />
                    <DateRange name="duration" start={job.start} end={job.endDate} onChange={() => { }} />
                    <TextArea name="responsibilities" label="Responsibilities" value={job.responsibilities} onChange={() => { }} />
                </div>
            ))}
        </div>
    )
}