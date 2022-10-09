<template>
  <!-- footer -->
  <footer id="footer">
    <ul class="FlexBet">
      <li>
        <p class="f-title">Website Customization</p>
        <p class="f-text">Agile Development</p>
        <p class="f-text">Windows App</p>
        <p class="f-text">Java Development</p>
        <p class="f-text">Testing & QA</p>
        <p class="f-text">JavaScript Development</p>
        <p class="f-text">UI/UX Design</p>
      </li>
      <li>
        <p class="f-title">AIYA Products & Services</p>
        <p class="f-text">AIYA POS</p>
        <p class="f-text">AIYA Order</p>
        <p class="f-text">AIYA Pad</p>
        <p class="f-text">AIYA Robot</p>
        <p class="f-text">AIYA Marketing Services</p>
      </li>
      <li>
        <p class="f-title">Online Platform Development</p>
        <p class="f-text">Customized CRM</p>
        <p class="f-text">E-commerce System</p>
        <p class="f-text">Office Automation System</p>
        <p class="f-text">Enterprise Management System</p>
        <p class="f-title" style="margin-top: 75px">Mobile App Development</p>
        <p class="f-text">Cloud Migration & Deployment</p>
        <p class="f-text">Application Test</p>
        <p class="f-text">Continuous Operation Support</p>
      </li>
      <li>
        <p class="f-title">Sign up for Our Newsletter</p>
        <input class="mail" type="tetx" v-model="email" @keydown.enter="onSubmit"
          placeholder="Your Email Address here ..." />
        <div class="f-btn pointer" @click="onSubmit"><span>SUBMIT</span></div>
        <p class="f-title" style="margin-top: 87px">Sign up for Our Newletter</p>

        <p class="f-text FlexVC">
          <img class="icon" src="images/pc/footer/phone.png" />
          888-622-0811
        </p>

        <p class="f-text FlexVC">
          <img class="icon" src="images/pc/footer/email.png" />marketing@aiya.us
        </p>

        <p class="f-text FlexVC">
          <img class="icon" src="images/pc/footer/address.png" />
          36-18 Main St, 12th Floor Flushing, NY 11354
        </p>
      </li>
    </ul>
    <div class="aiya">
      <div class="left-logo"><img src="images/pc/footer/AIYA-LOGO-en.png" alt=""></div>
      <p>Copyright © 2021. AIYA Technology System, LLC</p>
    </div>
  </footer>
</template>

<script>
import {sendOnlyEmail} from "@/plugins/http";
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      email: null,
      year: new Date().getFullYear(),
    };
  },
  methods: {
    onSubmit() {
      if (!this.email) {
        alert("The email address can not be empty!");
        return;
      }
      sendOnlyEmail({ email: this.email }, this.callback);
    },
    callback(xhr, res) {
      try {
        if (xhr.readyState == 4 && xhr.status == 200) {
          if (res.code === 200) {
            alert("Successful!");
            this.email = null;
          }
        } else if (xhr.status == 510) {
          alert(res.message);
        } else if (xhr.status == 500) {
          alert("The email address already exists!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pl-50 {
  padding-left: 50px;
}

.f-title {
  .text("Roboto", 20px, 500, #333, left);
  margin-bottom: 45px !important;
}

.f-text {
  .text("Roboto", 16px, 400, #777, left);
  margin-bottom: 35px !important;
  white-space: nowrap;
}

.icon {
  width: 15px;
  margin-right: 11px;
}

#footer {
  padding: 119px 241px 0 248px;
  background: #f7f7f7;

  ul {
    li {
      flex: 0 0 20%;
    }

    .f-btn {
      position: relative;
      width: 340px;
      height: 78px;
      background: #000000;
      border: 2px solid #000000;
      border-radius: 39px;
      box-sizing: border-box;
      line-height: 78px;
      transition-timing-function: ease;
      .text("Roboto", 24px, 500, #FFFFFF);
      transition: 0.8s;
      overflow: hidden;

      span {
        position: relative;
        z-index: 10;
      }

      &::after {
        position: absolute;
        content: "";
        transition: 0.8s;
        width: 50px;
        height: 50px;
        background: #fff;
        transition-timing-function: ease;
        box-shadow: 0 0 10px 5px #fff;
        border-radius: 50%;
        left: 40%;
        transform: scale(0);
        bottom: -60px;
      }

      &:hover {
        color: #000;
      }

      &:hover::after {
        transform: scale(10);
      }
    }

    input::-webkit-input-placeholder {
      color: #666;
    }

    input.mail {
      width: 342px;
      height: 80px;
      line-height: 80px;
      border: 4px solid #111111;
      border-radius: 39px;
      margin-bottom: 29px;
      padding: 32px 40px;
      background: transparent;
      .text("Roboto", 20px, 400, #666, left);
      outline: none;
      box-sizing: border-box;
    }
  }

  .aiya{
    position: relative;
    border-top: 1px solid #e8e8e8;
    width: 1460px;
    height: 120px;
    .left-logo{
      margin-top: 35px;
      width: 150px;
      height: 50px;
      img{
        height: 100%;
      }
    }
    p{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      .text("Roboto", 16px, 400, #777, left);
    }
  }
}

</style>
