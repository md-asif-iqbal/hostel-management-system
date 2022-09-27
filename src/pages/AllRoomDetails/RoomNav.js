import React from 'react';
import {Outlet} from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

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
                                        <CustomLink to="/roomdetails">
                                            

                                            <label for="single" class="ml-3 text-sm font-medium">
                                                All
                                            </label>
                                        </CustomLink>
                                    </div>
                                    <div class="flex items-center">
                                        <CustomLink to="/roomdetails/single">
                                            

                                            <label for="single" class="ml-3 text-sm font-medium">
                                                Single
                                            </label>
                                        </CustomLink>
                                    </div>

                                    <div class="flex items-center">
                                        <CustomLink to="/roomdetails/double">
                                            

                                            <label for="double" class="ml-3 text-sm font-medium">
                                                Double
                                            </label>
                                        </CustomLink>
                                    </div>

                                    <div class="flex items-center ">
                                        <CustomLink to="/roomdetails/multiple">
                                            
                                            <label for="double" class="ml-3 text-sm font-medium">
                                                Multiple
                                            </label>
                                        </CustomLink>
                                    </div>

                        
                                </div>
                            </fieldset>

            
                           
                        </form>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default RoomNav;