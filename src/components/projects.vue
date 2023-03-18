<template>
  <div class="project-container">
    <div class="scroller" id="scroller">
      <div class="title" id="title">PROJECTS</div>
      <div class="repolist">
        <div v-for="(repo, index) in displayedRepos" :key="index" class="card">
          <div class="card-wrapper">
            <div class="top">
              <i class="fa-solid fa-book"></i>
              <div class="flexrow">
                <i class="fa-brands fa-github"></i>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>

            <div class="name">{{ repo.name }}</div>
            <div class="desc">{{ repo.description }}</div>

            <div class="bottom">
              <div class="flex-between">
                <div class="size">{{ repo.size.toLocaleString() }} KB</div>
                <div class="flex-row">
                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    &nbsp;{{ repo.stargazers_count }}
                  </div>
                  <div class="forks">
                    <i class="fa-solid fa-code-fork"></i>
                    &nbsp;{{ repo.forks_count }}
                  </div>
                </div>
              </div>
              <!-- <LanguagesContainer :languages="languages" :langColors="langColors" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pagination">
    <div>
      <label for="repos-per-page-select">Showing </label>
      <select id="repos-per-page-select" v-model="reposPerPage">
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <label>{{ repos.length }}</label>
    </div>

    <div class="page-number-container">
      <button class="pagination-button" @click="prevPage()">
    <i class="fa-solid fa-angle-left"></i></button>
      <button
        class="pagination-button"
        v-for="page in pages"
        :key="page"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button class="pagination-button" @click="nextPage()"> <i class="fa-solid fa-angle-right"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      repos: [],
      displayedRepos: [],
      currentPage: 1,
      reposPerPage: 4,
      totalPages: 0,
      options: [
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
      ],
    };
  },
  computed: {
    displayedRepos() {
      const startIndex = (this.currentPage - 1) * this.reposPerPage;
      const endIndex = startIndex + this.reposPerPage;
      return this.repos.slice(startIndex, endIndex);
    },
    pages() {
      return Math.ceil(this.repos.length / this.reposPerPage);
    },
  },
  methods: {
    getRepos() {
      fetch("https://api.github.com/users/zhikky/repos")
        .then((response) => response.json())
        .then((data) => {
          this.repos = data;
        })
        .catch((error) => console.log(error));
    },
    changePage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      } else {
        this.currentPage = 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.pages) {
        this.currentPage += 1;
      } else {
        this.currentPage = this.pages;
      }
    },
  },
  mounted() {
    this.getRepos();
  },
  watch: {
    reposPerPage() {
      this.currentPage = 1; // reset to first page when changing repos per page
      this.getRepos(); // fetch the repositories again with the new value
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap");
.project-container {
  width: 90%;
  /* border: 0.5px solid; */
  box-sizing: border-box;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 20%);
  margin: auto;
  border-radius: 5px;
}

.scroller {
  display: block;
}

.repolist {
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.title {
  font-weight: bold;
  font-size: 30px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  color: #f9004d;
  margin: 20px 0px 40px 0px;
}
.container {
  widows: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.card {
  display: block;
  box-sizing: border-box;
  box-shadow: 2px 2px 8px 0 rgba(255, 255, 255, 0.509);
  border-radius: 5px;
  background-color: #fff;
  margin: 0.5rem;
  padding: 0.5rem;
}

.card-wrapper {
  display: block;
  width: 16rem;
  height: 16rem;
  position: relative;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.bottom {
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: column;
  bottom: 0;
}

.name {
  display: block;
  font-family: Roboto Slab, serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  margin-top: 5px;
}

.desc {
  display: flex;
  text-align: center;
  font-family: Nunito, sans-serif;
  color: #2d2c2c;
  font-size: 16px;
  line-height: 28px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.flex-row,
.flexrow {
  display: flex;
  flex-direction: row;
}

.stars,
.forks {
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.fa-arrow-up-right-from-square {
  margin-left: 5px;
}

.pagination {
  display: flex;
  margin: 20px 0px;
  width: 90%;
  height: 30px;
  justify-content: space-between;
  align-self: center;
}

.pagination > div > label {
  color: #ffffff;
  margin-top: 0px;
  font-size: 14px;
}

.pagination > div > label:nth-child(3) {
  margin-left: 5px;
}

.pagination > div > select {
  width: 70px;
  border-radius: 4px;
  height: 25px;
  border: 0px;
  appearance: text;
  padding-left: 12px;
}

.page-number-container {
  width: auto;
  height: 24px;
  display: flex;
  justify-content: space-between;
}

.pagination-button{
    width: 24px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
}
</style>
