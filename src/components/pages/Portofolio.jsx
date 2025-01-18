import { List } from '@mui/material';
import React, {useState} from 'react';
import { portfolio } from '../common/data/dummydata';
import Visibility from '@mui/icons-material/Visibility';
import { Heading } from '../common/Heading';

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portofolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((items) => items.category === category)
    setLists(newItems)

    if(category === "all"){
      setLists(portfolio)
    }
  }
  return (
    <>
     <article>
        <div className="container">
            <Heading title = "Portofolio" />
          <div className="catButton">
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className="content grid3">
            {list.map((items) => (
              <div className="box"  data-aos='zoom-out-down'>
                <div className="img">
                  <img src={items.cover} alt='' />
                </div>
                <div className="overlay">
                  <h3>{items.title}</h3>
                  <span>{items.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
