
export default function DateRange({ name, label, start, end, onChange }: any) {
    return (
        <div className="sm:col-span-3">
            <label htmlFor={name} className="text-sm text-gray-600">{label}</label>
            <div className="mt-2">
                <input type="date" name={name}
                    value={start}
                    onChange={(e) => onChange(e.target.value)}
                    className="block 
                w-full rounded-md bg-white/5 
                px-3 py-1.5 
                text-base text-stone outline-1 -outline-offset-1 
                outline-2
                border-stone-800 border-2 rounded-md
                outline-white/10 
                placeholder:text-gray-500 
                focus:outline-2 focus:-outline-offset-2 
                focus:outline-indigo-500 sm:text-sm/6" />
            </div>
        </div>
    )
}