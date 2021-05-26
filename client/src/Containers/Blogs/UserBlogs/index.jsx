import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBlogByUser } from '../../../actions/blog.action';
import Blog from '../Blog'

/**
* @author
* @function UsserBlogsPage
**/

const UserBlogsPage = ({ match }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogByUser(match.params.userId))        
    },[dispatch, match.params.userId])

  return(
    <Blog loadAll={false} />
   )
  }


export default UserBlogsPage