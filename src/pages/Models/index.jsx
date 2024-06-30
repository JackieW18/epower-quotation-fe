import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getModelCategories } from '../../store/ModelCategorySlice'
import { getModelsByCategoryID } from '../../store/ModelListSlice'

function Models() {
  const [model, setModel] = useState('')
  const [categoryID, setCategoryID] = useState('')

  const categories = useSelector((state) => state.modelCategory)
  const modelList = useSelector((state) => state.modelList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModelCategories())
  }, [])

  useEffect(() => {
    if (categoryID != '') {
      dispatch(getModelsByCategoryID(categoryID))
    }
  }, [categoryID])

  return (
    <div className="mx-auto container flex flex-col items-center">
      <h2>Select Model</h2>
      {
        categories.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <label className='text-left font-bold'>{"Categorys:"}</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-[350px]" onChange={(e) => setCategoryID(e.target.value)} value={categoryID}>
              <option value={''} hidden>{`Select Category`}</option>
              {categories.data.map((category, index) => {
                return (
                  <option key={index} value={category.categoryID}>{category.categoryName}</option>
                )
              })}
            </select>
          </div>
        )
      }

      {
        categoryID == 0 || modelList.loading ? (
          <></>
        ) : (
          <div>
            <label className='text-left font-bold'>{"Model:"}</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-[350px]" onChange={(e) => { setModel(e.target.value) }} value={model}>
              <option value={''} hidden>{`Select Model`}</option>
              {
                modelList.data.map((model, index) => {
                  return (
                    <option key={index} value={model.modelCode}>{model.modelCode}</option>
                  )
                })
              }
            </select>
          </div>
        )
      }
      <div className=''>
        < Link to={`/quotation/${model}`}>
          <button className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${model === ''? 'bg-blue-400 cursor-not-allowed':'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'}`} disabled={model === ''}>
            Start
          </button>
        </Link>

        < Link to={`/`}>
          <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Back
          </button>
        </Link>
      </div>
    </div >
  )
}

export default Models;