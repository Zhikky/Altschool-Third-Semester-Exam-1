<template>
  <div class="about-container">
    <div class="about-header">
      <span>Features</span>
      <h2>What I Do</h2>
    </div>
    <div class="feature-container">
      <div class="feature-box">
        <div class="feature">
          <div class="feature-icon">
            <i class="fa-solid fa-pen-fancy"></i>
          </div>
          <div class="feature-text">
            <div>
              <h3>Design Implementation</h3>
              <span>
                Creating web applications with creative and functional UI using
                HTML, CSS and JavaScript.
              </span>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="feature-icon">
            <i class="fa-solid fa-book-open"></i>
          </div>
          <div class="feature-text">
            <div>
              <h3>Performance Optimization</h3>
              <span>
                Developing and deploying software interfaces with quick and
                well-optimized functionalities.
              </span>
            </div>
          </div>
        </div>

        <div class="feature">
          <div class="feature-icon">
            <i class="fa-solid fa-tv"></i>
          </div>
          <div class="feature-text">
            <div>
              <h3>App Development</h3>
              <span>
                Utilizing effective Javascript tools and frameworks like React,
                Vue, and Next Js, in creating and developing multi-page,
                sophisticated web apps.
              </span>
            </div>
          </div>
        </div>

        <div class="feature">
          <div class="feature-icon">
            <i class="fa-solid fa-bug"></i>
          </div>

          <div class="feature-text">
            <div>
              <h3>Testing and Debugging</h3>
              <span>
                Identifying and debugging errors and issues to guarantee proper
                applications functions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-header {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.about-header > h2 {
  margin: 20px 0px 50px 0px;
  font-size: 38px;
  line-height: 50px;
}

.about-header > span {
  text-transform: uppercase;
  color: #f9004d;
  letter-spacing: 2px;
  line-height: 14px;
  font-weight: 500;
}

.feature-container {
  /* background-color: red; */
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.feature-box {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px auto;
  justify-content: center;
  /* align-items: center; */
}

.feature {
  border-radius: 10px;
  background: linear-gradient(145deg, #eae7e7, #ffffff);
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 35% 65%;
  margin: 1.5rem;
  /* padding: 0.5rem; */
  width: 20rem;
  height: 18rem;
}

.fa-tv,
.fa-book-open,
.fa-pen-fancy,
.fa-bug,
.feature-icon .fa-bars {
  color: #f9004d;
  transform: scale(2.6);
}

.feature-icon {
  display: flex;
  margin-left: 40px;
  align-items: center;
}

.feature-text {
  color: black;
  display: flex;
  justify-content: center;
}

.feature-text div {
  width: 93%;
  /* text-align: justify; */
}

.feature-text h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
  font-family: "Roboto Slab", serif;
}

.feature-text span {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 28px;
  color: rgb(45, 44, 44);
}

@media screen and (max-width: 740px) {
  .feature {
    width: 100%;
  }
}

@media screen and (min-width: 741px) and (max-width: 1024px) {
  .feature-box {
    width: auto;
  }
}
</style>
