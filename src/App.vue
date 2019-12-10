<template>
<div id="app">
  <div class="header">
    <link href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap" rel="stylesheet">
    <h1>Tell Your Story</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Add Your Story</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <p>
      Page owned and created by JT, Logan, and Tess, 2019. *
      <a href="https://github.com/tesshoughton/last_cp">GitHub Repo</a>
    </p>
  </div>
</div>
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Special Elite', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #592C28;
  padding: 10px 100px;
  color: white;
}

.footer {
  display: flex;
  text-align: center;
  justify-content: space-between;
  background: #B8BF7E;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #FFC300;
}

.content {
  padding: 10px 100px;
}
</style>
