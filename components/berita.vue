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
    <section class="berita flex justify-center relative mt-4" style="height: 1150px">
      <div class="content offside mt-6 max-w-screen-xl w-full bg-white  overflow-hidden" style="height: 1100px">
        <h1 class="text-2xl font-bold py-8 text-center" style="font-size: 40px; font-family: Times New Roman Thin">
          Berita
        </h1>
        <div id="berita" class="grid grid-cols-2 py-[2rem] pl-[7.8rem]">
          <!--berita 1 -->
          <div>
            <img src="/news1.png" alt="berita 1" style="border-radius: 15px" />
            <h1 class="font-bold pt-5 max-w-md">
              LAM Teknik Laksanakan Asesmen Lapangan Untuk Program Studi
              Doktor Departemen Teknik Elektro Universitas Hasanuddin
            </h1>
            <div class="flex pt-[1rem]">
              <div class="flex">
                <img src="/calendar.jpg" alt="error" class="pb-[3rem]" />
                <p class="text-[10px] text-grey pr-[25px]">
                  25 Oktober 2023
                </p>
              </div>
            </div>
          </div>
          <!-- berita 2 -->
          <div>
            <img src="/newss2.png" alt="berita 2" style="border-radius: 15px" />
            <h1 class="font-bold pt-5 max-w-md">
              LAM Teknik Laksanakan Asesmen Lapangan Untuk Program Studi
              Doktor Departemen Teknik Elektro Universitas Hasanuddin
            </h1>
            <div class="flex pt-[1rem]">
              <div class="flex">
                <img src="/calendar.jpg" alt="error" />
                <p class="text-[10px] text-grey pr-[25px]">
                  25 Oktober 2023
                </p>
              </div>
            </div>
          </div>
          <!--berita 3 -->
          <div>
            <img src="/news3.png" alt="berita 3" style="border-radius: 15px" />
            <h1 class="font-bold pt-5 max-w-md">
              Fakultas Teknik Terima Kunjungan Internasional dari JICA Untuk
              Ex-Post Evaluation Report Proyek Pengembangan Fakultas Teknik
              Universitas Hasanuddin (JICA Loan IP-541)
            </h1>
            <div class="flex pt-[1rem]">
              <div class="flex">
                <img src="/calendar.jpg" alt="error" />
                <p class="text-[10px] text-grey pr-[25px]">
                  25 Oktober 2023
                </p>
              </div>
            </div>
          </div>
          <!-- berita 4 -->
          <div>
            <img src="/news4.png" alt="berita 4" style="border-radius: 15px" />
            <h1 class="font-bold pt-5 max-w-md">
              Kepala BBIPHMM Kunjungi Fakultas Teknik, Program Studi Teknik
              Metalurgi dan Materi Fakultas Teknik Universitas Hasanuddin
              Gelar Kuliah Tamu.
            </h1>
            <div class="flex pt-[1rem]">
              <div class="flex">
                <img src="/calendar.jpg" alt="error" />
                <p class="text-[10px] text-grey pr-[25px]">
                  23 Oktober 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>