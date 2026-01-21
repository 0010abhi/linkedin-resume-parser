import fileToGenerativePart from "../utitlity/fileToGenerativePart";

export default function ParseLinkedInResume({ setFileData }: { setFileData: (data: any) => void }) {

    return (
        <div className="border w-full p-[15px]">
            <div className="text-3xl font-bold text-blue-600">
                Parse Linkedin Resume
            </div>
            <input type="file" className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100"
                onChange={async (e) => {
                    const file = e.target.files?.[0];
                    const data = await fileToGenerativePart(file)
                    setFileData(data.inlineData.data);
                }}
            />
        </div>
    );
}