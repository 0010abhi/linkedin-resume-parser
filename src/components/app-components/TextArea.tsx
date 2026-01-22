
export default function TextArea({ name, label = '', value }: { name: string; label?: string | ''; value: string }) {
    return (
        <div className="">
            <label htmlFor={name} className="text-sm text-gray-600">{label}</label>
            <div className="mt-2">
                <textarea
                    name={name}
                    value={value}
                    readOnly
                    className=" 
                w-full rounded-md bg-white/5 
                px-3 py-1.5 
                text-base text-stone outline-1 -outline-offset-1 
                outline-2
                border-stone-800 border-2 rounded-md
                outline-white/10 
                placeholder:text-gray-500 
                focus:outline-2 focus:-outline-offset-2 
                focus:outline-indigo-500 sm:text-sm/6
                h-48 resize-none"
                />
            </div>
        </div>
    )
}