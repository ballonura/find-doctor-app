<template>
  <div class="flex flex-col mb-6">
    <div class="flex justify-between items-center my-10">
      <div @click="isOpen = !isOpen" class="flex justify-center items-center w-10 h-10">
        <!-- prettier-ignore -->
        <svg
          :class="{'rotate-45' : isOpen}"
          class="transform duration-300 w-8 text-gray-1 stroke-current"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.26001 6H18.74"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M5 12H13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M5.26001 18H18.74"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <img src="~/assets/images/user.png" />
      </div>
    </div>
    <div>
      <h1 class="text-gray-1 leading-10 mb-8" style="font-size: 2.125rem;">
        Find
        <span class="text-gray-2">your doctor</span>
      </h1>
    </div>
    <div class="relative mb-8">
      <input class="bg-gray-4 w-full placeholder-gray-3 rounded-lg pl-4 pr-16 text-sm focus:outline-none" style="height: 3.5rem;" type="text" placeholder="Search doctor, medicines etc" />
      <div class="search-icon">
        <!-- prettier-ignore -->
        <svg class="w-6 stroke-current text-gray-1" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.1 17.34C14.966 17.34 18.1 14.206 18.1 10.34C18.1 6.474 14.966 3.34 11.1 3.34C7.23401 3.34 4.1 6.474 4.1 10.34C4.1 14.206 7.23401 17.34 11.1 17.34Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.57 16.21L19.57 20.21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div v-for="category of categories" :key="category.name" class="flex flex-col items-center w-1/4 mb-3">
        <div class="rounded-lg flex justify-center items-center mb-1" :class="[category.color]" style="width: 3.5rem; height: 3.5rem;">
          <img style="filter: invert(1);" :src="require(`~/assets/images/categories/${category.name}.svg`)" />
        </div>
        <p class="capitalize text-gray-1 text-xs">{{ category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isSearchActive: false,
      categories: [
        {
          name: "consultation",
          color: "bg-blue-1"
        },
        {
          name: "dental",
          color: "bg-purple-1"
        },
        {
          name: "heart",
          color: "bg-orange-1"
        },
        {
          name: "hospitals",
          color: "bg-yellow-1"
        },
        {
          name: "medicines",
          color: "bg-green-1"
        },
        {
          name: "physician",
          color: "bg-turquoise-1"
        },
        {
          name: "skin",
          color: "bg-pink-1"
        },
        {
          name: "surgeon",
          color: "bg-red-1"
        }
      ]
    };
  }
};
</script>

<style class="scss" scoped>
.search-icon {
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  @apply absolute w-8 h-8 flex justify-center items-center;
}
</style>
