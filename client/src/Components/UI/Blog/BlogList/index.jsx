import React from 'react'

/**
* @author
* @function BlogList
**/

const BlogList = ({ blogImg, heading, date, link, author, content, category, id }) => {
    return (
        <>
            <div className="post standard-format">
                <div className="entry-media">
                    <img src={blogImg} alt={heading} />
                    <div className="cat"> {category} </div>
                </div>
                <div className="entry-meta">
                    <span>{date}</span>
                    <span>By: <a href={link}> {author}</a></span>
                </div>
                <div className="entry-details">
                    <h3> <a href={link}> {heading} </a>
                    </h3>
                    <p key={id}>{content}</p>
                    <a className="read-more" href={link}>Read Full Post</a>
                </div>
            </div>
        </>
    )
}


export default BlogList