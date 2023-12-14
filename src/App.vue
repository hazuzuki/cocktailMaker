<template>
  <div id="app">
    <header>
      <div class="header">
        Cocktail
      </div>  
    </header>

    <!-- <main>
      <router-view :value="showBody" @input="showBody = $event" />

    </main> -->
    <home></home>

    <footer>
      <div class="footer">
        Maker
      </div>  
    </footer>
  </div>
</template>

<script>
import Home from './views/Home.vue'
// コンポーネントをインポートß
export default {
  name: 'App',
  data() {
    return {

    };
  },
  components: {
    Home,
  },


};
</script>

<style>
.seach-body {
  background-image: url('./assets/background.jpg');
  margin: 0;
  background-repeat: no-repeat;
  background-size: cover; /* 背景画像を要素に合わせて表示 */
  background-size: 100% auto; /* 幅100%で高さは自動調整 */
  background-position: top center; /* 画像を上寄せ、中央に配置 */
}

.menu-body {
  background-color: #F7DDBE;
}

.header,
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font: Arial Hebrew;
  font-size: 16vmax;
  color: #F4A354;
  line-height: 1;
  letter-spacing: 3vmax;
  font-weight: bold;
  width: 100%;
  text-align: center;
  white-space: nowrap; /* テキストを折り返さないように設定 */
  overflow: hidden; /* テキストを要素からはみ出さないようにする */
  text-overflow: ellipsis; /* テキストがはみ出た場合に省略記号を表示 */
}

.header {
  margin-bottom: 100px;
}

.footer {
  margin-top: 100px;
}

/* レスポンシブ対応 */
  @media (max-width: 920px) {
  .header,
  .footer {
    font-size: 14vmax;
    letter-spacing: 2vmax; /* 文字間隔を調整 */
  }
  }

  @media (max-width: 740px) {
  .header,
  .footer {
    font-size: 13vmax;
    letter-spacing: 1vmax; /* 文字間隔を調整 */
  }
  }

  @media (max-width: 650px) {
  .header,
  .footer {
    font-size: 12vmax;
    letter-spacing: 0px;
  }
  }

  @media (max-width: 490px) {
  .header,
  .footer {
    font-size: 10vmax;
  }
  }

    @media (max-width: 50px) {
  .header,
  .footer {
    font-size: 5vmax;
  }
  }

</style>
