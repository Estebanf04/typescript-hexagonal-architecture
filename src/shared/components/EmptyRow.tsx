interface EmptyRowProps {
    emptyText: string;
    colLength: number;
}

const EmptyRow = ({ emptyText, colLength }: EmptyRowProps) => {

  return (
    <tr className="bg-slate-400/35 font-medium">
        <td colSpan={colLength} className="px-6 py-4 text-white whitespace-nowrap">
            {emptyText}
        </td>
    </tr>
  )
}

export default EmptyRow