<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about" @click.native="team_set">About</router-link>
    </nav>
    <router-view />
    <button @click="increase">増加</button>
    <p>{{ $store.state.sum }}</p>
    <p>{{ $store.state.lastTeam }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    increase() {
      this.$store.commit('incrementMutation');
    },
    team_set() {
      this.$store.commit('teamSetMutation');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
