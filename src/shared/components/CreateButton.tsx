interface CreateButtonProps {
    onClick: () => void;
    label: string;
}

const CreateButton = ({ onClick, label }: CreateButtonProps) => {

  return (
    <button 
    onClick={onClick} 
    className="cursor-pointer uppercase text-sm bg-green-300 text-green-900 border border-green-300 font-medium px-4 py-1.5 rounded"
    >
        {label}
    </button>
  )
}

export default CreateButton