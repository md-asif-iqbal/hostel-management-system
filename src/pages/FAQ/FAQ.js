import React from 'react';

const FAQ = () => {
    return (
        <div className="space-y-4 lg:w-1/2 w-full mx-auto my-8 overflow-x-hidden sm:overflow-x-hidden">
      <h2
        data-aos="zoom-in"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="1400"
        className='text-3xl font-bold mb-2 text-center text-secondary'>Frequently Asked Questions</h2>
      <details
        data-aos="fade-right"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="1900"
        className="p-6 border-l-4 border-red-500 bg-primary-content group" open>
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-medium text-secondary">
          What is your cancellation and refund policy?
          </h5>
          <span className="flex-shrink-0 ml-1.5 p-1.5 text-secondary bg-primary-content rounded-full sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor" >
              <path

                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p
          className="mt-4 leading-relaxed text-secondary">
          Cancellation and refund policies differ according to the payment term. If you purchased your subscription it will add to your monthly subscription. Monthly subscription : When cancelling a monthly subscription, all future charges associated with future months of your subscription will be cancelled. You may notify us of your intent to cancel at any time; your cancellation will become effective at the end of your current monthly billing period. You will receive a refund; however your subscription access and/or delivery and accompanying subscriber benefits will continue for the remainder of the current monthly billing period.
        </p>
      </details>
      <details
        data-aos="fade-left"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="1900"
        className="p-6 border-l-4 border-red-500 bg-primary-content group">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-medium text-secondary">
          How do you keep payment on track?
          </h5>

          <span
            className="flex-shrink-0 ml-1.5 p-1.5 text-secondary bg-primary-content rounded-full sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-secondary">
        Typically done by steady checking and upgrading spreadsheets, your payment will add in your UCAM payment sheet with your monthly charge.
        </p>
      </details>

      <details
        data-aos="fade-right"
        data-aos-easing="gradient(0,0,1200)"
        data-aos-duration="1900"
        className="p-6 border-l-4 border-red-500 bg-primary-content group">
        <summary className="flex items-center justify-between cursor-pointer">
          <h5 className="text-lg font-medium text-secondary">
          Can I add extra meal for guests or cancel my meal for upcoming days? 
          </h5>

          <span
            className="flex-shrink-0 ml-1.5 p-1.5 text-secondary bg-primary-content rounded-full sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-secondary">
        Yes, you can add any meal for the upcoming days. It will be cost extra charges. And if any subscriber want to cancel their meal you should be notify us one day before by cancelling the you meal!!
        </p>
      </details>

    </div>
    );
};

export default FAQ;