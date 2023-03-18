<template>
  <div :class="[{ scrolled }]" id="navbar-container">
    <div class="name">
      <a href="#">Ezekiel Adetuwo</a>
    </div>
    <input type="checkbox" id="toggler" />
    <label for="toggler">
      <i class="fa-solid fa-bars"></i>
    </label>
    <div
      class="link-container"
      data-aos="slide-down"
      data-aos-duration="500"
      data-aos-once="false"
    >
      <ul id="nav">
        <li>
          <a @click="scrollTo('home')">Home</a>
        </li>
        <li>
          <a @click="scrollTo('about')">About</a>
        </li>
        <li>
          <a @click="scrollTo('projects')">Projects</a>
        </li>
        <li>
          <a @click="scrollTo('contact')">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 50) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    scrollTo(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
#navbar-container {
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-between;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  position: fixed;
  z-index: 10;

  scroll-behavior: smooth;
}

.scrolled {
    background-color: #222121;
}

.link-container {
  display: flex;
  justify-content: center;
  width: 60%;
  background-color: inherit;
}

.name {
  display: flex;
  align-items: center;
}

.name > a {
  height: 70px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 0px;
}

#nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.fa-bars, .fa-x {
  color: white;
}

#nav > li {
  margin: 5px auto;
  color: rgba(255, 255, 255, 0);
}

a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

#toggler,
#navbar-container label {
  display: none;
  margin-right: 20px;
}

.fa-bars{
  font-size: 30px;
}

@media screen and (max-width: 767px) {
  .link-container {
    width: 100%;
    overflow: hidden;
    display: none;
    border-top: 3px solid #18181834;
    transition: all 1s ease-in-out;
  }

  #nav {
    flex-direction: row;
    align-items: center;
    padding: 5px;
  }

  #nav > li {
    margin: 10px auto;
    color: rgba(93, 30, 30, 0);
  }


  .name > a {
    font-size: 25px;
  }

  li > a {
    font-size: 12px;
  }

  #navbar-container {
    width: 100vw;
  }

  #navbar-container label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  #toggler:checked ~ .link-container {
    display: flex;
  }
}

@media screen and (min-width: 768px) and (max-width: 1000px) {
  .name > a {
    font-size: 25px;
  }

  .link-container {
    border-top: 3px solid #18181834;
  }
}

li > a:hover {
  color: #f9004d;
  cursor: pointer;
}

</style>
