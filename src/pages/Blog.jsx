/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import BlogCard from "../components/Blog/BlogCard";
import useFetch from "../hooks/useFetch";

export default function Blog() {
  const { data, loading } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`
  );

  if (loading) {
    return <div><h2>Loading</h2></div>
  }
  return (
    <>
      <h2 className="text-4xl font-bold text-center text-indigo-800">
        Our Insight
      </h2>
      <section className="mx-auto max-w-screen-xl px-4 py-10 lg:flex  lg:items-center">
        <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-1 ">
          {data?.map(blog => (
            <BlogCard key={blog.id} blog={blog}  
            />
          ))}
        </div>
      </section>
    </>
  );
}