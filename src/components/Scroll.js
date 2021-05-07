import React from 'react'

const Scroll = (props) => {
    return (
        <div className='overflow-y-auto b--black pa2' style={{height:'450px'}}>
            {
                props.children
            }
        </div>
    )
}
export default Scroll;