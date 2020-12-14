import React from 'react'

/**
* @author
* @function TeamGrid
**/

const TeamGrid = (props) => {
    return (
        <>
            <div className="grid">
                <div className="img-holder">
                    <img src={props.imgSrc} alt={props.name} />
                </div>
                <div className="details">
                    <h4>{props.name}</h4>
                    <p>{props.desig}</p>
                    <ul className="clearfix">
                        <li><a href={props.instaLink}><i className="fa fa-instagram" aria-hidden="true" /> </a> </li>
                        <li><a href={props.facebookLink}><i className="fa fa-facebook" aria-hidden="true" /> </a> </li>
                        <li><a href={props.twitterLink}><i className="fa fa-twitter" aria-hidden="true" /> </a> </li>
                        <li><a href={props.linkedinLink}><i className="fa fa-linkedin" aria-hidden="true" /> </a> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default TeamGrid