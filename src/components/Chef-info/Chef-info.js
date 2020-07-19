import React from 'react';


const ChefInfo = (props) => {
  return (
    <div className='chef-info'>
    <h1>{props.name}</h1>
    <h3>{props.accolades} * {props.location}</h3>
    </div>
  )
}

export default ChefInfo;