<template>
  
  <header>
    <img src="./assets/analitik-logo.png" width="100" 
     height="50">
         </header>

        <nav>
            
            <router-link to="/about"> Haqqımızda </router-link> |
            
            <router-link to = "/catalog"> Kataloq</router-link> |
                
            <router-link to = "/contact"> Əlaqə </router-link>
        </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

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
