<template>
    <header class="p-4 h-10 flex items-center" style="background-color: rgb(28, 45, 93)">
      <div class="tulisan text-white flex w-full mr-22"></div>
      <div class="flex text-white space-x-4 justify-center items-center" style="width: 450px">
        <div class="flex space-x-4">
          <p>SITEMAP</p>
          <p>QUICK SITE</p>
        </div>
        <div class="flex space-x-2 items-center">
          <p class="text-white text-2sm">INA</p>
          <img src="/indonesia-flag.png" alt="indo" class="w-8 h-8" />
          <p class="text-white text-2sm">ENG</p>
          <img src="/english.png" alt="english" class="w-8 h-5" />
        </div>
      </div>
    </header>
    <header class="top-0 h-28 flex items-center justify-between" style="margin-top: 40px; background-color: rgb(31, 52, 115)">
      <div class="flex items-center mx-auto" style="width: 98%">
        <div class="flex w-full" style="width: 600px">
          <img src="/unhas_id.png" alt="logo" class="h-16 w-full" />
        </div>
        <div class="navbar ml-8 mt-2 text-white w-full" style="font-family: Roboto; font-size: 19px;">
          <div v-for="(menu, index) in menus" :key="index" class="relative group mr-5">
            <p @click="toggleDropdown(index)" class="cursor-pointer">{{ menu.label }}</p>
            <div 
              v-show="openDropdown === index" 
              class="absolute mt-2 p-2 rounded shadow-lg text-white" 
              style="background-color: rgb(31, 52, 115); min-width: 220px;"
            >
              <a v-for="(submenu, subIndex) in menu.submenus" :key="subIndex" href="#" class="block py-2">{{ submenu }}</a>
            </div>
          </div>
        </div>
      </div>
    </header>

  <main>
    <section class="judul min-h-screen flex items-center place-content-center bg-cover bg-center">
      <h1 class="h-12 text-center text-white font-medium flex" style="
          font-family: Oswald;
          font-size: 2.5rem;
          text-shadow: 8px 6px 4px rgba(0, 0, 0, 20);
        ">
        SELAMAT DATANG DI FAKULTAS <br />
        TEKNIK UNIVERSITAS HASANUDDIN
      </h1>
    </section>
    <div class="sambutan flex pt-20 pb-20 mb-8" style="background-color: rgb(26, 46, 107); min-height: 650px">
      <div class="flex mx-auto" style="width: 1270px">
        <div class="foto flex" style="width: 550px">
          <img src="/dekan.png" alt="Dekan FT-UH" class="drop-shadow-2xl rounded-3xl flex max-w-full h-full"
            style="height: 450px" />
        </div>
        <div class="ucapan ml-10 text-white w-full">
          <h1 class="text-3xl font-bold font-Oswald" style="font-family: Oswald">
            SAMBUTAN DEKAN
          </h1>
          <p class="mt-6 text-justify" style="font-size: 20px; opacity: 0.8; font-family: Roboto">
            Assalamu Alaikum Wr. Wb. Puji syukur kehadirat Tuhan Yang Maha Kuasa
            atas limpahan rahmat dan hidayah-Nya sehingga informasi tentang
            Fakultas Teknik Unhas melalui situs web ini dapat terwujud. Besar
            harapan kita semoga ridho-Nya menyertai segala aktifitas dalam upaya
            pembinaan sumber daya manusia dalam bidang teknologi dan semoga
            informasi melalui web ini dapat berguna bagi semua pihak. Kami dari
            semua civitas akademika Fakultas Teknik dengan semua dukungan
            komponen perguruan tinggi yang ada akan terus meningkatkan
            pencapaian menuju terwujudnya visi dan misi yang telah dicanangkan
            dalam rencana strategis fakultas. Semoga informasi yang diberikan
            lewat layanan website ini dapat memberikan gambaran situasi dan
            kondisi Fakultas Teknik kepada semua lapisan masyarakat. Selamat
            Datang di Fakultas Teknik Universitas Hasanuddin.
          </p>
          <p class="mt-6 font-Roboto" style="opacity: 0.8; font-size: 20px; font-family: Roboto">
            Wassalam.
          </p>
          <h2 class="font-bold text-2xl font-oswald" style="font-family: Oswald; font-size: 27px">
            Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN
            Eng.
          </h2>
        </div>
      </div>
    </div>
    <section class="galeri flex justify-center relative" style="height: 470px">
      <div class="content offside max-w-screen-xl w-full bg-white border rounded-t-xl overflow-hidden"
        style="height: 550px">
        <div class="pb-5">
          <h1 class="font-bold pt-5 text-center" style="font-family: Times New Roman Thin; font-size: 40px">Galeri</h1>
        </div>
        <div class="w-full mt-6">
          <div class="px-6 overflow-hidden">
            <div class="grid grid-cols-3 gap-4">
              <button @click="prevImages" class="absolute left-0 py-32 px-0  text-white rounded hover:bg-blue-700 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                </svg>
              </button>
              <button @click="nextImages" class="absolute right-0 py-32 px-0  text-white rounded hover:bg-blue-700 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-black">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                </svg>
              </button>
              <div v-for="(image, index) in visibleImages" :key="index" class="relative">
                <img :src="image.imageSrc" :alt="image.title" class="w-full h-72 object-cover py-2 px-2 z-0" />
                <h4 class="text-center" style="font-family: Roboto; font-size: 19px; font-weight: bold;">{{ image.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dharma-wanita warna justify-center px-52" style="background-color: rgb(26, 46, 107)">
      <div class="content w-full flex justify-around">
        <h1 class="text-2xl py-9 text-center text-white" style="font-size: 40px; font-family: Times New Roman Thin">
          Dharma Wanita
        </h1>
      </div>
      <div class="flex gap-8 w-full mt-16">
        <div class="" style="width: 1000px; height: 300px">
          <img src="/dharma-wanita.png" alt="Dharma Wanita" class="rounded-2xl w-full h-full" />
        </div>
        <div class="" style="width: 1700px; height: auto">
          <p class="text-white pt-16 text-justify" style="font-size: 25px; font-family: Roboto">
            Dharma Wanita Persatuan Fakultas Teknik Unhas yang diketuai oleh Ny.
            Muralia Isran Ramli, aktif melakukan berbagai macam kegiatan seperti
            amaliah ramadhan, arisan di kapal, kegiatan BKMT dan DPW Unhas.
          </p>
        </div>
      </div>
      <div class="grid justify-items-end">
        <button style="background-color: rgb(76, 89, 101); color: white">
          SELENGKAPNYA
        </button>
      </div>
    </section>
    <section class="berita flex justify-center relative mt-20" style="height: 1150px">
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
    <section class="map flex justify-center mt-4 ">
      <div class="content items-center justify-center max-w-screen-xl w-full   rounded-b-xl" style="height: 500px;">
        <iframe loading="lazy" class="rounded-b-xl" style="height:100%; width:100%;" src="https://unhas.ac.id/petakampus/virtualtour/index.php?scene=outdoortheater#outdoortheater" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </section>
  </main>

  <footer class="-mt-10">
    <div class="content max-w-screen-xl mx-auto py-20">
      <div class="grid grid-cols-3 gap-5 text-sm font-semibold">
        <div>
          <h3>ALAMAT</h3>
          <div class="ms-10 my-6 text-gray-400 font-normal">
            <p>
              Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan.
              92171
            </p>
          </div>
          <h3>KONTAK & EMAIL</h3>
          <div class="ms-10 my-6 text-gray-400 font-normal">
            <p>+62 852-9999-9958</p>
            <p>teknik@unhas.ac.id</p>
          </div>
          <img src="./unhas_id.png" alt="" />
          <h2 class="mt-6">SITE STATISTICS</h2>
          <div class="my-6 text-gray-400 font-normal">
            <a href="">
              <img src="" alt="Flag Counter" />
            </a>
          </div>
        </div>
        <div>
          <h3>INFORMASI</h3>
          <div class="ms-10 my-6 text-gray-400 font-normal">
            <a href="">
              <p>
                THE 3RD EPI INTERNATIONAL CONFERENCE ON SCIENCE AND ENGINEERING
                2019
              </p>
              <p class="text-xs mt-2">23 September 2019</p>
            </a>
            <div class="mt-5">
              <p>WORKSHOP & SIMPOSIUM NASIONAL GEOMEKANIKA 5 2019</p>
              <p class="text-xs mt-2">06 Agustus 2019</p>
            </div>
            <div class="mt-5">
              <p>
                Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas
              </p>
              <p class="text-xs mt-2">09 Juli 2019</p>
            </div>
            <div class="mt-5">
              <p>International Guest Lecture on Journal Article</p>
              <p class="text-xs mt-2">25 Juni 2019</p>
            </div>
          </div>
          <h3>PELAYANAN PUBLIK</h3>
        </div>
        <div>
          <h3>PENELUSURAN OLEH GOOGLE</h3>
          <form class="mt-6 bg-white p-3 flex justify-between" action="https://www.google.com/search" method="GET">
            <input type="text" name="q" class="text-black p-1 w-full border" placeholder="Google Search" />
            <input type="submit" value="Search" class="bg-black px-3" />
          </form>
          <h3 class="mt-6">DIDUKUNG OLEH</h3>
          <div class="mt-6 flex flex-col gap-3 items-center">
            <img class="bg-white p-2" width="100px"
              src="https://eng.unhas.ac.id/fakultas/uploads/logo/58848eafe9ed984f2de7512fcf09b24a.png" alt="" />
            <img class="bg-white p-2" width="100px"
              src="https://eng.unhas.ac.id/fakultas/uploads/logo/b93dfcc51ffc4fee783d7218ae4dfa41.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <hr class="border-black" />
    <div class="footer2 py-6 text-center text-gray-400 text-sm">
      Copyright © 2023 All rights reserved
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const images = ref([
  { title: "Wisuda Universitas Hasanuddin Periode IV Tahap II", imageSrc: "/kegiatan1.jpeg" },
  { title: "Rapat Koordinasi Internal", imageSrc: "/kegiatan2.jpeg" },
  { title: "Transformasi digital manajemen persuratan (mBerkas)", imageSrc: "/kegiatan3.jpeg" },
  { title: "Pengabdian Masyarakat", imageSrc: "/kegiatan4.jpeg" },
  { title: "Rapat Kerja Fakultas Teknik", imageSrc: "/kegiatan5.jpeg" },
  { title: "Pelantikan dan Pengambilan Sumpah Jabatan Pejabat", imageSrc: "/kegiatan6.jpeg" },
]);

const currentIndex = ref(0);
const imagesPerRow = ref(3);
const openDropdown = ref(null);

const menus = ref([
{
label: 'PROFIL',
submenus: ['BERITA', 'SEJARAH SINGKAT', 'VISI, MISI DAN SASARAN', 'MANAJEMEN', 'STRUKTUR ORGANISASI', 'MASTER PLAN', 'PETA KAMPUS', 'MEDIATEK'],
},
{
label: 'AKADEMIK',
submenus: ['DEPARTEMEN', 'PROGRAM MAGISTER', 'PROGRAM DOKTOR', 'PROGRAM PROFESI', 'AKREDITASI', 'KALENDER AKADEMIK'],
},
{
label: 'SUMBER DAYA',
submenus: ['GURU BESAR', 'TENAGA KEPENDIDIKAN', 'SARANA DAN PRASARANA', 'PERPUSTAKAAN'],
},
{
label: 'K3',
submenus: ['PROFIL K3', 'STRUKTUR ORGANISASI K3', 'TENTANG K3 FT-UH', 'FILE PENDUKUNG'],
},
{
label: 'MAHASISWAAN',
submenus: ['UPT ASRAMA (RAMTEK)', 'PENGEMBANGAN KARAKTER MAHASISWA', 'PENINGKATAN PRESTASI MAHASISWA', 'ALUMNI', 'ATURAN KEMAHASISWAAN', 'PENGUMUMAN'],
},
{
label: 'RISET DAN INOVASI',
submenus: ['DAFTAR PENELITIAN LBE TAHUN 2020', 'HASIL INOVASI', 'HAK KEKAYAAN INTELEKTUAL'],
},
{
label: 'KEMITRAAN',
submenus: ['KERJASAMA DALAM NEGERI', 'KERJASAMA LUAR NEGERI'],
},
{
label: 'GPM-PR',
submenus: ['PROFIL GPM-PR', 'DOKUMEN MUTU', 'AUDIT MUTU AKADEMIK INTERNAL', 'AKREDITASI', 'LAM TEKNIK', 'LAPORAN KEPUASAAN PENGGUNA', 'SURVEI KEPUASAN LAYANAN MAHASISWA', 'GALERI'],
},
{
label: 'COT',
submenus: ['COT WEBSITE', 'JURNAL COT', 'COT NEWSLETTER', 'U-I-G COLLABORATION'],
},
{
label: 'DHARMA WANITA',
submenus: ['HALAMAN UTAMA DHARMA WANITA', 'PROFIL DHARMA WANITA', 'STRUKTUR ORGANISASI DHARMAWANITA', 'PROGRAM KERJA', 'KEGIATAN DHARMA WANITA'],
},
]);

const visibleImages = computed(() => {
  const start = currentIndex.value;
  const end = start + imagesPerRow.value;
  return images.value.slice(start, end);
});

const selectImage = (index) => {
  currentIndex.value = index;
};

const prevImages = () => {
  currentIndex.value = Math.max(currentIndex.value - imagesPerRow.value, 0);
};

const nextImages = () => {
  const maxIndex = images.value.length - imagesPerRow.value;
  currentIndex.value = Math.min(currentIndex.value + imagesPerRow.value, maxIndex);
};

const toggleDropdown = (index) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};
</script>

<style scoped>
main {
  background-color: #d7d7d7;
}

.navbar {
  display: flex;
  flex-direction: row; 
}

header {
  position: fixed;
  width: 100%;
  z-index: 10;
}

.warna {
  padding-bottom: 6rem;
}

.offside {
  position: absolute;
  top: -90px;
}

.header-logo {
  float: left;
  margin-top: 7px;
}

.header-dropdown {
  width: 1089px;
  float: left;
  margin-top: 17px;
  margin-left: 10px;
}

.header-language {
  width: 120px;
  float: right;
  margin: 15px 10px;
}

.judul {
  background-image: url("bg-judul.png");
}

.dharma-wanita button {
  padding: 0.8rem 2.5rem;
  border-radius: 10px;
}

footer {
  background-color: rgb(26, 46, 107);
  color: white;
}

.footer2 {
  background-color: rgb(28, 45, 93)
}
</style>
