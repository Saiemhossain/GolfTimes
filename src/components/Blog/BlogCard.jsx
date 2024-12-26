/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {Link, NavLink} from 'react-router-dom'
import blogImg from '../../assets/blog.jpg'
export default function BlogCard({blog}) {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt=""
        src={`${import.meta.env.VITE_APP_URL}${blog.image[0].url}`}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {' '}
          10th Oct 2022{' '}
        </time>

        <NavLink>
          <h3 className="mt-0.5 text-lg text-gray-900">{blog.title}</h3>
        </NavLink>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {blog.excerpt.slice(0, 90)}...
        </p>

        <Link to={`/blog/${blog.documentId}`}>
          <button className="bg-indigo-600 text-white py-2 px-3 mt-3 duration-500 hover:bg-black">
            Read More
          </button>{' '}
        </Link>
      </div>
    </article>
  );
}
