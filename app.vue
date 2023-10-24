<template>
<div>
  <header class="p-4 h-24 flex items-center justify-between" style="margin-top: 40px; background-color: rgb(26, 44, 98);">
    <div class="flex items-center">
      <img src="/unhas_id.png" alt="logo" class="h-12 w-64 flex" />
      <div class="navbar space-x-6 p-8 text-white text-xl flex whitespace-nowrap">
        <a href="">PROFIL</a>
        <a href="">AKADEMIK</a>
        <a href="">SUMBER DAYA</a>
        <a href="">KEMAHASISWAAN</a>
        <a href="">RISET DAN INOVASI</a>
        <a href="">KEMITRAAN</a>
        <a href="">GPM-PR</a>
        <a href="">COT</a>
        <a href="">DHARMA WANITA</a>
      </div>
    </div>
  </header>
</div>

<div>
  <!-- Header Kedua -->
  <header class="p-4 h-10 flex items-center justify-center" style="background-color:  rgb(23, 38, 86);">
    
  </header>
</div>


  <body>
    <section class="judul min-h-screen flex items-center place-content-center bg-cover bg-center">
      <h1 class="h-12 text-center text-white font-medium flex" style="font-size: 2.5rem; text-shadow: 8px 6px 4px rgba(0, 0, 0, 20);">SELAMAT DATANG DI FAKULTAS <br> TEKNIK UNIVERSITAS HASANUDDIN</h1>
    </section>
    <div class="sambutan flex pt-20 pb-20 mb-8"  style="background-color:  rgb(26, 46, 107);">
      <div class="flex  mx-auto" style="width: 1270px;">
        <div class="foto flex  " style="width: 550px;">
          <img src="/dekan.png" alt="Dekan FT-UH" class=" rounded-3xl flex max-w-full h-full" style="height: 450px;" />
        </div>
      <div class="ucapan ml-10 text-white  w-full">
        <h1 class="text-3xl font-bold ">SAMBUTAN DEKAN</h1>
        <p class="mt-6 text-justify " style="font-size: 20px;">
          Assalamu Alaikum Wr. Wb. Puji syukur kehadirat Tuhan Yang Maha Kuasa
          atas limpahan rahmat dan hidayah-Nya sehingga informasi tentang
          Fakultas Teknik Unhas melalui situs web ini dapat terwujud. Besar
          harapan kita semoga ridho-Nya menyertai segala aktifitas dalam upaya
          pembinaan sumber daya manusia dalam bidang teknologi dan semoga
          informasi melalui web ini dapat berguna bagi semua pihak. Kami dari
          semua civitas akademika Fakultas Teknik dengan semua dukungan komponen
          perguruan tinggi yang ada akan terus meningkatkan pencapaian menuju
          terwujudnya visi dan misi yang telah dicanangkan dalam rencana
          strategis fakultas. Semoga informasi yang diberikan lewat layanan
          website ini dapat memberikan gambaran situasi dan kondisi Fakultas
          Teknik kepada semua lapisan masyarakat. Selamat Datang di Fakultas
          Teknik Universitas Hasanuddin.
        </p>
        <p class="mt-6" style="font-size: 22px;">Wassalam.</p>
        <h2 class="font-bold text-2xl">Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN Eng.</h2>
      </div>
      </div>
    </div>
    <section class="galeri flex justify-center relative h-48">
      <div class="content offside max-w-screen-xl w-full bg-white border rounded-t-xl overflow-hidden min-h-full">
        <h1 class="text-2xl font-bold py-5 text-center">Galeri</h1>
      </div>
    </section>
    <section class="dharma-wanita warna justify-center bg-orange-400 px-40">
      <div class="content w-full">
        <h1 class="text-2xl font-bold py-5 text-center text-white">DHARMA WANITA</h1>
      </div>
      <div class="flex gap-8">
        <img src="/dharma-wanita.png" alt="Dharma Wanita" class="rounded-2xl" style="height: 250px;"> 
        <p class="text-white text-lg font-medium pt-20">
          Dharma Wanita Persatuan Fakultas Teknik Unhas yang diketuai oleh Ny. Muralia Isran Ramli, 
          aktif melakukan berbagai macam kegiatan seperti amaliah ramadhan, 
          arisan di kapal, kegiatan BKMT dan DPW Unhas.
        </p>
      </div>
      <div class="grid justify-items-end">
        <button style="background-color: rgb(19, 58, 98); color: white;">SELENGKAPNYA</button>
      </div>
    </section>
    <section class="berita flex justify-center relative h-48">
      <div class="content offside max-w-screen-xl w-full bg-white border rounded-t-xl overflow-hidden h-full">
        <h1 class="text-2xl font-bold py-5 text-center">Disini Berita</h1>
      </div>
    </section>
    <section class="informasi flex justify-center bg-orange-400" >
      <div class="content max-w-screen-xl w-full ">
        <h1 class="text-2xl font-bold py-5 text-center">Disini Informasi</h1>
      </div>
    </section>
    <section class="map flex justify-center">
      <div class="content max-w-screen-xl w-full bg-white">
        <h1 class="text-2xl font-bold py-5 text-center">Disini Site Map</h1>
      </div>
    </section>
    
  </body>
</template>

<style scoped>
body {
  background-color: #e8e4e4;
}

header {
  position: fixed;
  width: 100%;
  z-index: 10;
}

header .navbar a:hover{
  color: red;
}

.warna{
  padding-bottom: 6rem;
}
.offside{
  position: absolute;
  top: -70px;
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
</style>
