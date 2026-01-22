
export default function ResumePreview({ data }: { data: any }) {
    return <>
    <div className="profile-section">
                    <h1>{data.name}</h1>
                    <p className="title">{data.title}</p>
                    {/* <img src="via.placeholder.com" alt="Your Photo" className="profile-pic" /> */}
                </div>
                <div className="contact-section">
                    <h2><i className="fas fa-envelope"></i> Contact</h2>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <p>Location: {data.location}</p>
                    <p>LinkedIn: {data.linkedin}</p>
                </div>
                <div className="skills-section">
                    <h2><i className="fas fa-wrench"></i> Skills</h2>
                    <div className="flex flex-row flex-wrap">
                        {data.skills.map((skill: string, index: number) => (
                            <div key={index}>{skill}</div>
                        ))}
                    </div>

                </div>
                <section className="summary-section">
                    <h2><i className="fas fa-user-circle"></i> Professional Summary</h2>
                    <p>{data?.summary}</p>
                </section>

                <section className="experience-section">
                    <h2><i className="fas fa-briefcase"></i> Work Experience</h2>
                    {data.experience.map((job: any, index: number) => (
                        <div key={index} className="job-item">
                            <h3>{job.title}</h3>
                            <p className="company-date">{job.company} | {job.duration}</p>
                            <ul>
                                {job.responsibilities.map((resp: string, respIndex: number) => (
                                    <li key={respIndex}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="education-section">
                    <h2><i className="fas fa-graduation-cap"></i> Education</h2>
                    {data.education.map((edu: any, index: number) => (
                        <div key={index} className="education-item">
                            <h3>{edu.degree}</h3>
                            <p className="school-year">{edu.school} | {edu.year}</p>
                        </div>
                    ))}
                </section>
    </>;
}   