<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/" exact activeClass="active" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/pag1" exact activeClass="active" class="nav-link">Pag1</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/pag2" exact activeClass="active" class="nav-link">Pag2</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view :form1="form1" :form2="form2"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      form1: {
        name: "Attila",
        surname: "Aknai"
      },
      form2: {
        age: 29,
        gender: "M"
      }
    };
  }
};
</script>

