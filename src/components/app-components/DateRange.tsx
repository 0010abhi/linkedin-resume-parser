
export default function DateRange({ startDate, endDate }: { startDate: string; endDate: string }) {
    return (
        <span>
            {startDate} - {endDate || 'Present'}
        </span>
    )
}