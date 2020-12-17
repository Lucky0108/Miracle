import React from 'react'

/**
* @author
* @function FaqGrid
**/

const FaqGrid = (props) => {
    return (
        <>
            <div className="grid">
                <div className="info">
                    <h3>
                        <span class="odometer" data-count={props.dataCount}>{props.dataCount}</span>{ props.plus ? "+" : '' }
                    </h3>
                    <p>{props.para}</p>
                </div>
            </div>
        </>
    )
}


export default FaqGrid