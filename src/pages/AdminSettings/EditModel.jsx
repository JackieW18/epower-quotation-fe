import Modal from "../../component/Modal"

function EditModel({ openModal, onModalClose }) {
    return (
        <Modal open={openModal} onClose={() => onModalClose()}>
            <div className='bg-[#E8EBEF] flex justify-center py-2 px-4 flex-1 leading-[1.6] text-[1.25rem]'>
                <div className='flex flex-row justify-between flex-1'>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='text-[0.75rem]'>* Use A4 paper size for printing</span>
                    </div>
                    <button className="h-14 w-14 border-1" onClick={() => onModalClose()}>X</button>
                </div>
            </div>
        </Modal>
    )
}

export default EditModel