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
    if(categoryID != ''){
      dispatch(getModelsByCategoryID(categoryID))
    }
  }, [categoryID])

  return (
    <div className="main">
      {
        categories.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <label>{"Categorys:"}</label>
            <select name="modelCategory" id="modelCategory" onChange={(e) => setCategoryID(e.target.value)} value={categoryID}>
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
            <label>{"Model:"}</label>
            <select name="model" id="model" onChange={(e) => { setModel(e.target.value) }} value={model}>
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
      < Link to={`/quotation/${model}`}>
        <button>
          Start
        </button>
      </Link>
    </div >
  )
}

export default Models;