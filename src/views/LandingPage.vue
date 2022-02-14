<template>
    <div v-if="!loading" class="flex flex-col p-4 w-full overflow-hidden h-full items-center">

        <div id="image" class="mt-10">
            <img src="https://cdn.dribbble.com/users/400493/screenshots/6205837/gohenry_01_still_2x.gif?compress=1&resize=400x300" 
            class="h-28 w-40" alt="">
        </div>

        <div class="mt-8 flex flex-col space-y-2 items-center ">
            <p class="font-semibold text-xl mb-3">Welcome to Go Henry</p>
            <p class="flex text-center text-xs m-2">The platform for your kids financial literacy & pocket money management.
            Make your kids grow to understand the difference between wants and needs by spending wisely.</p>
        </div>

        <router-link :to="{ name: 'Get-started-with-phone'}" class="w-full mt-10 ml-8 mr-8">
            <div >
                <button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Started</button>
            </div>
        </router-link>

        <!-- <router-link :to="{ name: 'Get-started-with-phone', params: {id: 12} }"> -->
        
        <p class="mt-2 text-center text-sm text-gray-600 max-w">
            Already registered?
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
        </p>
        

        
    </div>

    <div class="w-full h-full flex flex-col align-center justify-center mx-auto" v-else>
       <img :src="loadingImage" class="h-20 w-20" alt="">
    </div>


</template>

<script>
export default {

    data(){
        return {
            loadingImage: require('../assets/images/loading-gif.gif'),
            loading : false
        }
    },


    setup() {
        
    },
}
</script>
