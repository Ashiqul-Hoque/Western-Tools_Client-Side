import React from "react";
import CountUp from "react-countup";
import { IoIosPeople } from "react-icons/io";
import { GoTools } from "react-icons/go";
import { BiDollar } from "react-icons/bi";

const BusinessSummary = () => {
  return (
    <div className="pb-10 pt-6 px-10 bg-indigo-100">
      <h1 className="text-3xl pb-5 text-red-600 text-center">
        Business Summary
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div class=" shadow-2xl py-6 rounded-3xl bg-gray-100">
          <IoIosPeople className="text-8xl text-red-600 block mx-auto"></IoIosPeople>

          <div className="flex justify-center">
            <CountUp
              className="text-3xl text-red-600"
              start={0}
              end={10000}
              duration={2}
              enableScrollSpy
            ></CountUp>
            <p className="text-3xl text-red-600">+</p>
          </div>

          <h2 class="text-2xl text-center">Happy Customers</h2>
        </div>
        <div class=" shadow-2xl py-6 rounded-3xl bg-gray-100">
          <GoTools className="text-6xl text-red-600 block mx-auto my-5"></GoTools>

          <div className="flex justify-center">
            <CountUp
              className="text-3xl text-red-600"
              start={0}
              end={13000}
              duration={2}
              enableScrollSpy
            ></CountUp>
            <p className="text-3xl text-red-600">+</p>
          </div>

          <h2 class="text-2xl text-center">Tools Sold</h2>
        </div>
        <div class=" shadow-2xl py-6 rounded-3xl bg-gray-100">
          <BiDollar className="text-7xl my-4 text-red-600 block mx-auto"></BiDollar>

          <div className="flex justify-center">
            <CountUp
              className="text-3xl text-red-600"
              start={0}
              end={1400}
              duration={2}
              enableScrollSpy
            ></CountUp>
            <p className="text-3xl text-red-600">K+</p>
          </div>

          <h2 class="text-2xl text-center">Revenue</h2>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
