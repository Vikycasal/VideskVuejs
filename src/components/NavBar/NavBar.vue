<template>
  <nav class="relative flex flex-wrap items-center  px-2 py-3 bg-blue-800 mb-3">
    <div class="container px-4 mr-4 flex flex-wrap items-center">
      <div class="w-full relative flex  lg:w-auto  px-4 lg:static lg:block lg:justify-start mr-4">
        <a class="text-xl font-bold leading-relaxed inline-block mr-5 py-2 whitespace-nowrap uppercase text-white" href="#logo">
          LOGO
        </a>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center mr-4">
        <ul class="flex flex-col lg:flex-row list-none ml-0">
          <li class="nav-item">
            <a class="px-2 py-3 flex items-center text-sm leading-snug text-white hover:opacity-75" href="#menu">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-1">Menu</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-2 py-3  flex items-center text-sm  leading-snug text-white hover:opacity-75" href="#menu">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-1">Menu</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-2 py-3  flex items-center text-sm  leading-snug text-white hover:opacity-75" href="#menu">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-1">Menu</span>
            </a>
          </li>
                    <li class="nav-item">
            <a class="px-2 py-3  flex items-center text-sm leading-snug text-white hover:opacity-75" href="#menu">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-1">Menu</span>
            </a>
          </li>
        </ul>
      </div>
    <div class="relative">
      <button @click="isOpen = !isOpen" class="block h-8 w-8 rounded-full overflow-hidden border-2">
        <img class="h-full w-full object-cover" src="https://images.generated.photos/nn5Gi6lW4p3LmXvDT0SYrGPPFZK9b_p70bKPpYBkWro/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTk3NTA3LmpwZw.jpg" alt="avatar" />
      </button>
      <div v-if="isOpen" class="absolute right-0 mt-2 w-60 bg-white rounded-lg py-2 border-2 border-stone-700"> 
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-b-stone-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>My Profile
 <p class="block text-gray-500 text-sm hover:text-white">Change settings of your account.</p>
        </a>
        <a href="#" class="block px-4 py-2 text-red-500 hover:bg-indigo-500 hover:text-white flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
</svg>Logout</a>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "blue-navbar",
  data() {
    return {
      showMenu: false,
      isOpen: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

.ml-2 {
  margin-left: 150px;
}

</style>

