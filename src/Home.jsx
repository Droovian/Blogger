import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  
  const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  return (
    <div className=''>
    { error && <div>{error}</div>}
    { isPending && <div className='flex justify-center items-center pb-5'>Loading...</div>}
    { blogs && <BlogList blogs={blogs} title="All blogs"/>}
    
    </div>
  )
}

export default Home;
