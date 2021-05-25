/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

/**
* @author
* @function BlogCategories
**/

const BlogCategories = ({ onClick, title }) => {
  return(
    <>
    <li>
      <a onClick={onClick}> {title} </a>
    </li>
    </>
   )
  }


export default BlogCategories