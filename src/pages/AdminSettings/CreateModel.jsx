import { useState } from "react"
import Modal from "../../component/Modal"

function CreateModel({ openModal, onModalClose }) {
    const [energyType, setEnergyType] = useState(`Electric (Lithium-ion Battery)`)
    const [standardConfiguration, setStandardConfiguration] = useState([])
    return (
        <Modal open={openModal} onClose={() => onModalClose()}>
            <div className='bg-[#E8EBEF] flex justify-center py-2 px-4 flex-1 leading-[1.6] text-[1.25rem]'>
                <div className='flex flex-row justify-between flex-1'>
                    <div className='flex flex-row gap-2 items-center'>
                    </div>
                    <button className="h-14 w-14 border-1" onClick={() => onModalClose()}>X</button>
                </div>
            </div>
            <div className='overflow-auto py-4 px-6'>
                <p className="text-[32px] font-bold">Create Model</p>

                <p className="text-[24px]">Basic Information</p>

                <div className="flex flex-row flex-wrap">
                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Model Code</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"></input>
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Model Type</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Four Wheels Electric Forklift</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Load Capacity (KG)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"></input>
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Load Center Distance (mm)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"></input>
                    </div>

                    
                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Energy Type</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={energyType} onChange={(e) => setEnergyType(e.target.value)}>
                            <option value={`Electric (Lithium-ion Battery)`}>{`Electric (Lithium-ion Battery)`}</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">{`Model Price (Standard Option)`}</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"></input>
                    </div>
                </div>

                <p className="text-[24px]">Standard Option Information</p>
                <div>
                    
                </div>
            </div>
        </Modal>
    )
}

export default CreateModel