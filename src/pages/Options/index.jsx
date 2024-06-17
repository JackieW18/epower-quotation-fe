import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setInformationState } from '../../store/informationSlice';
import { getModelByCode, changeSelection } from '../../store/modelSlice';
import QuotationModal from '../../component/QuotationModal';


function Options() {
  const [openModal, setOpenModal] = useState(false);

  const { modelCode } = useParams()

  const information = useSelector((state) => state.information);
  const model = useSelector((state) => state.model);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModelByCode(modelCode))
  }, []);

  const inputComponent = (k) => {
    return (
      <div className="flex flex-col w-[50%] p-3" key={k}>
        <label className="block mb-2 text-sm font-medium text-gray-900 text-left">{`${information.data[k].field}:`}</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          type='text' value={information.data[k].value} onChange={(e) => dispatch(setInformationState({ key: k, value: e.target.value }))} />
      </div>
    )
  }

  const selectionComponent = (options, optionsIndex) => {
    const optionsList = options.choices
    return (
      <div className="flex items-center justify-center w-[50%] p-1" key={optionsIndex}>
        <div className='min-w-[200px]'>
          <label>{`${options.name}:`}</label>
        </div>
        {
          optionsList.length == 1
            ?
            (
              <span>{optionsList[0].description}</span>
            )
            :
            (
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-[350px]"
                onChange={(e)=>dispatch(changeSelection({optionsIndex, index: parseInt(e.target.value)}))}>

                {optionsList.map((option, index) => {
                  return (
                    <option key={index} value={index}>{option.description}</option>
                  )
                })}
              </select>
            )
        }
      </div>
    )
  }

  const onModalClose = () => {
    setOpenModal(false)
  }

  if (model.loading) {
    return (
      <div className='h-[100vh] flex items-center'><h1 className='mx-auto'>Loading...</h1></div>
    )
  }

  return (
    <>
      <div className="mx-auto text-center container">

        <h2 className='py-3'>{modelCode}</h2>
        <h3 className='text-3xl'>{`Information`}</h3>
        <div className='flex flex-wrap w-full'>
          {
            Object.keys(information.data).map((k) => {
              return (
                inputComponent(k)
              )
            })
          }
        </div>

        <h3>{`1111${model.data.options[0].choices.selected}`}</h3>

        <h3 className='text-3xl'>{`Model options`}</h3>
        <div className='flex flex-wrap w-full py-4'>
          {
            model.data.options.map((options, optionsIndex) => {
              return (
                selectionComponent(options, optionsIndex)
              )
            })
          }
        </div>
        <button className="bg-black text-white" onClick={() => setOpenModal(true)}>{`Generate`}</button>

        {/* <div>
        <label className='px-2'>{"Mast:"}</label>
        {selectionComponent("mast", options.mast, setMast)}
      </div>

      <div>
        <label className='px-2'>{"Battery:"}</label>
        {selectionComponent("battery", options.battery, setBattery)}
      </div>

      <div>
        <label className='px-2'>{"Charger:"}</label>
        {selectionComponent("charger", options.charger, setCharger)}
      </div>

      <div>
        <label className='px-2'>{"Side Shift:"}</label>
        {selectionComponent("sideShift", options.sideShift, setSideShift)}
      </div>

      <div>
        <label className='px-2'>{"Tyre:"}</label>
        {selectionComponent("tyre", options.tyres, setTyre)}
      </div> */}

        <QuotationModal openModal={openModal} onModalClose={onModalClose} />

      </div>

    </>
  )
}

export default Options
