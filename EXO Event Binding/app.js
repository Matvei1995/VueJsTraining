Vue.createApp({
    data() {
      return {
        num:0,
          };
    },
    methods: {
        plus(){
           
          this.num ++;
            
        },
        minus(){
          this.num --;
        }
    },
  }).mount('#user-profile');