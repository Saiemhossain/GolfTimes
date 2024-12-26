/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


import { useEffect } from "react";
import {  CartState } from "../../context/Context";
import { useNavigate } from "react-router";



export default function PricingCard({ service }) {
 
  const { cart, setCart } = CartState();
  const navigate = useNavigate();
  

  const features = service.features.split("\n");
  // console.log(features);

  const addToCart = () => {
    setCart([ service])
    navigate('/checkout');
  }


  
  return (
    <div>
      <div class="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
        <div class="p-6 sm:px-8">
          <h2 class="text-lg font-medium text-gray-900">
            {service.package_type}
            <span class="sr-only"> </span>
          </h2>

          <p class="mt-2 text-gray-700">{service.service_name}</p>

          <p class="mt-2 sm:mt-4">
            <strong class="text-3xl font-bold text-gray-900 sm:text-4xl">
              {' '}
              {service.price}${' '}
            </strong>

            <span class="text-sm font-medium text-gray-700">/month</span>
          </p>

          <button
            class="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
           onClick={addToCart}
            
          >
            Get Started
          </button>
        </div>

        <div class="p-6 sm:px-8">
          <p class="text-lg font-medium text-gray-900 sm:text-xl">
            What&apos;s included:
          </p>

          <ul class="mt-2 space-y-2 sm:mt-4">
            <li class="flex items-center gap-1">
              <span class="text-gray-700">
                {' '}
                {features.map(feature => (
                  <li key={feature} class="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 text-indigo-700"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span class="text-gray-700"> {feature} </span>
                  </li>
                ))}{' '}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

