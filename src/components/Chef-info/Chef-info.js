import React from 'react';
import './Chef-info.scss';


const ChefInfo = (props) => {
  let { name, accolades, location, tags} = props;

  let tagList = <div className='chef-tags'>
                  {tags.map(tag =><span className='chef-tags'>{tag}</span>)}
                </div>

  return (
    <div className='chef-info'>
    <h1>{name}</h1>
    <h3>{accolades} • {location}</h3>
    {tagList}
    </div>
  )
}

export default ChefInfo;