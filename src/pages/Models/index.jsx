import { useState } from 'react'
import { Link } from 'react-router-dom'

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
  const [model, setModel] = useState(data.model[0].code)
  return (
    <div className="main">
      <div>
        <label>{"Model:"}</label>
        <select name="model" id="model" onChange={(event) => setModel(event.target.value)}>
          {

            data.model.map((model, index) => {
              return (
                <option key={index} value={model.code}>{model.code}</option>
              )
            })
          }
        </select>
      </div>
      <Link to={`/Models/${model}`}>
        <button>
          Start
        </button>
      </Link>
    </div>
  )
}

export default Models;