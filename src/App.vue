<template>
  <div id="app" class="wrapper">
    <div class="tabs">
      <div class="tab-item">
        <img :src="getIcon(0)" class="tab-item-img" />
        <!-- <div>哈哈哈</div> -->
        <router-link to="/">快快快</router-link>
      </div>
      <div class="tab-item">
        <img :src="getIcon(1)" class="tab-item-img" />
        <router-link to="/Friend">我的</router-link>
      </div>
      <div class="tab-item">
        <img :src="getIcon(2)" class="tab-item-img" />
        <router-link to="/Mine">朋友</router-link>
      </div>
      <div class="tab-item">
        <img :src="getIcon(3)" class="tab-item-img" />
        <router-link to="/User">账号</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import VFooter from "@/components/VFooter/VFooter.vue";

export default {
  data() {
    return {
      curIndex: 0,
      imgSrc: require("./assets/imgs/icon_user.png")
    };
  },
  components: {
    // VFooter
  },
  methods: {
    test() {
      console.log("pppppppp");
    },
    getIcon(index) {
      switch (index) {
        case 0:
          return this.curIndex === index
            ? require("./assets/imgs/icon_find.png")
            : require("./assets/imgs/icon_find_default.png");
        case 1:
          return this.curIndex === index
            ? require("./assets/imgs/icon_my.png")
            : require("./assets/imgs/icon_my_default.png");
        case 2:
          return this.curIndex === index
            ? require("./assets/imgs/icon_friend.png")
            : require("./assets/imgs/icon_friend_default.png");
        case 3:
          return this.curIndex === index
            ? require("./assets/imgs/icon_user.png")
            : require("./assets/imgs/icon_user_default.png");
      }
      return require("./assets/imgs/icon_user.png");
    }
  },
  itemClick(index) {
    console.log("jjjjjjj", index);
  }
};
</script>

<style lang="scss">
.wrapper {
  height: 100%;

  .test {
    height: 20px;
  }
  .tabs {
    position: absolute;
    display: flex;
    flex-direction: row;
    background-color: #fafafa;
    height: 50px;
    bottom: 0;
    left: 0;
    right: 0;

    .tab-item {
      flex: 1;
      text-align: center;

      .tab-item-img {
        width: 24px;
        height: 24px;
      }

      a {
        display: block;
        font-size: 12px;
        color: rgb(77, 85, 93);
        text-decoration: none;
        &:active {
          font-size: 12px;
          color: rgb(37, 17, 17);
        }
      }
    }
  }
}
</style>
