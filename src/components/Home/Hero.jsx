/* eslint-disable react/no-unknown-property */


export default function Hero() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to GolfTimes
              <strong className="font-bold text-indigo-700 sm:block mt-3">
                {' '}
                &quot; where every swing tells a story &quot;
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Your ultimate destination for golfing equipment, tips, and
              community. Perfect your game with GolfTime today!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
