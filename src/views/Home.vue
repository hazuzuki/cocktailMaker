<template>
<div>
    <div class="seach" v-if="showSeach">
      <div class="form-background">
        <form @submit.prevent="searchcocktails">
          <p class="info">カクテルメーカへようこそ。<br>
          家にある材料で作れるカクテルが表示されるよ。<br>
          気分転換に新しいカクテルに挑戦してみてね</p>
          <label class="label-form">base</label>
          <div class="checkbox-group">
          <div  v-for="(base, index) in bases" :key="index">
            <input
              class="checkbox-inline__input"
              type="checkbox"
              :id="base"
              :value="base"
              v-model="selectedIngredients"
            >
            <label class="checkbox-inline__label" :for="base">{{ base }}</label>
          </div>  
          </div>

          <label class="label-form">fluit</label>
          <div class="checkbox-group">
          <div v-for="(fruit, index) in fruits" :key="index">
            <input
            class="checkbox-inline__input"
              type="checkbox"
              :id="fruit"
              :value="fruit"
              v-model="selectedIngredients"
            >
            <label class="checkbox-inline__label" :for="fruit">{{ fruit }}</label>
          </div>
          </div>
          <button type="submit" class="btn_06">検索</button>
        </form>
      </div>
    </div>

    <div v-if="showResults">
      <div v-if="createableCocktails.length">
      <div
        class="cocktail-menu"
        v-for="(cocktail, index) in createableCocktails"
        :key="index">
          <label class="cocktail-name">{{ cocktail.nameEnglish }}</label>
          <div class="flex-container">
            <div class="menu-left">
                <div class="japanese-name">{{ cocktail.name }}</div>
              <div class="menu-detail-container">
                <div class="menu-label label-form">ベース</div>
                <div class="menu-content">{{ cocktail.base }}</div>
              </div>
              <div class="menu-detail-container">
                <div class="menu-label label-form">材料</div>
                <div class="flex-container detail">
                  <ul class="vertical-list">
                    <li v-for="(ingredient, index) in cocktail.ingredients" :key="index">
                      {{ ingredient }}
                    </li>
                  </ul>
                  <!-- <ul class="vertical-list">
                    <li v-for="(quantity, index) in cocktail.quantitys" :key="index">
                      {{ quantity }}
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="menu-right">
              <img class="cocktail-img" :src="require(`@/assets/coctail/${cocktail.nameEnglish}.jpg`)">
            </div>
          </div>  
      </div>
    </div>
      <div v-else class="search-nothing">
        検索結果なし
      </div>
      <div class="button-container">
        <button @click="restartSearch" class="btn_06">再検索</button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cocktail: '',
      RAM: "ラム",
      MINT: "ミント",
      LEMON: "レモン",
      LIME: "ライム",
      SYRUP: "シロップ",
      SODA_WATER: "炭酸水",
      TEQUILA: "テキーラ",
      COINTREAU: "コアントロー",
      bases: ['ラム', 'テキーラ', 'ミント', 'シロップ', '炭酸水'],
      fruits: ['レモン', 'ライム'],
      selectedIngredients: [],
      cocktails: [],
      ingredientsToSearch: [],
      createableCocktails: [],
      showSeach: true,
      showResults: false,
      showBody: true,
    };
  },
  created() {
    this.initializeCocktails();
  },
  methods: {
    initializeCocktails() {
      const mojitoIngredients = [this.RAM, this.MINT, this.SYRUP, this.SODA_WATER];
      const mojito = {
        name: "モヒート",
        nameEnglish: "mojito",
        base: this.RAM,
        ingredients: mojitoIngredients,
      };
      this.cocktails.push(mojito);

      const daiquiriIngredients = [this.LIME, this.SYRUP, this.RAM];
      const daiquiri = {
        name: "ダイキリ",
        nameEnglish: "daiquiri",
        base: this.RAM,
        ingredients: daiquiriIngredients,
      };
      this.cocktails.push(daiquiri);

      const margaritaIngredients = [this.LEMON, this.SYRUP, this.COINTREAU];
      const margarita = {
        name: "マルガリータ",
        nameEnglish: "maruga",
        base: this.TEQUILA,
        ingredients: margaritaIngredients
      };
      this.cocktails.push(margarita);
    },
    searchcocktails() {
      this.seachCreateableCocktail();
    },
    seachCreateableCocktail() {
      this.createableCocktails = [];

      for (const cocktail of this.cocktails) {
        const ingredients = [...cocktail.ingredients];

        for (const selectedIngredient of this.selectedIngredients) {
          const index = ingredients.indexOf(selectedIngredient);
          if (index !== -1) {
            ingredients.splice(index, 1);
          }
        }

        if (ingredients.length === 0) {
          this.createableCocktails.push(cocktail);
        }
      }

      this.showSeach = false;
      this.showResults = true;
      this.showBody = false;

      document.body.classList.remove(this.showBody ? 'menu-body' : 'seach-body');
      document.body.classList.add(this.showBody ? 'seach-body' : 'menu-body');
    },
    restartSearch() {
      this.selectedIngredients = [];
      this.createableCocktails = [];
      this.showSeach = true;
      this.showResults = false;
      this.showBody = true;

      document.body.classList.remove(this.showBody ? 'menu-body' : 'seach-body');
      document.body.classList.add(this.showBody ? 'seach-body' : 'menu-body');
    }
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info {
  text-align: center;
}

.form-background {
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.7); 
  padding: 50px;
  border-radius: 1vh;
  width: 80%;

  
}

button.btn_06 {
	text-align: center;
	width: 120px;
  height: 40px;
	font-weight: bold;
	border-radius: 100vh;
	border: 2px solid #a6b34b;
	background: #a6b34b;
	color: #fff;
  margin: 0 auto;
}

button.btn_06:hover{
  color: #a6b34b;
	background: white;

}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 必要に応じて調整 */
    margin-bottom: 50px;
}

.label-form {
  align-items: left;
  margin: 0 0 1.6rem;
  padding-bottom: 0.2rem;
  text-decoration: underline #a6b34b 3px;
  text-underline-offset:0.2em;
  font-size: 30px;
}

.japanese-name {
  color: #a6b34b;
  font-size: 30px;
  padding-bottom: 10px;
}

.menu-label {
  font-size: 15px;
  padding-bottom: 0px;
  margin-bottom: 10px;
  
  
}

.menu-detail-container {
  margin-bottom: 10px;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.checkbox-inline__input {
  outline: none;
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    
}

.checkbox-inline__label {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-right: 18px;
    border-radius: 3px;
    background: white;
    transition: all .2s;
    margin-bottom: 10px;
    border: 2px solid #DED1A7;
    outline-style: auto;
    outline-width: 6px;
    outline: none;
}

.checkbox-inline__input:checked + .checkbox-inline__label {
  outline: none;
    background: #e9a35d;
    color: #fff;
    text-shadow: 0 0 1px rgba(0,0,0,.7);
    border: 2px solid #e9a35d;
}

.cocktail-menu {
  background-color: rgba(255, 255, 255, 1);
  padding: 50px;
  border-radius: 1vh;
  width: 40%; /* 一列に2つ表示 */
  padding: 0% 2% 2% 2%;
  margin: 5% 5% 5% 5%;
  display: inline-block; /* 追加 */
  box-sizing: border-box; /* 追加 */
  vertical-align: top; /* 追加 */
  height: 450px;
}

.search-nothing {
  background-color: rgba(255, 255, 255, 1);
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 100px;
  text-align: center; /* テキストを中央に配置 */
  border-radius: 1vh;
  width: 500px;
  margin: 0 auto; /* 左右の余白を自動で調整して中央に配置 */
}

.cocktail-name {
  color: #C4B237;
  font-size: 40px;
  flex: 1; /* 中央要素を1つのフレックスボックスとして伸縮可能に */
  display: flex;
  justify-content: center; /* 中央に配置 */
  align-items: center; /* 中央に配置 */
  padding-bottom: 20px; 
  }

.even-menu .cocktail-name {
  top: -25%; /* 上端に配置 */
  left: 85%; /* 左端に配置 */
}

.cocktail-img {
  width: 100%;
  height: 100%;
}

/* クラスごとのスタイルをカスタマイズ */
.menu-left {
  flex: 1; /* 左側要素を1つのフレックスボックスとして伸縮可能に */
}

.menu-right {
  flex: 1; /* 右側要素を1つのフレックスボックスとして伸縮可能に */
}

/* スマートフォンビューで垂直に表示 */
@media (max-width: 768px) {
  .flex-container {
    flex-direction: column; /* 垂直に配置 */
  }
  
  /* スマートフォンビューでは幅を100%に */
  .cocktail-menu {
    width: 100%;
    margin: 10px 0; /* 間隔を調整 */
  }
}
.flex-container {
  display: flex;
  justify-content: unset; /* 左右に均等に配置 */
  align-items: flex-start; /* 垂直方向の中央揃え */
}

.vertical-list {
  padding-left: 20px;
  margin: 0px;
}

.menu-content {
  padding-left: 20px;
}

.vertical-list li {
  list-style: none; /* リストのマーカーを削除 */
}
</style>