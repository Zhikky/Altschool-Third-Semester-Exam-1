<template>
  <section className="error">
    <h1>404 Page</h1>
    <p>PageNotFound</p>
    <!-- <button onClick={handleNavigate} className="return-home-button" >
       Return to Home page
      </button> -->
  </section>
</template>

<script>
export default {
  name: "NotFoundComponent",
};
</script>

<style>
.return-home-button {
  margin-top: 20px;
  padding: 7px 5px;
  background: linear-gradient(60deg, #543ab7 0%, #00acc1 100%);
  border-radius: 5px;
  border: 0px;
  color: white;
}

.return-home-button:hover {
  transform: scale(1.05);
}

.error {
  margin-left: 20px;
}

</style>
