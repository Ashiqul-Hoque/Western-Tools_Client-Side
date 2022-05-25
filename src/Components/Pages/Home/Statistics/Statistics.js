import React from "react";

const Statistics = () => {
  return (
    <div className="pb-10 pt-6 mx-5">
      <h1 className="text-3xl pb-5 text-red-600 text-center">
        Product Statistics
      </h1>
      <div className="flex justify-center">
        <div className=" w-full lg:w-1/2">
          <div className="w-full mb-6">
            <div>
              <h1 className="text-xl mr-4 mb-2">Customer Satisfaction</h1>
            </div>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 m-0">
              <div class="bg-red-600 text-xs text-white text-center p-0.5  rounded-full w-5/6 font-bold">
                85%
              </div>
            </div>
          </div>
          <div className="w-full mb-6">
            <div>
              <h1 className="text-xl mr-4 mb-2">Product Quality</h1>
            </div>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 m-0">
              <div class="bg-red-600 text-xs text-white text-center p-0.5  rounded-full w-11/12 font-bold">
                90%
              </div>
            </div>
          </div>
          <div className="w-full mb-6">
            <div>
              <h1 className="text-xl mr-4 mb-2">Product Durability</h1>
            </div>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 m-0">
              <div class="bg-red-600 text-xs text-white text-center p-0.5  rounded-full w-9/12 font-bold">
                75%
              </div>
            </div>
          </div>
          <div className="w-full mb-6">
            <div>
              <h1 className="text-xl mr-4 mb-2">Customer Support</h1>
            </div>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 m-0">
              <div class="bg-red-600 text-xs text-white text-center p-0.5  rounded-full w-5/6 font-bold">
                85%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
