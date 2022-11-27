import React from "react";

const Blog = () => {
  document.title = "Blog";
  return (
    <section className='dark:bg-[#085594] dark:text-slate-200 mt-10 container mx-auto'>
      <div className=' flex flex-col justify-center px-4 py-8 md:p-8'>
        <h2 className='text-2xl font-bold sm:text-4xl uppercase text-center'>
          Blog
        </h2>
        <p className='mt-4 mb-8 dark:text-slate-200  text-center'>
          Here some answer of frequat question.
        </p>
        <div className='space-y-4'>
          <details className='w-full border rounded-lg'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
              What are the different ways to manage a state in a React
              application?
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-slate-200'>
              Managing state in your React apps isn’t as simple as using
              useState or useReducer. Not only are there are a lot of different
              kinds of state, but there often dozens of ways of managing each
              kind. Which should you choose? In this guide, we will uncover the
              several kinds of state in your React apps that you might not be
              aware of, plus how to manage them in the most effective way.
              <span className='font-medium'>
                The Four Kinds of React State to Manage When we talk about state
                in our applications
              </span>
              , it’s important to be clear about what types of state actually
              matter.
              <ul>
                <li>
                  <b>1. Local state –</b>
                  Local state is data we manage in one or another component.
                  Local state is most often managed in React using the useState
                  hook. For example, local state would be needed to show or hide
                  a modal component or to track values for a form component,
                  such as form submission, when the form is disabled and the
                  values of a form’s inputs.{" "}
                </li>
                <li>
                  <b> 2. Global state – SQL</b>
                  Global state is data we manage across multiple components.
                  Global state is necessary when we want to get and update data
                  anywhere in our app, or in multiple components at least. A
                  common example of global state is authenticated user state. If
                  a user is logged into our app, it is necessary to get and
                  change their data throughout our application.
                </li>
                <li>
                  <b>3. Server state – </b>
                  Data that comes from an external server that must be
                  integrated with our UI state. Server state is a simple
                  concept, but can be hard to manage alongside all of our local
                  and global UI state. There are several pieces of state that
                  must be managed every time you fetch or update data from an
                  external server, including loading and error state.
                  Fortunately there are tools such as SWR and React Query that
                  make managing server state much easier.{" "}
                </li>
                <li>
                  {" "}
                  <b>4.URL state – </b>
                  Data that exists on our URLs, including the pathname and query
                  parameters. URL state is often missing as a category of state,
                  but it is an important one. In many cases, a lot of major
                  parts of our application rely upon accessing URL state. Try to
                  imagine building a blog without being able to fetch a post
                  based off of its slug or id that is located in the URL! There
                  are undoubtedly more pieces of state that we could identify,
                  but these are the major categories worth focusing on for most
                  applications you build.
                </li>
              </ul>
            </p>
          </details>
          <details className='w-full border rounded-lg'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
              How does prototypical inheritance work?
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-slate-200'>
              very object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </p>
          </details>
          <details className='w-full border rounded-lg'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
              What is a unit test? Why should we write unit tests?
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-slate-200'>
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages. Unit testing is a component of test-driven
              development (TDD), a pragmatic methodology that takes a meticulous
              approach to building a product by means of continual testing and
              revision. This testing method is also the first level of software
              testing, which is performed before other testing methods such as
              integration testing. Unit tests are typically isolated to ensure a
              unit does not rely on any external code or functions. Testing can
              be done manually but is often automated.
                <strong>
                  {" "}
                  How unit tests work A unit test typically comprises of three
                  stages:
                </strong>
              {" "}
              plan, cases and scripting and the unit test itself. In the first
              step, the unit test is prepared and reviewed. The next step is for
              the test cases and scripts to be made, then the code is tested.
              Test-driven development requires that developers first write
              failing unit tests. Then they write code and refactor the
              application until the test passes. TDD typically results in an
              explicit and predictable code base.
            </p>
          </details>

          <details className='w-full border rounded-lg'>
            <summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
              React vs. Angular vs. Vue?
            </summary>
            <p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-slate-200'>
              <b>React VS Angular</b>
              If the choice you’re making is based on Angular vs React alone,
              then you’ll simply need to consider the pros and cons discussed
              for those libraries in this post. But overall, keep in mind that
              both libraries can be used for mobile and web apps, while Angular
              is generally better for more complex apps that are
              enterprise-ready. React often requires extra modules and
              components, which keeps the core library small, but means there’s
              extra work involved when incorporating outside tools. Angular, on
              the other hand, is more of a full-fledged solution that doesn’t
              require extras like React often does, though it does have a
              steeper learning curve for its core compared to React. React is
              more suitable for intermediate to advanced JavaScript developers
              who are familiar with concepts from ES6 and up, while Angular
              favors those same developers who are also familiar with
              TypeScript.

              <b>React VS Vue</b>
              The choice between React vs Vue is often debated and it’s not an
              easy one. Vue has a vibrant and ever-growing community and has
              taken over popularity vs. React in many respects. React developers
              are still churning out lots of new components and extras, so
              there’s no sign that React is on the decline either. Vue is
              generally more suited to smaller, less complex apps and is easier
              to learn from scratch compared to React. Vue can be easier to
              integrate into new or existing projects and many feel its use of
              HTML templates along with JSX is an advantage. Overall, Vue might
              be the best choice if you’re a newer developer and not as familiar
              with advanced JavaScript concepts, while React is quite well
              suited for experienced programmers and developers who have worked
              with object-oriented JavaScript, functional JavaScript, and
              similar concepts.

              <b>Angular vs Vue</b>
              In most cases, you probably wouldn’t be deciding between only
              Angular and Vue. They are vastly different libraries with very
              different feature sets and learning curves. Vue is the clear
              choice for less experienced developers, and Angular would be
              preferred for those working on larger apps. A large library like
              Angular would require more diligence in keeping up with what’s
              new, while Vue would be less demanding in this regard and the fact
              that the two most recent major releases of Vue are in separate
              repositories helps. It should also be noted that Vue was created
              by a developer who formerly worked on Angular for Google, so
              that’s another thing to keep in mind, though that wouldn’t have a
              huge impact on your decision.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blog;
