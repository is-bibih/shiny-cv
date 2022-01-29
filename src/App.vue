<template>
  <div id="app">
    <div id="sidebar">
      <sidebar></sidebar>
    </div>
    <div style="padding:20px">
      <div id="navbar">
        <nav-button text="studies" routerdir="/studies"></nav-button>
        <nav-button text="experience" routerdir="/experience"></nav-button>
        <nav-button text="portfolio" routerdir="/portfolio"></nav-button>
      </div>
      <div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  import NavButton from './components/NavButton.vue'
  
  export default {
    components: {
      'sidebar': Sidebar,
      'nav-button': NavButton,
    }
  }
</script>

<style>

:root {
  --fg: #313131;
  --fg-alt: #5A5A5A;
  --bg: white;
  --title-hi: #FF9E9E;
  --hi: #FFEE5A;
}

#app {
  font-family: "M+ 1p", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--fg);

  display: flex;
  flex-direction: row;
}

#sidebar {
  min-width: 300px;
  max-width: 25%;
  padding: 20px;
}

#navbar {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  justify-content: center;
}

h1 {
  background-color: var(--title-hi);
  display: inline;
}

h2 {
  text-decoration: underline;
  font-size: 18px;
}

a:link {
  color: var(--fg);
  background-color: var(--hi);
}

a:visited {
  color: var(--fg);
  background-color: var(--hi);
}

a:hover {
  color: var(--fg-alt);
  background-color: var(--hi);
}

a:active {
  color: var(--fg-alt);
  background-color: var(--hi);
}

</style>
