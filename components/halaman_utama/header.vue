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
  <!-- navbar start -->
  <header class = "pt-[40px] bg-navy fixed top-0 left-0 w-full flex items-center z-10">
    <div class = "container">
      <nav class="py-5 shadow-lg fixed left-0 w-full flex items-center z-10" style="background-color: rgb(31, 52, 115);">
        <div class="flex w-full" style="width: 355px">
            <img src="/unhas_id.png" alt="logo" />
        </div>
        <ul>
          <li class="text-white font-bold text-base text-center px-2 flex">
            <a href="#" class="pl-16 pr-6 pt-1 hover:text-amber-600">Beranda</a>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 pt-1 hover:text-amber-600 group-hover:text">Profil</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'berita' }">Berita</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'sejarah' }">Sejarah Singkat</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'manajemen' }">Manajemen</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'strukturorganisasi' }">Struktur Organisasi</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'masterplan' }">Master Plan</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'petakampus' }">Peta Kampus</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'mediatek' }">Mediatek</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Akademik</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'departemen' }">Departemen</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'programmagister' }">Program Magister</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'programdoktor' }">Program Doktor</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'programprofesi' }">Program Profesi</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'akreditasi' }">Akreditasi</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'kalenderakademik' }">Kalender Akademik</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Sumber Daya</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'gurubesar' }">Guru Besar</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'tenagakependidikan' }">Tenaga Kependidikan</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'saranadanprasarana' }">Sarana dan Prasarana</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'perpustakaan' }">Perpustakaan</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">K3</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'profilk3' }">Profil K3</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'strukturorganisasik3' }">Struktur Organisasi K3</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'tentangk3' }">Tentang K3 FT-UH</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'filependukung' }">File Pendukung</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Kemahasiswaan</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'uptasrama' }">UPT Asrama (Ramtek)</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'pengembangan' }">Pengembangan Karakter Mahasiswa</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'peningkatan' }">Peningkatan Prestasi Mahasiswa</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'inbound' }">Mahasiswa Inbound dan Outbound</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'alumni' }">Alumni</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'aturan' }">Aturan Kemahasiswaan</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'pengumuman' }">Pengumuman</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Riset dan Inovasi</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'daftarpenelitian' }">Daftar Penelitian LBE Tahun 2020</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'hasilinovasi' }">Hasil Inovasi</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'hakkekayaan' }">Hak Kekayaan Intelektual</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Kemitraan</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'dalamnegeri' }">Kerjasama Dalam Negeri</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'luarnegeri' }">Kerjasama Luar Negeri</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">GPM-PR</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'gpmri' }">Profil GPM-PR</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'dokumenmutu' }">Dokumen Mutu</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'audit' }">Audit Mutu Akademik Internal</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'gpmakreditasi' }">Akreditasi</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'lamteknik' }">LAM Teknik</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'laporankepuasan' }">Laporan Kepuasan Pengguna</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'surveikepuasan' }">Survei Kepuasan Layanan Mahasiswa</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'galeri' }">Galeri</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">COT</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'cotwebsite' }">COT Website</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'jurnalcot' }">Jurnal COT</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'cotnews' }">COT Newsletter</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'uig' }">U-I-G Collaboration</NuxtLink></ul>
                </div>
            </div>
            <p class="text-2xl">|</p>
            <div class="relative group pt-1">
                <a href="#" class="px-5 hover:text-amber-600 group-hover:text">Dharma Wanita</a>
                <div class="text-left absolute hidden text-white group-hover:block w-max px-5 py-2 rounded shadow-lg fixed" style="background-color: rgb(31, 52, 115)">
                    <ul class="py-2"><NuxtLink :to="{ name: 'utamadharmawanita' }">Halaman Utama Dharma Wanita</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'profildharmawanita' }">Profil Dharma Wanita</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'strukturdharmawanita' }">Struktur Organisasi Dharma Wanita</NuxtLink></ul>
                    <ul class="py-2"><NuxtLink :to="{ name: 'kegiatandharmawanita' }">Kegiatan Dharma Wanita</NuxtLink></ul>
                </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- navbar end -->
</template>