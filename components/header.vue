<template>
  <header
    class="p-4 h-10 flex items-center"
    style="background-color: rgb(28, 45, 93)"
  >
    <div class="tulisan text-white flex w-full mr-22"></div>
    <div
      class="flex text-white space-x-4 justify-center items-center"
      style="width: 450px"
    >
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
  <header
    class="top-0 h-28 flex items-center justify-between"
    style="margin-top: 40px; background-color: rgb(31, 52, 115)"
  >
    <div class="flex items-center mx-auto" style="width: 98%">
      <div class="flex w-full" style="width: 600px">
        <img src="/unhas_id.png" alt="logo" class="h-16 w-full" />
      </div>
      <div
        class="navbar ml-8 mt-2 text-white w-full"
        style="font-family: Roboto; font-size: 19px"
      >
        <div
          v-for="(menu, index) in menus"
          :key="index"
          class="relative group mr-5"
        >
          <p @click="toggleDropdown(index)" class="cursor-pointer hover:bg-blue-800">
            {{ menu.label }}
          </p>
          <div
            v-show="openDropdown === index"
            class="absolute mt-2 p-2 rounded shadow-lg text-white"
            style="background-color: rgb(31, 52, 115); min-width: 220px"
          >
            <a
              v-for="(submenu, subIndex) in menu.submenus"
              :key="subIndex"
              href="#"
              class="block py-2 hover:bg-blue-800"
              >{{ submenu }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const toggleDropdown = (index) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const openDropdown = ref(null);
const menus = ref([
  {
    label: "PROFIL",
    submenus: [
      "BERITA",
      "SEJARAH SINGKAT",
      "VISI, MISI DAN SASARAN",
      "MANAJEMEN",
      "STRUKTUR ORGANISASI",
      "MASTER PLAN",
      "PETA KAMPUS",
      "MEDIATEK",
    ],
  },
  {
    label: "AKADEMIK",
    submenus: [
      "DEPARTEMEN",
      "PROGRAM MAGISTER",
      "PROGRAM DOKTOR",
      "PROGRAM PROFESI",
      "AKREDITASI",
      "KALENDER AKADEMIK",
    ],
  },
  {
    label: "SUMBER DAYA",
    submenus: [
      "GURU BESAR",
      "TENAGA KEPENDIDIKAN",
      "SARANA DAN PRASARANA",
      "PERPUSTAKAAN",
    ],
  },
  {
    label: "K3",
    submenus: [
      "PROFIL K3",
      "STRUKTUR ORGANISASI K3",
      "TENTANG K3 FT-UH",
      "FILE PENDUKUNG",
    ],
  },
  {
    label: "KEMAHASISWAAN",
    submenus: [
      "UPT ASRAMA (RAMTEK)",
      "PENGEMBANGAN KARAKTER MAHASISWA",
      "PENINGKATAN PRESTASI MAHASISWA",
      "ALUMNI",
      "ATURAN KEMAHASISWAAN",
      "PENGUMUMAN",
    ],
  },
  {
    label: "RISET DAN INOVASI",
    submenus: [
      "DAFTAR PENELITIAN LBE TAHUN 2020",
      "HASIL INOVASI",
      "HAK KEKAYAAN INTELEKTUAL",
    ],
  },
  {
    label: "KEMITRAAN",
    submenus: [
      "KERJASAMA DALAM NEGERI", 
      "KERJASAMA LUAR NEGERI"
    ],
  },
  {
    label: "GPM-PR",
    submenus: [
      "PROFIL GPM-PR",
      "DOKUMEN MUTU",
      "AUDIT MUTU AKADEMIK INTERNAL",
      "AKREDITASI",
      "LAM TEKNIK",
      "LAPORAN KEPUASAAN PENGGUNA",
      "SURVEI KEPUASAN LAYANAN MAHASISWA",
      "GALERI",
    ],
  },
  {
    label: "COT",
    submenus: [
      "COT WEBSITE",
      "JURNAL COT",
      "COT NEWSLETTER",
      "U-I-G COLLABORATION",
    ],
  },
  {
    label: "DHARMA WANITA",
    submenus: [
      "HALAMAN UTAMA DHARMA WANITA",
      "PROFIL DHARMA WANITA",
      "STRUKTUR ORGANISASI DHARMAWANITA",
      "PROGRAM KERJA",
      "KEGIATAN DHARMA WANITA",
    ],
  },
]);
</script>

<style>
    .navbar {
        display: flex;
        flex-direction: row; 
    }
    header {
    position: fixed;
    width: 100%;
    z-index: 10;
    }
</style>
