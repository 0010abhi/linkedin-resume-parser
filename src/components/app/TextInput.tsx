
export default function TextInput({ name, label, value, onChange }: any) {
    return (
        <div className="sm:col-span-3">
            <label htmlFor={name} className="block text-sm/6 font-medium text-white">{label}</label>
            <div className="mt-2">
                <input type="text" name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="block 
                w-full rounded-md bg-white/5 
                px-3 py-1.5 
                text-base text-white outline-1 -outline-offset-1 outline-white/10 
                placeholder:text-gray-500 
                focus:outline-2 focus:-outline-offset-2 
                focus:outline-indigo-500 sm:text-sm/6" />
            </div>
        </div>
    )
}