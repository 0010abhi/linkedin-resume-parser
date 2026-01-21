export default function AppBadge({ text }: { text: string }) {
    return (
        <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
            {text}
        </span>
    )
}