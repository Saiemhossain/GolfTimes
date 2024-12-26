/* eslint-disable react/jsx-no-undef */
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import {
  BlocksRenderer
} from '@strapi/blocks-react-renderer';
import Loader from '../Loader';



export default function SingleBlogPage() {
  const { id } = useParams(); 
  console.log('Fetched ID:', id);

  const {
    data: blog,
    loading,
    error,
  } = useFetch(`${import.meta.env.VITE_APP_URL}/api/blogs/${id}?populate=*`);

  if (loading) {
    return (
   <Loader />
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-center text-2xl text-indigo-700">Something went wrong</h2>
      </div>
    );
  }

  console.log('Fetched Blog Data:', blog); 

  return (
    <div>
      {blog && (
        <div className="py-40 mx-auto max-w-2xl">
          <p className="py-2 px-4 mx-4 bg-indigo-100 text-indigo-600  inline-block mb-3 ">
            {' '}
            {blog.category}{' '}
          </p>
          <h2 className="text-center text-2xl">{blog.title}</h2>
          <p className="text-center">{blog.excerpt}</p>

          <img
            src={`${import.meta.env.VITE_APP_URL}${
              blog.image[0].formats.thumbnail.url
            }`}
            className="mx-auto mt-5 w-[360px] px-2 sm:px-4"
            alt={blog.title}
          />
          <article className='prose mx-auto w-full'>
            <BlocksRenderer content={blog.description} /> 
          </article>
             
          {/* <div>
            {blog.description.map((desc, index) => (
              <p key={index}>{desc.text}</p>
            ))}
          </div>
          {blog.image && blog.image.length > 0 && (
            <img src={blog.image[0].url} alt={blog.title} />
          )} */}
        </div>
      )}
    </div>
  );
}

