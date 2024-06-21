import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getModelCategories } from '../../store/ModelCategorySlice'
import { getModelsByCategoryID } from '../../store/ModelListSlice'

const data = {
  "model":
    [
      {
        "code": "EFL181",
      },
      {
        "code": "EFL253",
      },
      {
        "code": "CQE15S",
      },
    ]
}

function Models() {
  const [model, setModel] = useState(null)
  const [categoryID, setCategoryID] = useState(null)

  const categories = useSelector((state) => state.modelCategory)
  const modelList = useSelector((state) => state.modelList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModelCategories())
  }, [])

  useEffect(() => {
    if (categoryID) {
      dispatch(getModelsByCategoryID(categoryID))
    }
  }, [categoryID])

  return (
    <div className="main">
      {
        categories.loading ? (
          <></>
        ) : (
          <div>
            <label>{"Categorys:"}</label>
            <select name="modelCategory" id="modelCategory" onChange={(e) => setCategoryID(e.target.value)} value={categoryID==null ? '': categories.data[categoryID].categoryID}>
              <option value='' hidden>{`Select a category`}</option>
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
        categoryID == null || modelList.loading ? (
          <></>
        ) : (
          <div>
            <label>{"Model:"}</label>
            <select name="model" id="model" onChange={(e) => {setModel(e.target.value)}}>
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