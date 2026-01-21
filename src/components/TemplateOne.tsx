import { Operations } from "@google/genai";

export default function TemplateOne({ data }: any) {
    console.log("Data in TemplateOne:", data);

    return (
        <div className="grid grid-cols-2 gap-4 m-[20px]">
            <div className="border p-[15px]">
                <div className="profile-section">
                    <div>
                        <label> Name</label>
                        <input type="text" value={data?.data?.name} />
                    </div>
                    <div>
                        <label> Title</label>
                        <input type="text" value={data?.data?.title} />
                    </div>

                    {/* <img src="via.placeholder.com" alt="Your Photo" className="profile-pic" /> */}
                </div>
                <div className="contact-section">
                    <div>
                        <label>Email</label>
                        <input type="email" value={data?.data?.email} />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" value={data?.data?.phone} />
                    </div>
                    <div>
                        <label>Location</label>
                        <input type="text" value={data?.data?.location} />
                    </div>
                    <div>
                        <label>LinkedIn</label>
                        <input type="text" value={data?.data?.linkedin} />
                    </div>
                </div>
                <div className="skills-section">
                    <label> Skills</label>
                    <div className="flex flex-row flex-wrap">
                        {/* {data?.data?.skills.map((skill: string, index: number) => ( */}
                        <select multiple value={data?.data?.skills}>
                            {data?.data?.skills.map((skill: string, index: number) => (
                                <option key={index} value={skill}>{skill}</option>
                            ))}
                        </select>
                        {/* ))} */}
                    </div>

                </div>
                <section className="summary-section">
                    <label>Professional Summary</label>
                    <textarea value={data?.summary} />
                </section>

                <section className="experience-section">
                    <label>Work Experience</label>
                    {data?.data?.experience.map((job: any, index: number) => (
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

                            <ul>
                                {job.responsibilities?.map((resp: string, respIndex: number) => (
                                    <textarea key={respIndex} value={resp} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

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
                <div className="profile-section">
                    <h1>{data?.data?.name}</h1>
                    <p className="title">{data?.data?.title}</p>
                    {/* <img src="via.placeholder.com" alt="Your Photo" className="profile-pic" /> */}
                </div>
                <div className="contact-section">
                    <h2><i className="fas fa-envelope"></i> Contact</h2>
                    <p>Email: {data?.data?.email}</p>
                    <p>Phone: {data?.data?.phone}</p>
                    <p>Location: {data?.data?.location}</p>
                    <p>LinkedIn: {data?.data?.linkedin}</p>
                </div>
                <div className="skills-section">
                    <h2><i className="fas fa-wrench"></i> Skills</h2>
                    <div className="flex flex-row flex-wrap">
                        {data?.data?.skills.map((skill: string, index: number) => (
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
                    {data?.data?.experience.map((job: any, index: number) => (
                        <div key={index} className="job-item">
                            <h3>{job.title}</h3>
                            <p className="company-date">{job.company} | {job.duration}</p>
                            <ul>
                                {job.responsibilities?.map((resp: string, respIndex: number) => (
                                    <li key={respIndex}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                <section className="education-section">
                    <h2><i className="fas fa-graduation-cap"></i> Education</h2>
                    {data?.data?.education.map((edu: any, index: number) => (
                        <div key={index} className="education-item">
                            <h3>{edu.degree}</h3>
                            <p className="school-year">{edu.school} | {edu.year}</p>
                        </div>
                    ))}
                </section>
            </div>

        </div>
    );
}