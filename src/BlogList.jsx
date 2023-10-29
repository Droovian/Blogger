import React from 'react'
import { Link } from 'react-router-dom';

const BlogList = ( {blogs, title} ) => {

  return (
    <div className="mx-auto container w-1/2 p-5">
    <h2 className='text-bold text-xl text-left'>{title}</h2>
      {blogs.map((blogs) => (
        <div className='mt-3 justify-center items-center h-32 p-5 hover:shadow-lg hover:cursor-pointer' key={blogs.id}>
          <Link to={`/blogs/${blogs.id}`}>
          <h2 className='text-blue-500'>{blogs.title}</h2>
          <p className='text-sm font-light'>Written by {blogs.author}</p>
          </Link>
        </div>

      ))}
    </div>
  )
}

export default BlogList
