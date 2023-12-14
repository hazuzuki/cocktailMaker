const myComponent = {
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
      cocktails: ["a", "b"],
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
    }
  }
};

// myComponentオブジェクトをエクスポート
export default myComponent;
