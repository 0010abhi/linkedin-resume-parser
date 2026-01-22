import TextInput from "../app-components/TextInput";
import SectionTitle from "./SectionTitle";

export default function ResumePersonalInfo({ personalInfo }: { personalInfo: any }) {
    console.log("Personal Info:", personalInfo);
    return (
        <div className="border-b border-gray-400 pb-2 mb-2">
            <SectionTitle title="Personal Information" />
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <TextInput name="name" label="Name" value={personalInfo.name} onChange={() => { }} />
                <TextInput name="title" label="Title" value={personalInfo.title} onChange={() => { }} />
                {/* <img src="via.placeholder.com" alt="Your Photo" className="profile-pic" /> */}
            </div>
            <div className="contact-section">
                <TextInput name="email" label="Email" value={personalInfo.email} onChange={() => { }} />
                <TextInput name="phone" label="Phone" value={personalInfo.phone} onChange={() => { }} />
                <TextInput name="location" label="Location" value={personalInfo.location} onChange={() => { }} />
                <TextInput name="linkedin" label="LinkedIn" value={personalInfo.linkedin} onChange={() => { }} />
            </div>
        </div>
    )
}