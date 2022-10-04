import React from "react";

const LandingPageAboutUs = () => {
  return (
    <section
      className="bg-white dark:bg-ligthGreen h-full overflow-y-hidden"
      id="about-us"
    >
      <div className="py-20 px-20 mx-auto max-w-screen-xl">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-whiteLike">
          About Us
        </h1>
      </div>
      <div className="flex">
        <p className="mb-8 text-lg font-normal text-darkGreen lg:text-xl sm:px-16 xl:px-48">
          We are a bunch of students who are building a platform codeAck, for
          making the procedure of taking online coding assesment as easy as
          possible
        </p>
      </div>
    </section>
  );
};

export default LandingPageAboutUs;
