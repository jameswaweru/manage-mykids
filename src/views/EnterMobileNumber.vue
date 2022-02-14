<template>
            <div class="flex flex-col overflow-hidden">
         <div>
          <nav id="general-toolbar" class="z-30 fixed right-0 left-0 ">
              <div class="relative">
                <div class="bg-blue-100 relative z-30">
                  <div class="h-20 container relative flex flex-row justify-start space-x-5 items-center">
                    <!--Menu icon start -->
                    <div class="block lg:hidden ml-3 ">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </div> 
                    <!--Menu icon end -->
                    <div class="text-xl font-semibold -mt-1">Get Started</div>          

              </div>
              </div> 
              </div>
            </nav>
        </div>

        <div class="mt-28 m-2">
          <p>Enter your phone no. to proceed</p>
        </div>

      
        <div class=" ml-2 mr-2">

          <label for="email" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <div class="mt-1 flex flex-row">
            <div class="w-20 border-2 border-gray-300 rounded-l-lg flex justify-center items-center">
              <select name="country-codes" id="company-size" class=" w-full h-full rounded-lg focus:outline-none  focus:ring-red-400">
                <option value="">+254</option>
                <option value="small">+255</option>
              </select>
            </div>
            <input id="email" name="Number" type="email" autocomplete="email" required class="w-full border border-l-0 border-gray-300 px-3 py-3 rounded-r-lg shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-red-400" />
          </div>
        </div>


        <div class="m-3">
            <button type="submit" class="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Validation Code</button>
        </div>

      </div>
 
 

 
</template>