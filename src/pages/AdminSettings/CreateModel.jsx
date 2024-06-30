import { useEffect, useState } from "react"
import Modal from "../../component/Modal"
import { useDispatch, useSelector } from "react-redux"
import { getStandardOptionTypes } from "../../store/StandardOptionTypesSlice"

function CreateModel({ openModal, onModalClose }) {
    const [modelCode, setModelCode] = useState('')
    const [modelType, setModelType] = useState('')
    const [energyType, setEnergyType] = useState(``)
    const [modelPrice, setModelPrice] = useState('')
    const [standardOptionTitles, setStandardOptionTitles] = useState([''])
    const [standardOptionValue, setStandardOptionValue] = useState([])

    const dispatch = useDispatch();

    const standardOptionTypes = useSelector(state => state.standardOptionTypes)

    useEffect(() => {
        console.log(standardOptionTypes)
        dispatch(getStandardOptionTypes())
    }, [])

    const onPriceChange = (value, setValue) => {

    }

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
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"
                            value={modelCode} onChange={(e) => setModelCode(e.target.value)} />
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Model Type</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={modelType} onChange={(e) => setModelType(e.target.value)}>
                            <option hidden value=''>Select Model Type</option>
                            <option value='Four Wheels Electric Forklift'>Four Wheels Electric Forklift</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Energy Type</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={energyType} onChange={(e) => setEnergyType(e.target.value)}>
                            <option hidden value=''>Select Energy Type</option>
                            <option value={`Electric (Lithium-ion Battery)`}>{`Electric (Lithium-ion Battery)`}</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">{`Model Price (Standard Option)`}</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"></input>
                    </div>
                </div>

                <p className="text-[24px]">Standard Option Information</p>
                <div className="flex flex-row">
                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Load Capacity (KG)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"></input>
                    </div>

                    <div className="flex flex-col w-[50%] p-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Load Center Distance (mm)</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"></input>
                    </div>
                </div>
                {
                    standardOptionTitles.map((standardOptionTitle, index) => {
                        return (
                            <div className="flex flex-row" key={index}>
                                <div className="flex flex-col w-[33%] p-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 text-left">Standard Option Name</label>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    >
                                        <option hidden value=''>Select Option Name</option>
                                        {standardOptionTypes.loading ? <></> : standardOptionTypes.data.map((standardOptionType, index) => {
                                            return (<option key={index} value={standardOptionType.standardOptionType}>{standardOptionType.standardOptionType}</option>)
                                        })}
                                    </select>
                                </div>

                                <div className="mt-auto mb-3">
                                    <button onClick={() => setStandardOptionTitles([...standardOptionTitles, ''])} type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z" clipRule="evenodd" />
                                        </svg>
                                        <span className="sr-only">Notifications</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="p-3">
                    <button onClick={() => setStandardOptionTitles([...standardOptionTitles, ''])} type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Notifications</span>
                    </button>
                </div>

            </div>
        </Modal>
    )
}

export default CreateModel