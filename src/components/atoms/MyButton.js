import React from 'react'

const MyButton = ({title, active, fullWidth, onClick})=> {
    return(
        <button onClick={onClick} className={active ? 'labelCategory labelCategoryActive' : 'labelCategory'} style={{width: fullWidth ? '100%' : null}}>
            <span>{title}</span>
        </button>
    )
}

export default MyButton

