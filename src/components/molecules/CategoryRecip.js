import React from 'react'
import MyButton from '../atoms/MyButton'

const CategoryRecip = ()=> {
    return(
        <div className="wrapperModalCategory">
            <MyButton title="Lanisa"/>
            <MyButton title="Yatim Piatu" active/>
            <MyButton title="Duafa" />
            <MyButton title="Pangangguran" />
            <MyButton title="Janda" />
            <MyButton title="Duda" />
            <MyButton title="Dirumahkan" />
            <MyButton title="Fakir Miskin" />
        </div>
    )
}

export default CategoryRecip