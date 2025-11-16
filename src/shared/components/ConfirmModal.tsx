interface ConfirmModalProps {
    message: string;
    title: string;
    cta: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal = ({ message, title, cta, onConfirm, onCancel }: ConfirmModalProps) => {

  const handleConfirmAndClose = () => {
    onConfirm();
    onCancel();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      <div 
      className="absolute inset-0 bg-black/25 backdrop-blur-[1.5px]"
      onClick={onCancel}
      />
      
      <div className="relative w-full max-w-xl">
        <div className="relative bg-white/2 backdrop-blur-2xl rounded-2xl pt-6 border border-white/15 shadow-2xl overflow-hidden">
      
            <div className="px-8">
                <h3 className="flex text-lg text-white items-center font-medium gap-1.5">
                    {title}
                </h3>
            </div>

            <div className="text-white pt-6 px-8 space-y-4">
                <p>{message}</p>
            </div>
                            
            <div className="relative mt-8 py-4 px-8 w-full flex justify-between bg-white/5 z-50">
                <button
                type="button"
                className="px-4 py-1.5 cursor-pointer font-medium rounded-md bg-white/20 hover:bg-white/30 text-white mr-2"
                onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                type="button"
                className="px-4 py-1.5 cursor-pointer font-medium rounded-md bg-slate-100 text-gray-900"
                onClick={handleConfirmAndClose}
                >
                    {cta}
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal