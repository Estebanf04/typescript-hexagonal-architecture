interface TableStructureProps {
    children: React.ReactNode;
    columnsOptions: string[];
}

const TableStructure = ({ children, columnsOptions }: TableStructureProps) => {

  return (
        <div className="relative overflow-hidden overflow-y-auto sm:rounded-lg h-[500px] 2xl:h-[700px]">
            <table className="w-full text-sm text-center text-white dark:text-gray-400">
                <thead className="text-xs text-gray-100 uppercase bg-white/15">
                    <tr>
                        {columnsOptions.map((column) => (
                            <th key={column} scope="col" className="px-6 py-3">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>

                {children}
            </table>
        </div>
  )
}

export default TableStructure