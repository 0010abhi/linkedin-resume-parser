import TextInput from "../app/TextInput";

export default function ResumePersonalInfo({ personalInfo }: { personalInfo: any }) {
    return (
        <>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div>
                    <TextInput name="name" label="Name" value={personalInfo.name} onChange={() => { }} />
                </div>
                <div>
                    <TextInput name="title" label="Title" value={personalInfo.title} onChange={() => { }} />
                </div>

                {/* <img src="via.placeholder.com" alt="Your Photo" className="profile-pic" /> */}
            </div>
            <div className="contact-section">
                <div>
                    <label>Email</label>
                    <input type="email" value={personalInfo.email} />
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" value={personalInfo.phone} />
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" value={personalInfo.location} />
                </div>
                <div>
                    <label>LinkedIn</label>
                    <input type="text" value={personalInfo.linkedin} />
                </div>
            </div>
        </>
    )
}