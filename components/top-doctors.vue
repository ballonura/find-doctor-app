<template>
  <div class="flex flex-col flex-1 overflow-y-auto">
    <div class="flex items-center justify-between font-bold mb-4">
      <p class="capitalize text-gray-1 text-lg">top doctors</p>
      <p class="text-blue-1 text-xs">View all</p>
    </div>
    <div>
      <div v-for="topDoctor in topDoctors" :key="topDoctor.id" class="flex items-center mb-6">
        <div class="w-1/4 mr-6 flex-shrink-0">
          <img class="rounded-lg" :src="require(`~/assets/images/top-doctors/${topDoctor.id}.png`)" />
        </div>
        <div class="w-3/4 flex flex-col">
          <div class="mb-1">
            <p class=" text-base font-bold text-gray-5">{{ topDoctor.name }}</p>
          </div>
          <div class="mb-2 text-gray-6 text-sm capitalize">
            <p>{{ topDoctor.category }} &#9679 {{ topDoctor.hospital }}</p>
          </div>
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <!-- prettier-ignore -->
                  <svg v-for="i of topDoctor.ranking" :key="i" class="w-4 text-yellow-2 fill-current" viewBox="0 0 14 12"><path d="M6.99998 0.146683L8.45332 4.62002H13.1533L9.35332 7.38002L10.8066 11.8533L6.99998 9.09335L3.19332 11.8533L4.64665 7.38002L0.846649 4.62002H5.54665L6.99998 0.146683Z" /></svg>
                  <!-- prettier-ignore -->
                  <svg v-for="i of 5 - topDoctor.ranking" :key="i" class="w-4 text-gray-3 fill-current" viewBox="0 0 14 12"><path d="M6.99998 0.146683L8.45332 4.62002H13.1533L9.35332 7.38002L10.8066 11.8533L6.99998 9.09335L3.19332 11.8533L4.64665 7.38002L0.846649 4.62002H5.54665L6.99998 0.146683Z" /></svg>
                  <p class="ml-2 text-gray-7 text-xs">({{topDoctor.reviews}})</p>
              </div>
              <div :class="[topDoctor.isOpen ? 'bg-green-2 text-green-1' : 'bg-red-3 text-red-2']" class="flex items-center justify-center h-6 text-xs rounded-md capitalize" style="width: 3.5rem;">
                  {{topDoctor.isOpen ? 'open' : 'closed'}}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopDoctor from "~/components/top-doctor";

export default {
  components: {
    TopDoctor
  },
  data() {
    return {
      topDoctors: [
        {
          id: 1,
          name: "dr. Gilang Segara Bening",
          category: "heart",
          hospital: "persahabatan hospital",
          ranking: 5,
          reviews: 1221,
          isOpen: true
        },
        {
          id: 2,
          name: "dr. Shabil Chan",
          category: "dental",
          hospital: "columbia asia hospital",
          ranking: 4,
          reviews: 964,
          isOpen: false
        },
        {
          id: 3,
          name: "dr. Mustakim",
          category: "eye",
          hospital: "salemba carolus hospital",
          ranking: 3,
          reviews: 762,
          isOpen: true
        },
        {
          id: 4,
          name: "dr. Mustakim",
          category: "eye",
          hospital: "salemba carolus hospital",
          ranking: 5,
          reviews: 762,
          isOpen: false
        }
      ]
    };
  }
};
</script>

<style></style>
