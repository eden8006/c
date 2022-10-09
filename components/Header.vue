<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <nuxt-link :to="{ path: '/' }">
          <div class="logo"><img src="images/pc/home/logo.png" alt=""></div>
        </nuxt-link>
        <div class="left-right">
          <nuxt-link :to="{ path: '/' }">
            <div class="menu"><span>Home</span><div class="line"></div></div>
          </nuxt-link>
          <nuxt-link :to="{ path: '/menu' }">
            <div class="menu" ><span><i class="triangle">Products</i></span><div class="line"></div></div>
            
          </nuxt-link>
          <nuxt-link :to="{ path: '/aboutUs' }">
            <div class="menu" style="margin-left: 36px;"><span>Pricing</span><div class="line"></div></div>
          </nuxt-link>
          <nuxt-link :to="{ path: '/contact' }">
            <div class="menu"><span><i class="triangle">Company</i></span><div class="line"></div></div>
          </nuxt-link>
        </div>
      </div>
      <div class="right">
        <button>Get Started</button>
        <span>Sign in</span>
        <div class="img-box"><img src="images/pc/home/language.png" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {},
  created () {
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  .header {
    position: relative;
    width: 1920px;
    height: 80px;
    background-color: #fff;
    box-sizing: border-box;
    .left{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 673px;
      height: 80px;
      margin-left: 240px;
      .left-right{
        display: flex;
        // justify-content: space-around;
        align-items: center;
        width: 471px;
        .menu {
          position: relative;
          font-size: 16px;
          font-weight: bold;
          color: #000;
          line-height: 80px;
          cursor: pointer;
          text-align: center;
          margin-left: 16px;
          span{
            position: relative;
            display: inline-block;
            height: 80px;
            width: 90px;
            i{
              position: relative;
              font-style: normal;
            }
            .triangle::after{
              position: absolute;
              bottom: 4px;
              right: -16px;
              transform: rotate(180deg);
              content: '';
              border-right:6px solid transparent;
  	          border-left:6px solid transparent;
  	          border-bottom:10px solid #000;
            }
          }
          .line,
          .line::before{
            display: none;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 60px;
            height: 5px;
            background: #E6432D;
            border-radius: 3px;
          }
          .line{
            bottom: 0;
          }
          .line::before{
            top: -75px;
          }
        }
        .menu:hover .line{
          display: block;
        }
        .menu:hover .line::before{
          display: block;
        }
        
      }
      .logo {
        width: 152px;
        height: 33px;
        img{
          height: 100%;
        }
      }
    }
    .right{
      button,
      span,
      .img-box{
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      button{
        right: 240px;
        width: 190px;
        height: 60px;
        background: linear-gradient(90deg, #E6422D 0%, #FFBA35 100%);
        box-shadow: 4px 6px 6px 0px #FFC3BA;
        border-radius: 30px;
        font-size: 20px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #FFFFFF;
      }
      span{
        right: 467px;
        height: 19px;
        font-size: 16px;
        font-weight: 500;
        color: #000000;
      }
      .img-box{
        right: 550px;
        width: 24px;
        height: 24px;
        img{
          width: 100%;
        }
      }
    }
  }
}
</style>
