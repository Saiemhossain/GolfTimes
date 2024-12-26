/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Loader from "../components/Loader";
import PricingCard from "../components/Service/PricingCard";
import useFetch from "../hooks/useFetch";

/* eslint-disable react/no-unknown-property */
export default function Service() {

 const { data:services, loading } = useFetch(
     `${import.meta.env.VITE_APP_URL}/api/services?populate=*`
  );
  // console.log(services);
  if (loading) {
    return <Loader/>
  }
  return (
    <>
      <header className="h-[300px] text-center flex items-center justify-center bg-indigo-100">
        <h2 className="text-indigo-500 text-3xl font-bold mt-4">
          Explore Services
        </h2>
      </header>
      <div class="max-w-[1170px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="grid grid-cols-1 gap-4  sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          {services ? (
            services.map(service => (
              <PricingCard key={service.id} service={service} />
            ))
          ) : (
            <h2 className=" text-indigo-700 text-3xl font-bold ">
              {' '}
              No services available{' '}
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
