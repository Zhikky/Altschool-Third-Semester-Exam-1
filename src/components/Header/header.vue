<template>
  <div class="header-content">
    <div class="header-content2">
      <p class="header_text">Hello, I'm</p>
      <h2 class="header_title">Ezekiel Adetuwo</h2>
      <p class="header_text2">and this is my Github Project Portfolio</p>
    </div>
    <div class="logo">
      <div class="logo_container">
        <img
          class="logo_image"
          src="https://s3.eu-west-2.amazonaws.com/documentation.skillreactor.io/personal_images/192061d03d76564319f680e97fa31c02/personal_image"
          alt="logo"
        />
      </div>
    </div>
  </div>
</template>


<style>
.header {
  width: 100%;
  min-height: 700px;
  background-image: url("./pexels-sora-shimazaki-5926370.jpg");
  background-size: cover;
  background-position-y: 65%;
  display: grid;
  grid-template-rows: 15% 85%;
}

.header-content {
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 200px;
}

.header-content2 {
  display: flex;
  flex-direction: column;
}

.header_text,
.header_title,
.header_text2 {
  margin: 0;
}

.header_text,
.header_text2 {
  color: white;
  font-size: 40px;
  font-weight: 200;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

.header_title {
  font-size: 90px;
  font-weight: 700;
  margin: 10px 0px;
  font-family: Abril Fatface;
  color: white;
}

.logo {
  width: 60%;
  height: 50%;
}

.logo_container,
.logo_image {
  width: 250px;
  height: 250px;
}

.logo_container {
  border: 8px solid #333;
  border-radius: 50%;
  animation: float 4s ease-in-out infinite;
}

.logo_image {
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
}

@media screen and (max-width: 767px) {
  .header_title {
    font-size: 70px;
  }

  .logo_container,
  .logo_image {
    width: 170px;
    height: 170px;
  }

  .header{
    min-height: 540px;
  }

  .header-content{
    margin-top: 130px;
  }
}

@media screen and (max-width: 440px) {
  .logo_container,
  .logo_image {
    width: 130px;
    height: 130px;
  }

  .header_title {
    font-size: 55px;
  }

  .header_text,
  .header_text2 {
    font-size: 30px;
  }
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

</style>
