import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const Blogs = () => {
  return (
    <div>
      <Header></Header>
      <div className="m-14">
        <div>
          <h1 className="text-2xl font-bold text-red-600">
            How to improve the performance of a React Application?
          </h1>
          <p className="mt-2">
            To improve the performance of a React Application we should follow
            below points:
            <li>Using Immutable Data Structures</li>
            <li>Using Function/Stateless Components and React.PureComponent</li>
            <li>Dependency optimization</li>
            <li>
              Use "React.Fragments" to Avoid Additional HTML Element Wrappers
            </li>
            <li> Avoid Inline Function Definition in the Render Function.</li>
            <li> Avoiding Props in Initial States</li>
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p className="mt-2">
            There are four main types of state you need to properly manage in
            your React apps:
          </p>
          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
          <p className="mt-2">
            Local state: Local state is data we manage in one or another
            component.Local state is most often managed in React using the
            useState hook.
          </p>
          <p>
            Global state: Global state is data we manage across multiple
            components. Global state is necessary when we want to get and update
            data anywhere in our app, or in multiple components at least.
          </p>
          <p>
            Server state: Data that comes from an external server that must be
            integrated with our UI state. Server state is a simple concept, but
            can be hard to manage alongside all of our local and global UI
            state.
          </p>
          <p>
            URL state: Data that exists on our URLs, including the pathname and
            query parameters. URL state is often missing as a category of state,
            but it is an important one.
          </p>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            How does prototypical inheritance work?
          </h1>
          <p className="mt-2">
            Prototypical inheritance refers to the ability to access object
            properties from another object. We use a JavaScript prototype to add
            new properties and methods to an existing object constructor. We can
            then essentially tell our JS code to inherit properties from a
            prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function. Prototypal Inheritance can be used not
            only to inherit properties from other objects but methods as well.
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            Why you do not set the state directly in React. For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts
          </h1>
          <p className="mt-2">
            <h1>
              One should never set the state directly because of the following
              reasons:
            </h1>
            <li>
              If we set it directly, calling the setState() afterward it can not
              change its value as we want
            </li>
            <li>We will lose control of the state across all components.</li>
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            What is a unit test? Why should write unit tests?
          </h1>
          <p className="mt-2">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staffs.
          </p>
          <p>
            One of the benefits of unit tests is that they isolate a function,
            class or method and only test that piece of code. Higher quality
            individual components create overall system resiliency. Thus, the
            result is reliable code. Unit tests also change the nature of the
            debugging process.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
