<template>
  <div class="wrapper">
    <div class="section">
      <div class="swiper-container swiper" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper" ref="swiper">
          <div class="swiper-slide" v-for="(item,index) in List" :key="index" :style="item.background">
            <div class="right-pc"><img :src="item.img" alt=""></div>
            <button class="btn1">Free Trial</button>
            <button class="btn2">Learn More >></button>
            <div class="font-box">
              <h2>Power your Business with AIYA Cloud-based POS System</h2>
              <h4>Improve your customer experience, diversify your revenue streams, and easily scale your business.</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    <div class="section1" style="background:url(images/pc/home/banner.png)">
      <h2>Manage your business with our POS solutions.</h2>
    </div>
    <div class="section2">
      <div class="title">AIYA restaurant point-of-sale, made simple.</div>
      <ul>
        <li v-for="(item,index) in contentList" :key="index">
          <div class="font-box">
            <div class="title1">{{item.title}}</div>
            <div class="box">
              <h2>{{item.h2}}</h2>
              <h4 v-html="item.h4"></h4>
            </div>
          </div>
          <div class="img-box"><img :src="item.img" alt=""></div>
          <button>Free Trial</button>
          <a href="javascript:;">Learn More >></a>
        </li>
      </ul>
    </div>
    <div class="section3" style="background:url(images/pc/home/modular.png)">
      <p>Check out all of our amazing restaurant and retail POS solutions to see what is right for you and your business.</p>
      <a href="javaScript:;">Learn More >></a>
    </div>
    <div class="section4">
      <h2>Why choose AIYA POS?</h2>
      <ul>
        <li v-for="(item,index) in chooseList" :key="index">
          <img :src="item.img" alt="">
          <h3>{{item.h3}}</h3>
          <h4>{{item.h4}}</h4>
        </li>
      </ul>
    </div>
    <div class="section5">
      <div class="font-box">
        <h4>Advantages</h4>
        <h2>Unleash the potential of your restaurant with our powerful POS system</h2>
      </div>
      <ul>
        <li v-for="(item,index) in advList" :key="index">
          <img :src="item.img" alt="">
          <h2>{{item.content}}</h2>
        </li>
      </ul>
    </div>
    <div class="section6" style="background:url(images/pc/home/bg8.png)">
      <h2>Powerful Restaurant Management System</h2>
      <h4>AIYA POS is ANDROID OS-based POS terminal featuring a 15.6” wide touchscreen. Powered by the ARM® technology and run on user-friendly Android OS.</h4>
      <a href="javaScript:;">Read More >></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'PC',
  data(){
    return{
      List:[
        {background:'background:url(images/pc/home/bg2.png)',img:'images/pc/home/bg1.png'},
        {background:'background:url(images/pc/home/bg3.png)',img:'images/pc/home/bg4.png'},
        {background:'background:url(images/pc/home/bg6.png)',img:'images/pc/home/bg7.png'},
      ],
      swiperOption: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        speed: 500,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      contentList:[
        {title:'Point of Sale',img:'images/pc/home/content1.png',h2:'Built to Help You Run Your Business',h4:'AIYA POS desktop hardware kit offers all of the equipment you need to create a clean and modern setup in your store.'},
        {title:'Handheld POS',img:'images/pc/home/content2.png',h2:"Frictionless Payments From Anywhere",h4:"With a mobile point of sale solution, you'll be able to keep up with changing consumer demands and offer fast and frictionless checkout."},
        {title:'Online Ordering & Delivery',img:'images/pc/home/content3.png',h2:'A Branded Online Ordering Website',h4:'Commission-free digital ordering allows you maintain your margins and guest data to save on commissions.'},
        {title:'Contactless Ordering',img:'images/pc/home/content4.png',h2:'Designed for personalized on-premise dining.',h4:'Empower your guests and staff with fast mobile pay and a digital menu.'},
        {title:'Table Kiosk',img:'images/pc/home/content5.png',h2:'Restaurant Self-Ordering Kiosks.',h4:'Proven to reduce wait times, AIYA table kiosks put guests in control of their dining experience and free up staff to handle other duties.'},
        {title:'Marketing',img:'images/pc/home/content6.png',h2:'All your restaurant marketing tools are in one place.',h4:'Build loyalty.<br />Increase sales.<br />Get more customers.'},
      ],
      chooseList:[
        {img:'images/pc/home/Group1.png',h3:'Always Available',h4:'24/7 multi-language customer support, keeping your business running.'},
        {img:'images/pc/home/Group2.png',h3:'Competitive Pricing',h4:'We have created a range of affordable hardware packages that encompass everything that you need to get started.'},
        {img:'images/pc/home/Group3.png',h3:'Simple Training Procedures',h4:"Don't worry about the high staff turnover rate, our technical supporting team can streamline the training process and get your new staff up to speed in no time."},
        {img:'images/pc/home/Group4.png',h3:'All-in-one Platform',h4:'Instead of using different platform for different functions, we have combined all of them together into our powerful POS.'},
      ],
      advList:[
        {img:'images/pc/home/maskGroup1.png',content:'Create extraordinary guest experiences through contactless technology.'},
        {img:'images/pc/home/maskGroup2.png',content:'Empower your staff with integrated portable POS technology.'},
        {img:'images/pc/home/maskGroup3.png',content:'Make quick changes with cloud-based back-of-house restaurant systems.'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  box-sizing: border-box;
  width: 1920px;
  .section{
    position: relative;
    width: 100%;
    height: 900px;
    .swiper-container{
      width: 100%;
      height: 100%;
      .swiper-wrapper{
        width: 100%;
        height: 100%;
        .swiper-slide{
          position: relative;
          width: 100%;
          height: 100%;
          .right-pc{
            position: absolute;
            top: 220px;
            right: 240px;
            width: 462px;
            height: 359px;
            img{
              width: 100%;
            }
          }
          .btn1,
          .btn2{
            cursor: pointer;
            position: absolute;
            top: 632px;
            border-radius: 100px;
            font-size: 28px;
            font-family: Montserrat-SemiBold;
            font-weight: 600;
            height: 60px;
          }
          .btn1{
            left: 240px;
            width: 214px;
            background: linear-gradient(90deg, #E6422D 0%, #FFBA35 100%);
            color: #FFFFFF;
            line-height: 33px;
          }
          .btn2{
            left: 484px;
            width: 284px;
            border: 2px solid #FE7534;
            color: #FE7534;
          }
          .font-box{
            h2{
              position: absolute;
              top: 220px;
              left: 240px;
              width: 927px;
              height: 160px;
              font-size: 60px;
              font-family: Montserrat-Bold;
              font-weight: bold;
              color: #111111;
            }
            h4{
              position: absolute;
              top: 418px;
              left: 240px;
              width: 650px;
              height: 80px;
              font-size: 22px;
              font-family: Montserrat-Regular;
              font-weight: 400;
              color: #111111;
            }
          }
        }
      }
    }
    .swiper-pagination{
      position: absolute;
      left: 50%;
      bottom: 70px;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      width: 84px;
      height: 20px;
      z-index: 999;
      /deep/ .swiper-pagination-bullet{
        width: 20px;
        height: 20px;
        background: #E6E6E6;
        opacity: 1;
      }
      /deep/ .swiper-pagination-bullet-active{
        background: #FE6319;
      }
    }
  }
  .section1{
    width: 1920px;
    height: 240px;
    h2{
      height: 240px;
      font-size: 46px;
      font-family: Roboto-Bold;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
      line-height: 240px;
    }
  }
  .section2{
    width: 1920px;
    height: 2842px;
    .title{
      height: 60px;
      font-size: 40px;
      font-family: Montserrat-Bold;
      font-weight: bold;
      color: #111111;
      line-height: 60px;
      text-align: center;
      margin-top: 116px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 130px auto 0;
      width: 1264px;
      height: 2514px;
      li{
        position: relative;
        width: 450px;
        height: 838px;
        .font-box{
          .title1{
            width: 100%;
            height: 40px;
            font-size: 32px;
            font-family: Montserrat-Medium;
            font-weight: 500;
            color: #000000;
            text-align: center;
            line-height: 40px;
          }
          .box{
            margin-top: 400px;
            width: 100%;
            height: 180px;
            h2,
            h4{
              font-size: 20px;
              font-family: Montserrat-Regular;
              font-weight: 400;
              color: #444444;
              line-height: 30px;
            }
            h4{
              margin-top: 35px;
            }
          }
        }
        .img-box{
          position: absolute;
          top: 90px;
          width: 450px;
          height: 300px;
          img{
            width: 100%;
          }
        }
        button{
          cursor: pointer;
          margin-top: 50px;
          left: 0;
          width: 214px;
          height: 80px;
          background: linear-gradient(90deg, #E6422D 0%, #FFBA35 100%);
          border-radius: 100px;
          font-size: 28px;
          font-family: Montserrat-SemiBold;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 33px;
        }
        a{
          cursor: pointer;
          width: 204px;
          height: 34px;
          font-size: 28px;
          font-family: Montserrat-SemiBold;
          font-weight: 600;
          color: #FE7534;
          line-height: 33px;
          margin-left: 35px;
        }
      }
    }
  }
  .section3{
    position: relative;
    width: 1920px;
    height: 360px;
    p,
    a{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-family: Montserrat-SemiBold;
      font-weight: 600;
    }
    p{
      top: 106px;
      width: 871px;
      height: 108px;
      font-size: 26px;
      color: #FFFFFF;
      line-height: 54px;
      text-align: center;
    }
    a{
      top: 261px;
      height: 34px;
      font-size: 28px;
      color: #FE7534;
      line-height: 33px;
    }
  }
  .section4{
    position: relative;
    width: 1920px;
    height: 1250px;
    h2{
      position: absolute;
      top: 120px;
      left: 50%;
      transform: translateX(-50%);
      width: 944px;
      height: 60px;
      font-size: 40px;
      font-family: Montserrat-Bold;
      font-weight: bold;
      color: #111111;
      line-height: 60px;
      text-align: center;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      position: absolute;
      top: 280px;
      left: 50%;
      transform: translateX(-50%);
      width: 1440px;
      height: 830px;
      li{
        position: relative;
        width: 670px;
        height: 380px;
        box-shadow: 0px 10px 40px 0px rgba(0,0,0,0.1);
        border-radius: 16px;
        img{
          position: absolute;
          top: 37px;
          left: 40px;
          width: 60px;
        }
        h3{
          position: absolute;
          top: 131px;
          left: 40px;
          height: 34px;
          font-size: 32px;
          font-family: Montserrat-SemiBold;
          font-weight: 600;
          color: #000000;
          line-height: 36px;
        }
        h4{
          position: absolute;
          top: 206px;
          left: 40px;
          width: 610px;
          height: 75px;
          font-size: 20px;
          font-family: Roboto-Regular;
          font-weight: 400;
          color: #666666;
          line-height: 40px;
        }
      }
    }
  }
  .section5{
    position: relative;
    width: 1920px;
    height: 960px;
    background: #111111;
    .font-box{
      h4{
        position: absolute;
        top: 80px;
        left: 244px;
        width: 144px;
        height: 28px;
        font-size: 24px;
        font-family: Montserrat-Regular;
        font-weight: 400;
        color: #FF7533;
        line-height: 28px;
      }
      h2{
        position: absolute;
        top: 130px;
        left: 244px;
        width: 840px;
        height: 120px;
        font-size: 40px;
        font-family: Montserrat-Bold;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 60px;
      }
    }
    ul{
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 240px;
      top: 350px;
      width: 1680px;
      height: 510px;
      li{
        width: 500px;
        height: 510px;
        img{
          width: 500px;
          cursor: pointer;
        }
        h2{
          width: 500px;
          height: 80px;
          font-size: 20px;
          font-family: Montserrat-Regular;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 40px;
          margin-top: 50px;
        }
      }
    }
  }
  .section6{
    position: relative;
    width: 1920px;
    height: 636px;
    h2{
      position: absolute;
      top: 100px;
      left: 394px;
      width: 650px;
      height: 120px;
      font-size: 40px;
      font-family: Montserrat-Bold;
      font-weight: bold;
      color: #111111;
      line-height: 60px;
    }
    h4{
      position: absolute;
      top: 270px;
      left: 394px;
      width: 801px;
      height: 120px;
      font-size: 20px;
      font-family: Montserrat-Regular;
      font-weight: 400;
      color: #666666;
      line-height: 40px;
    }
    a{
      position: absolute;
      top: 426px;
      left: 394px;
      width: 197px;
      height: 34px;
      font-size: 28px;
      font-family: Montserrat-SemiBold;
      font-weight: 600;
      color: #FE7534;
      line-height: 33px;
    }
  }
}
</style>
