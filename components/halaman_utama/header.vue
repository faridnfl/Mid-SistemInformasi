<script setup>
const toggleDropdown = (index) => {
  openDropdown.value = openDropdown.value === index ? null : index;
};

const openDropdown = ref(null);

const menus = ref([
{
    label: "PROFIL",
    submenus: [
      { nama: "BERITA", url: "/profil/berita" },
      { nama: "SEJARAH SINGKAT", url: "/profil/sejarah" },
      { nama: "VISI, MISI DAN SASARAN", url: "/profil/visi-misi" },
      { nama: "MANAJEMEN", url: "/profil/manajemen" },
      { nama: "STRUKTUR ORGANISASI", url: "/profil/struktur" },
      { nama: "MASTER PLAN", url: "/profil/master-plan" },
      { nama: "PETA KAMPUS", url: "/profil/peta-kampus" },
      { nama: "MEDIATEK", url: "/profil/mediatak" },
    ],
  },
  {
    label: "AKADEMIK",
    submenus: [
      { nama: "DEPARTEMEN", url: "/akademik/departemen" },
      { nama: "PROGRAM MAGISTER", url: "/akademik/program-magister" },
      { nama: "PROGRAM DOKTOR", url: "/akademik/program-doktor" },
      { nama: "PROGRAM PROFESI", url: "/akademik/program-profesi" },
      { nama: "AKREDITASI", url: "/akademik/akreditasi" },
      { nama: "KALENDER AKADEMIK", url: "/akademik/kalender-akademik" },
    ],
  },
  {
    label: "SUMBER DAYA",
    submenus: [
      { nama: "GURU BESAR", url: "/sumberdaya/guru-besar" },
      { nama: "TENAGA KEPENDIDIKAN", url: "/sumberdaya/tenaga-kependidikan" },
      { nama: "SARANA DAN PRASARANA", url: "/sumberdaya/sarana-prasarana" },
      { nama: "PERPUSTAKAAN", url: "/sumberdaya/perpustakaan" },
    ],
  },
  {
    label: "K3",
    submenus: [
      { nama: "PROFIL K3", url: "/k3/profil-k3" },
      { nama: "STRUKTUR ORGANISASI K3", url: "/k3/struktur-organisasi-k3" },
      { nama: "TENTANG K3 FT-UH", url: "/k3/tentang-k3" },
      { nama: "FILE PENDUKUNG", url: "/k3/file-pendukung" },
    ],
  },
  {
    label: "KEMAHASISWAAN",
    submenus: [
      { nama: "UPT ASRAMA (RAMTEK)", url: "/kemahasiswaan/upt-asrama" },
      { nama: "PENGEMBANGAN KARAKTER MAHASISWA", url: "/kemahasiswaan/pengembangan-karakter" },
      { nama: "PENINGKATAN PRESTASI MAHASISWA", url: "/kemahasiswaan/peningkatan-prestasi" },
      { nama: "ALUMNI", url: "/kemahasiswaan/alumni" },
      { nama: "ATURAN KEMAHASISWAAN", url: "/kemahasiswaan/aturan" },
      { nama: "PENGUMUMAN", url: "/kemahasiswaan/pengumuman" },
    ],
  },
  {
    label: "RISET DAN INOVASI",
    submenus: [
      { nama: "DAFTAR PENELITIAN LBE TAHUN 2020", url: "/riset-inovasi/penelitian-lbe-2020" },
      { nama: "HASIL INOVASI", url: "/riset-inovasi/hasil-inovasi" },
      { nama: "HAK KEKAYAAN INTELEKTUAL", url: "/riset-inovasi/hak-kekayaan-intelektual" },
    ],
  },
  {
    label: "KEMITRAAN",
    submenus: [
      { nama: "KERJASAMA DALAM NEGERI", url: "/kemitraan/kerjasama-dalam-negeri" },
      { nama: "KERJASAMA LUAR NEGERI", url: "/kemitraan/kerjasama-luar-negeri" },
    ],
  },
  {
    label: "GPM-PR",
    submenus: [
      { nama: "PROFIL GPM-PR", url: "/gpm-pr/profil-gpm-pr" },
      { nama: "DOKUMEN MUTU", url: "/gpm-pr/dokumen-mutu" },
      { nama: "AUDIT MUTU AKADEMIK INTERNAL", url: "/gpm-pr/audit-mutu-akademik-internal" },
      { nama: "AKREDITASI", url: "/gpm-pr/akreditasi" },
      { nama: "LAM TEKNIK", url: "/gpm-pr/lam-teknik" },
      { nama: "LAPORAN KEPUASAAN PENGGUNA", url: "/gpm-pr/laporan-kepuasan-pengguna" },
      { nama: "SURVEI KEPUASAN LAYANAN MAHASISWA", url: "/gpm-pr/survei-kepuasan-layanan-mahasiswa" },
      { nama: "GALERI", url: "/gpm-pr/galeri" },
    ],
  },
  {
    label: "COT",
    submenus: [
      { nama: "COT WEBSITE", url: "/cot/cot-website" },
      { nama: "JURNAL COT", url: "/cot/jurnal-cot" },
      { nama: "COT NEWSLETTER", url: "/cot/cot-newsletter" },
      { nama: "U-I-G COLLABORATION", url: "/cot/uig-collaboration" },
    ],
  },
  {
    label: "DHARMA WANITA",
    submenus: [
      { nama: "HALAMAN UTAMA DHARMA WANITA", url: "/dharma-wanita/halaman-utama" },
      { nama: "PROFIL DHARMA WANITA", url: "/dharma-wanita/profil" },
      { nama: "STRUKTUR ORGANISASI DHARMAWANITA", url: "/dharma-wanita/struktur-organisasi" },
      { nama: "PROGRAM KERJA", url: "/dharma-wanita/program-kerja" },
      { nama: "KEGIATAN DHARMA WANITA", url: "/dharma-wanita/kegiatan" },
    ],
  },
]);
</script>

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
        class="navbar ml-4 mt-2 text-white w-full"
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
              :href="submenu.url"
              class="block py-2 hover:bg-blue-800"
            >{{ submenu.nama }}</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

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
