<template>
  <div>
    <div>
      <p>CONTACT</p>
      <h2>Contact With Me</h2>
    </div>
    <div class="contact-container">
      <div>
        <div>
          <div>
            <img src="./shake.jpg" alt="" class="shake" />
          </div>
          <div class="contact-text">
            <p>Connect with me via a call or dm to my socials.</p>
            <div>
              <p>Phone: <a href="tel:+2349014992608">+2349014992608</a></p>
              <p>
                Email:
                <a
                  href="mailto:ezeadetuwo@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ezeadetuwo@gmail.com
                </a>
              </p>
            </div>

            <div>
              <p>FIND WITH ME</p>
              <div>
                <a
                  href="https://www.linkedin.com/in/ezekieladetuwo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://twitter.com/EzekielAdetuwo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/zhikky_studios/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <p><i class="far fa-copyright"></i>2023 All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  width: 100vw;
  height: 700px;
}

.contact > div {
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
}

.contact > div > div:nth-child(1) {
  width: inherit;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
}

.contact > div > div:nth-child(1) p {
  color: #f9004d;
}

.contact > div > div:nth-child(1) h2 {
  color: white;
  font-size: 34px;
  margin-top: 20px;
}

.contact-container {
  margin-top: 20px;
  height: 100%;
  display: flex;
}

.contact-container > div {
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-container > div > div {
  width: 40%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 20%);
}

.contact-container > div:nth-child(1) > div {
  display: grid;
  grid-template-rows: 40% 60%;
  grid-template-columns: none;
  align-items: center;
}

.contact-container > div > div > div:nth-child(1) {
  height: 80%;
  width: 90%;
  border-radius: 10px;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shake {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.contact-text {
  width: 95%;
  height: 90%;
  justify-self: center;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: white;
  font-family: Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif;
}

.contact-text > p:nth-child(1) {
  margin-top: auto;
}

.contact-text > div {
  margin: auto 0px;
}

.contact-text > div > p {
  margin-top: 10px;
}

.contact-text > div > p > a {
  color: white;
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  text-transform: lowercase;
  transition: all 0.5s ease-in-out;
}

.contact-text > div > p > a:hover {
  color: #f9004d;
  text-decoration: underline;
}

.fa-instagram,
.fa-twitter,
.fa-linkedin-in {
  color: #f9004d;
  padding: 5px;
  font-size: 26px;
}

.contact-text > div > div {
  width: 30%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.contact-text > div > div > a {
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 20%);
  background-color: rgb(63, 63, 63);
  border-radius: 10px;
}

.footer {
  color: white;
  text-align: center;
  margin: 20px 0px;
}

.fa-copyright {
  margin-right: 5px;
}

@media screen and (max-width: 700px) {
  .contact {
    height: 700px;
  }

  .contact-container {
    height: 100%;
    width: 100%;
    justify-content: center;
  }

  .contact-container > div {
    padding: 0;
    max-width: 90%;
    justify-self: center;
    align-items: center;
  }

  .contact-container > div > div {
    margin: 0;
    width: 100%;
    height: auto;
  }

  .contact-text > div > div {
    width: 40%;
  }
}

@media screen and (max-width: 470px) {
  .contact-container {
    margin-top: 10px;
  }
}
</style>
