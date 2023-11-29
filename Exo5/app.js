Vue.createApp({
    data() {
      return {
        image: 'https://picsum.photos/50/50',
        nom:'Marie Clementine',
        age: 35 ,
        fetich: Math.random(),
          };
    },
    methods: {
        addteen(){
           
                return this.age + 10
            
        }
        
    },
  }).mount('#user-profile');