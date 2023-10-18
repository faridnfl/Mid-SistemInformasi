<template>
  <header
    style="background-color: rgb(19, 58, 98); padding: 15px 15px; height: 90px"
  >
    <div class="header-logo">
      <img src="/unhas_id.png" alt="logo" style="height: 35px; width: 250px" />
    </div>
    <div class="header-dropdown">
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        POFIL
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        AKADEMIK
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        SUMBER DAYA
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        KEMAHASISWAAN
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        RISET DAN INOVASI
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        KEMITRAAN
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        GPM-PR
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        COT
      </p>
      <p
        style="
          font-family: Roboto;
          color: white;
          font-size: 16px;
          float: left;
          margin-left: 10px;
        "
      >
        DHARMA WANITA
      </p>
    </div>
    <div class="header-language">
      <p
        style="
          font-family: Roboto;
          color: white;
          float: left;
          margin-top: 4px;
          font-size: 12px;
        "
      >
        INA
      </p>
      <img
        src="/indonesia-flag.png"
        alt="indo"
        style="float: left; width: 25px; height: 25px; margin-left: 5px"
      />
      <p
        style="
          font-family: Roboto;
          color: white;
          float: left;
          margin-top: 4px;
          margin-left: 10px;
          font-size: 12px;
        "
      >
        ENG
      </p>
      <img
        src="/english.png"
        alt="english"
        style="
          float: left;
          width: 25px;
          height: 15px;
          margin-top: 4px;
          margin-left: 5px;
        "
      />
    </div>
  </header>

  <body>
    <div class="judul">
      <h1>SELAMAT DATANG DI FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN</h1>
    </div>
    <div class="sambutan">
      <img src="/dekan.png" alt="Dekan FT-UH" style="width: 250px;"/>
      <div class="ucapan">
        <h1>SAMBUTAN DEKAN</h1>
        <p>
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
        <p>Wassalam.</p>
        <h2>Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN Eng.</h2>
      </div>
    </div>
  </body>
</template>

<style scoped>
.header-logo {
  float: left;
  margin-top: 7px;
}

.header-dropdown {
  width: 930px;
  float: left;
  margin-top: 17px;
  margin-left: 10px;
}

.header-language {
  width: 120px;
  float: left;
  margin: 15px 10px;
}
.judul {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.judul h1 {
  padding: 1.5rem;
  text-align: center;
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
}

.sambutan {
  background-color: coral;
  display: flex;
  
  padding: 2rem 15%;
}
.sambutan .ucapan {
  padding-left: 2.5rem;
  color: white;
}
.ucapan h1 {
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
}
.ucapan p {
  font-size: 15px;
  padding-bottom: 10px;
}
.ucapan h2 {
  font-size: 23px;
  font-weight: 700;
}

</style>
