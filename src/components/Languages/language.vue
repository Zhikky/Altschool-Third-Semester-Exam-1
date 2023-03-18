<template>
  <div class="language-container">
    <div data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
      <i class="fa-solid fa-x"></i>
      <div></div>
    </div>

    <div class="skill-container">
      <div>
        <h4>Here are some of my skills.....</h4>
        <div class="skill">
          <div>
            <div data-aos="fade-left" data-aos-delay="10000">
              <i class="fa-brands fa-html5"></i>
            </div>
            <div data-aos="fade-down">
              <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div data-aos="fade-up">
              <i class="fa-brands fa-square-js"></i>
            </div>
            <div data-aos="fade-down">
              <i class="fa-brands fa-react"></i>
            </div>
            <div data-aos="fade-down">
              <i class="fa-brands fa-vuejs"></i>
            </div>
            <div data-aos="fade-right">
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div data-aos="fade-down" data-aos-duration="2000" data-aos-once="true">
      <i class="fa-solid fa-x"></i>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Languages",
};
</script>

<style scoped>
.language-container > div:nth-child(1),
.language-container > div:nth-child(3) {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}

.fa-x {
  align-self: center;
}

.language-container > div:nth-child(1) > div,
.language-container > div:nth-child(3) > div {
  /* background-color: red; */
  height: 100px;
  width: 50%;
  border-right: 1px solid white;
  margin-top: 15px;
  padding-left: 7px;
}

.skill-container {
  width: 90%;
  margin: 0px auto;
  display: flex;
}

.skill-container > div {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;
}

.skill-container > div > h4 {
  margin-bottom: 30px;
  color: rgb(117, 116, 116);
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  display: flex;
}

.fa-html5,
.fa-css3-alt,
.fa-square-js,
.fa-react,
.fa-vuejs,
.fa-github {
  color: white;
  font-size: 90px;
  width: 20px;
  height: 20px;
  margin: 0px 70px 0px 20px;
}

.fa-x {
  font-size: 13px;
  margin-bottom: 5px;
  padding-left: 16px;
}

.skill {
  width: 700px;
  height: auto;
  justify-content: left;
}

.skill > div {
  width: 90%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.skill > div > div {
  margin-top: 35px;
  justify-content: left;
}

@media screen and (max-width: 1024px) {
  .skill {
    max-width: 90vw;
  }
}

</style>
