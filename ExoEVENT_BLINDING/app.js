Vue.createApp({
  data() {
    return {
      valeur: " ",
      valeur2: " ",
      warning: "ALERT GENERAL"
    };
  },
  methods: {
    addTextOnP1(ev) {
      this.valeur = ev.target.value;
    },
    addTextOnP2(ev) {
      this.valeur2 = ev.target.value;
    },
    alert(){
      alert(this.warning);
    }
    
  },
}).mount("#input-test_event-blinding");
