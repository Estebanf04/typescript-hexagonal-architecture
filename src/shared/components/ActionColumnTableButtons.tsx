interface ActionColumnTableButtonsProps {
    onEdit: () => void;
    onDelete: () => void;
}


const ActionColumnTableButtons = ({ onEdit, onDelete }: ActionColumnTableButtonsProps) => {

  return (
     <td className="px-6 py-4 space-x-2 *:cursor-pointer">
        <button 
        onClick={onEdit}
        className="bg-blue-300 border border-blue-400 text-blue-900 text-xs font-medium px-3 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
            Editar
        </button>

        <button 
        onClick={onDelete} 
        className="bg-red-300 border border-red-400 text-red-900 text-xs font-medium px-3 py-1 rounded dark:bg-red-900 dark:text-red-300">
            Eliminar
        </button>
     </td>
  )
}

export default ActionColumnTableButtons