import ResumePreviewTwo from "./ResumeSections/ResumePreviewTwo";

export default function TemplateTwo({ data }: any) {
    console.log("Data in TemplateTwo:", data);

    return (
        <div className="grid m-[20px]">
            <ResumePreviewTwo data={data?.data} />
        </div>
    );
}