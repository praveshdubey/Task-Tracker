import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const HEader = ({title, onAdd, showAdd} ) => {
  return (
    <header className='header'>
        <h1 >{title}</h1>
        <Button  className="btn-w" color={showAdd ? 'white':'#136E36' } 
        text={showAdd ? 'Close':'Close'} 
        onClick={onAdd}
         />
    </header>
  )
}
HEader.defaultProps={
    title:'Task Tracker ',
}



HEader.propType={
    title: PropTypes.string.isRequired,
}

// const headingStyle={
//     backgroundColor: '#FD8F86',
//     color: 'white',
//     padding: '10px',
//     display:"flex",
//     justifyContent: 'center',
  

// }
export default HEader