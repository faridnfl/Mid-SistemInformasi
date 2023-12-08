<script setup>
import { ref, computed, onMounted } from 'vue';

const endpoint = "http://localhost:8055/items/Galeri"
const galeriData = ref([]);

const itemsPerPage = ref(3);
const currentPage = ref(0);
const totalPages = computed(() => Math.ceil(galeriData.value.length / itemsPerPage.value));

async function getGaleri() {
  const api = await fetch(endpoint)
  const data = await api.json()
  console.log(data.data)
  galeriData.value = data.data;
}

onMounted(() => {
  getGaleri();
})


const getImageUrl = (imageName) => {
  return `http://localhost:8055/assets/${imageName}`;
};


const toggleDropdown = (index) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const visibleItems = computed(() => {
  const start = currentPage.value * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return galeriData.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++;
  }
};

</script>

<template>
    <section class="informasi items-center -mt-24 justify-center"
      style="background-color: rgb(26, 46, 107); height: 1000px">
      <div class="content w-auto">
        <h1 class="text-2xl pt-10 mb-14 text-center text-white"
          style="font-size: 40px; font-family: Times New Roman Thin">
          Informasi
        </h1>
      </div>
      <div class="flex mt-8 mx-auto my-auto" style="height: 300px; width: 1300px">
        <div class="w-full pt-6 w-full px-6" style="height: 300px">
          <img src="/berita1.jpeg" alt="" class="rounded-xl mx-auto my-auto" style="height: 250px" />
          <h4 class="text-center text-white font-bold" style="font-size: 20px">
            The 3th EPI International Conference On Science And Engineering 2019
          </h4>
        </div>
        <div class="w-full pt-6 px-6" style="height: 300px">
          <img src="/berita2.jpeg" alt="class=" class="rounded-xl mx-auto my-auto" style="height: 250px" />
          <h4 class="text-center text-white font-bold" style="font-size: 20px">
            Workshop & Simposium Nasional Geomekanika 5 2019
          </h4>
        </div>
        <div class="w-full pt-6 px-6" style="height: 300px">
          <img src="/berita3.jpg" alt="class=" class="rounded-xl mx-auto my-auto" style="height: 250px" />
          <h4 class="text-center text-white font-bold" style="font-size: 20px">
            Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas
          </h4>
        </div>
      </div>
      <div class="flex mt-20 mx-auto my-auto" style="height: 300px; width: 1300px">
        <div class="w-full pt-6 w-full px-6" style="height: 300px">
          <img src="/berita4.jpeg" alt="" class="rounded-xl mx-auto my-auto" style="height: 250px" />
          <h4 class="text-center text-white font-bold" style="font-size: 20px">
            International Guest Lecture On Journal
          </h4>
        </div>
        <div class="w-full pt-6 px-6" style="height: 300px">
          <img src="/berita5.jpeg" alt="class=" class="rounded-xl mx-auto my-auto" style="height: 250px" />
          <h4 class="text-center text-white font-bold" style="font-size: 20px">
            The 3th EPI International Conference on Science and Engineering
            (EICSE) 2019
          </h4>
        </div>
        <div class="w-full pt-6 px-6" style="height: 300px">
          <img src="/berita6.jpeg" alt="class=" class="rounded-xl mx-auto my-auto" style="height: 250px" />
          <h4 class="text-center text-white font-bold" style="font-size: 20px">
            International Conference on Civil and Environmental Engineering
            (ICCEE) 2019
          </h4>
        </div>
      </div>
      <div class="mt-24 items-center justify-center mx-auto my-auto" style="padding-left: 770px">
        <button class="rounded-xl mx-auto my-auto p-4"
          style="background-color: rgb(76, 89, 101); color: rgb(255, 255, 255); ">
          SELENGKAPNYA
        </button>
      </div>
    </section>
</template>