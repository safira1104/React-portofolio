import { List } from '@mui/material'
import React, {useState} from 'react'
import { portfolio } from '../common/data/dummydata'

export const Portofolio = () => {
  const [list, setList] = useState(portfolio)
  return (
    <>
     <article>
      <div className="container">
        <div className="catButton">text</div>
        </div>
      <div className="content grid3">
        {list.map((items) => (
          <div className="box">
            <div className="img">
              <img src={items.cover} alt="" />
            </div>
          </div>
        ))}
      </div>
     </article>
    </>
  )
}
