function Modal({ open, onClose, children }) {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center item-center 
            transition-colors ${open ? "visible bg-gray-900 bg-opacity-80" : "hidden"}`}>
            <div onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-xl shadow transition-all max-h-[calc(100%-64px)] max-w-[1200px]
                w-[calc(100%-64px)] mx-auto my-auto flex flex-col`}>
                {children}
            </div>

        </div>
    )
}

export default Modal;