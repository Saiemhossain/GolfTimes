/* eslint-disable react/no-unknown-property */
import banner from '../assets/page-banner.png'
export default function About() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={banner}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">About GolfTime</h2>

              <p className="mt-4 text-gray-600">
                At GolfTime, we bring the passion for golf to life. Whether
                you're a seasoned player or just starting, we provide top-notch
                equipment, expert advice, and connections to the best golf
                courses. GolfTime is more than a brand – it’s a community of
                enthusiasts committed to elevating your game.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
