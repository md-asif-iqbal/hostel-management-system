import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RoomNav = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col h-auto">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side mt-20 pl-10 w-72">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
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
                                        <NavLink to="/roomdetails">
                                            <input
                                                id="single"
                                                type="checkbox"
                                                name="type[Single]"
                                                class="w-5 h-5 border-gray-300 rounded"
                                            />

                                            <label for="single" class="ml-3 text-sm font-medium">
                                                All
                                            </label>
                                        </NavLink>
                                    </div>
                                    <div class="flex items-center">
                                        <NavLink to="/roomdetails/single">
                                            <input
                                                id="single"
                                                type="checkbox"
                                                name="type[Single]"
                                                class="w-5 h-5 border-gray-300 rounded"
                                            />

                                            <label for="single" class="ml-3 text-sm font-medium">
                                                Single
                                            </label>
                                        </NavLink>
                                    </div>

                                    <div class="flex items-center">
                                        <NavLink to="/roomdetails/double">
                                            <input
                                                id="double"
                                                type="checkbox"
                                                name="type[double]"
                                                class="w-5 h-5 border-gray-300 rounded"
                                            />

                                            <label for="double" class="ml-3 text-sm font-medium">
                                                Double
                                            </label>
                                        </NavLink>
                                    </div>

                                    <div class="flex items-center ">
                                        <NavLink to="/roomdetails/multiple">
                                            <input
                                                id="Multiple"
                                                type="checkbox"
                                                name="type[double]"
                                                class="w-5 h-5 border-gray-300 rounded"
                                            />

                                            <label for="double" class="ml-3 text-sm font-medium">
                                                Multiple
                                            </label>
                                        </NavLink>
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
            </div>
        </div>
    );
};

export default RoomNav;