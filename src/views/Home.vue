<template>
      <div class="flex flex-col overflow-hidden">
         <div>
          <nav id="home-toolbar" class="z-30 fixed right-0 left-0 ">
            <div class="relative">
              <div class="bg-blue-100 relative z-30">
                <div class="h-20 container relative flex flex-row justify-between items-center">
                  <!--Menu icon start -->
                  <div class="block lg:hidden ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div> 
                  <!--Menu icon end -->
                  <div class="text-xl font-semibold">Go Henry</div>

                  <!-- cart layout start in small screen -->
                  <div class="block lg:hidden mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div> 
                    <!-- cart layout end in small screen -->
            </div>

            </div> 
            </div>
          </nav>
        </div>

        <div class="p-2  mt-12">
        <div class="py-8 text-base leading-3 space-y-6 text-gray-600">
          <p>My Kids</p>
          <ul class="space-y-4">
            <li class="flex flex-row p-4 items-center border-2 rounded-md shadow-lg">
              <img src="https://www.pubdials.com/public/uploads/content/1615279975_3142f5aedba6c52a23c4.jpg" class="h-14 w-14 rounded-full ring-1 ring-green-500 p-1" alt="">
              <div class="ml-3">
                <p class="text-lg">James Wainaina Waweru</p>
                <p class="text-xs"> St Christopher  </p>
              </div>
            </li>
            <li class="flex flex-row p-4 items-center border-2 rounded-md shadow-lg">
              <img src="https://www.pubdials.com/public/uploads/content/1615279975_3142f5aedba6c52a23c4.jpg" class="h-14 w-14 rounded-full ring-1 ring-green-500 p-1" alt="">
              <div class="ml-3">
                <p class="text-lg">James Wainaina Waweru</p>
                <p class="text-xs"> St Christopher  </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
</div>
 
</template>
