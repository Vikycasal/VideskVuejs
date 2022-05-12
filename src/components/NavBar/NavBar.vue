<template>
  <nav class="relative flex flex-wrap items-center  px-2 py-3 bg-blue-800 mb-3">
    <div class="container px-4 mx-auto flex flex-wrap items-center">
      <div class="w-full relative flex  lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#logo">
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
      <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-lg py-2 border-2 border-stone-700"> 
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white border-b-stone-700">My Profile
          <p class="block text-gray-500 text-sm hover:text-white">Change settings of your account.</p>
        </a>
        <a href="#" class="block px-4 py-2 text-red-500 hover:bg-indigo-500 hover:text-white">Logout</a>
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

