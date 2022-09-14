import React from "react";

const AllRoomDetails = () => {
  return (
    <div>
      <section>
        <div class="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
            <div class="lg:sticky lg:top-4">
              <details
                open
                class="overflow-hidden border border-gray-200 rounded"
              >
                <summary class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                  <span class="text-sm font-medium text-gray-100">Toggle Filters</span>

                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </summary>

                <form action="" class="border-t border-gray-200  lg:border-t-0">
                  <fieldset>
                    <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                      Type
                    </legend>

                    <div class="px-5 py-6 space-y-2 text-gray-100">
                      <div class="flex items-center">
                        <input
                          id="single"
                          type="checkbox"
                          name="type[Single]"
                          class="w-5 h-5 border-gray-300 rounded"
                        />

                        <label for="single" class="ml-3 text-sm font-medium">
                          Single
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          id="double"
                          type="checkbox"
                          name="type[double]"
                          class="w-5 h-5 border-gray-300 rounded"
                        />

                        <label for="double" class="ml-3 text-sm font-medium">
                          Double
                        </label>
                      </div>

                      <div class="flex items-center ">
                        <input
                          id="multiple"
                          type="checkbox"
                          name="type[multiple]"
                          class="w-5 h-5 border-gray-300 rounded"
                        />

                        <label for="multiple" class="ml-3 text-sm font-medium">
                          Multiple
                        </label>
                      </div>

                      <div class="pt-2">
                        <button
                          type="button"
                          class="text-xs text-gray-500 underline"
                        >
                          Reset Type
                        </button>
                      </div>
                    </div>
                  </fieldset>

                  <div>
                    <fieldset>
                      <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                        Catagory
                      </legend>

                      <div class="px-5 py-6 space-y-2 text-gray-100">
                        <div class="flex items-center">
                          <input
                            id="ac"
                            type="checkbox"
                            name="age[ac]"
                            class="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="ac" class="ml-3 text-sm font-medium">
                            AC
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="non-ac"
                            type="checkbox"
                            name="age[non-ac]"
                            class="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="non-ac" class="ml-3 text-sm font-medium">
                            Non-AC
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="male"
                            type="checkbox"
                            name="age[male]"
                            class="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="male" class="ml-3 text-sm font-medium">
                            Male
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="female"
                            type="checkbox"
                            name="age[female]"
                            class="w-5 h-5 border-gray-300 rounded"
                          />

                          <label for="female" class="ml-3 text-sm font-medium">
                            Female
                          </label>
                        </div>

                        <div class="pt-2">
                          <button
                            type="button"
                            class="text-xs text-gray-500 underline"
                          >
                            Reset Catagoris
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div class="flex justify-between px-5 py-3 border-t border-gray-200">
                    <button
                      name="reset"
                      type="button"
                      class="text-xs font-medium text-gray-600 underline rounded"
                    >
                      Reset All
                    </button>

                    <button
                      name="commit"
                      type="button"
                      class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
                    >
                      Apply Filters
                    </button>
                  </div>
                </form>
              </details>
            </div>

            <div class="lg:col-span-3">
              <div class="flex items-center justify-between">
                <p class="text-sm text-gray-500">
                  <span class="hidden sm:inline">Showing</span>6 of 24 Products
                </p>

                <div class="ml-4">
                  <label for="SortBy" class="sr-only">
                    Sort
                  </label>

                  <select
                    id="SortBy"
                    name="sort_by"
                    class="text-sm border-gray-100 rounded"
                  >
                    <option readonly>Sort</option>
                    <option value="title-asc">Title, A-Z</option>
                    <option value="title-desc">Title, Z-A</option>
                    <option value="price-asc">Price, Low-High</option>
                    <option value="price-desc">Price, High-Low</option>
                  </select>
                </div>
              </div>

              <>
                <div className="">
                  {/* Remove py-8 */}
                  <div className="mx-auto container">
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Card 1 */}
                      <div className="mx-2 w-72 lg:mb-0 mb-8">
                        <div>
                          <img
                            src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                            className="w-full h-44"
                          />
                        </div>
                        <div className="bg-white">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bookmark"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                              </svg>
                            </div>
                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                              <p className="text-xs text-yellow-500">
                                Featured
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-semibold">
                                iphone XS
                              </h2>
                              <p className="text-xs text-gray-600 pl-5">
                                4 days ago
                              </p>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              The Apple iPhone XS is available in 3 colors with
                              64GB memory. Shoot amazing videos
                            </p>
                            <div className="flex mt-4">
                              <div>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  12 months warranty
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  Complete box
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <h2 className="text-indigo-700 text-xs font-semibold">
                                Bay Area, San Francisco
                              </h2>
                              <h3 className="text-indigo-700 text-xl font-semibold">
                                $350
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 1 Ends */}
                      {/* Card 2 */}
                      <div className="mx-2 w-72 lg:mb-0 mb-8">
                        <div>
                          <img
                            src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                            className="w-full h-44"
                          />
                        </div>
                        <div className="bg-white">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bookmark"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                              </svg>
                            </div>
                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                              <p className="text-xs text-yellow-500">
                                Featured
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-semibold">
                                iphone XS
                              </h2>
                              <p className="text-xs text-gray-600 pl-5">
                                4 days ago
                              </p>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              The Apple iPhone XS is available in 3 colors with
                              64GB memory. Shoot amazing videos
                            </p>
                            <div className="flex mt-4">
                              <div>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  12 months warranty
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  Complete box
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <h2 className="text-indigo-700 text-xs font-semibold">
                                Bay Area, San Francisco
                              </h2>
                              <h3 className="text-indigo-700 text-xl font-semibold">
                                $350
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 2 Ends */}
                      {/* Card 3  */}
                      <div className="mx-2 w-72 lg:mb-0 mb-8">
                        <div>
                          <img
                            src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                            className="w-full h-44"
                          />
                        </div>
                        <div className="bg-white">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bookmark"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                              </svg>
                            </div>
                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                              <p className="text-xs text-yellow-500">
                                Featured
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-semibold">
                                iphone XS
                              </h2>
                              <p className="text-xs text-gray-600 pl-5">
                                4 days ago
                              </p>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              The Apple iPhone XS is available in 3 colors with
                              64GB memory. Shoot amazing videos
                            </p>
                            <div className="flex mt-4">
                              <div>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  12 months warranty
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  Complete box
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <h2 className="text-indigo-700 text-xs font-semibold">
                                Bay Area, San Francisco
                              </h2>
                              <h3 className="text-indigo-700 text-xl font-semibold">
                                $350
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 3 Ends */}
                      {/* Card 5  */}
                      <div className="w-72 mx-2 lg:mb-0 mb-8">
                        <div>
                          <img
                            src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                            className="w-full h-44"
                          />
                        </div>
                        <div className="bg-white">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bookmark"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                              </svg>
                            </div>
                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                              <p className="text-xs text-yellow-500">
                                Featured
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-semibold">
                                iphone XS
                              </h2>
                              <p className="text-xs text-gray-600 pl-5">
                                4 days ago
                              </p>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              The Apple iPhone XS is available in 3 colors with
                              64GB memory. Shoot amazing videos
                            </p>
                            <div className="flex mt-4">
                              <div>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  12 months warranty
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  Complete box
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <h2 className="text-indigo-700 text-xs font-semibold">
                                Bay Area, San Francisco
                              </h2>
                              <h3 className="text-indigo-700 text-xl font-semibold">
                                $350
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-72 mx-2 lg:mb-0 mb-8">
                        <div>
                          <img
                            src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                            className="w-full h-44"
                          />
                        </div>
                        <div className="bg-white">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bookmark"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                              </svg>
                            </div>
                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                              <p className="text-xs text-yellow-500">
                                Featured
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-semibold">
                                iphone XS
                              </h2>
                              <p className="text-xs text-gray-600 pl-5">
                                4 days ago
                              </p>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              The Apple iPhone XS is available in 3 colors with
                              64GB memory. Shoot amazing videos
                            </p>
                            <div className="flex mt-4">
                              <div>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  12 months warranty
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  Complete box
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <h2 className="text-indigo-700 text-xs font-semibold">
                                Bay Area, San Francisco
                              </h2>
                              <h3 className="text-indigo-700 text-xl font-semibold">
                                $350
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 6 Ends */}
                      <div className="w-72 mx-2 lg:mb-0 mb-8">
                        <div>
                          <img
                            src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                            className="w-full h-44"
                          />
                        </div>
                        <div className="bg-white">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-bookmark"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                              </svg>
                            </div>
                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                              <p className="text-xs text-yellow-500">
                                Featured
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center">
                              <h2 className="text-lg font-semibold">
                                iphone XS
                              </h2>
                              <p className="text-xs text-gray-600 pl-5">
                                4 days ago
                              </p>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              The Apple iPhone XS is available in 3 colors with
                              64GB memory. Shoot amazing videos
                            </p>
                            <div className="flex mt-4">
                              <div>
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  12 months warranty
                                </p>
                              </div>
                              <div className="pl-2">
                                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                                  Complete box
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between py-4">
                              <h2 className="text-indigo-700 text-xs font-semibold">
                                Bay Area, San Francisco
                              </h2>
                              <h3 className="text-indigo-700 text-xl font-semibold">
                                $350
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 6 Ends */}
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllRoomDetails;
