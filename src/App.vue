<script setup>
// import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header/header.vue";
import Navbar from "./components/Header/navbar.vue";
import Projects from "./components/projects.vue";
import Languages from "./components/Languages/language.vue";
import About from "./components/About/about.vue";
import Contact from "./components/Contact/contact.vue";
</script>

<template>
  <div className="App">
    <div className="home-container">
      <section className="header" id="home">
        <Navbar />
        <Header />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="language">
        <Languages />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
    </div>
  </div>
</template>

<style>
.projects {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 100px;
}

.language {
  width: 100%;
  min-height: 540px;
  margin-top: 100px;
}

.about {
  color: white;
  width: 100vw;
  height: auto;
  padding: 100px 0px 50px 0px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #3a3a3a;
}

.contact {
  margin-top: 100px;
}
</style>
