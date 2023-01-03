let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate function called!", this.message);
  },
  created() {
    console.log("created function called!", this.message);
  },
  beforeMount() {
    console.log("beforeMount function called!", this.$el);
  },
  mounted() {
    console.log("mounted function called!", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate function called!");
  },
  updated() {
    console.log("updated function called!");
  },
  beforeUnmount() {
    console.log("beforeUnmount function called");
  },
  unmounted() {
    console.log("unmounted function called");
  },
});

//in console, type in vm.unmount() so that you can see other functions get logged
vm.mount("#app");

// setTimeout(() => {
//   vm.mount("#app");
// }, 3000);
