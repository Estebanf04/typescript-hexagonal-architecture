interface LoaderRowProps {
    loaderText: string;
    colLength: number;
}

const LoaderRow = ({ loaderText, colLength }: LoaderRowProps) => {
  return (
    <tr className="bg-slate-400/35 font-medium">
        <td colSpan={colLength} className="px-6 py-4 text-white">
            <div className="flex items-center justify-center gap-x-2">
                <span className="animate-spin inline-block w-4 h-4 border-3 border-gray-50 border-t-transparent rounded-full"></span>
                <span>{loaderText}</span>
            </div>
        </td>
    </tr>
  )
}

export default LoaderRow