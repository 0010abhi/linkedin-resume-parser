
export default function ResumeWorkExperience({ workExperience }: { workExperience: any[] }) {
    return (
        <section className="experience-section">
            <label>Work Experience</label>
            {workExperience.map((job: any, index: number) => (
                <div key={index} className="job-item">
                    <div>
                        <label>Title</label>
                        <input type="text" value={job.title} />
                    </div>
                    <div>
                        <label>Company</label>
                        <input type="text" value={job.company} />
                    </div>
                    <div>
                        <label>Duration</label>
                        <input type="date" value={job.duration} />
                        <input type="date" value={job.duration} />
                    </div>
                    <div>
                        <textarea value={job.responsibilities} />
                    </div>

                </div>
            ))}
        </section>
    )
}