<template>
  <div class="container">
    <h1>Pag 1</h1>
    <form class="">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          v-model="form1.name"
        />
      </div>
      <div class="form-group">
        <label for="name">Surname</label>
        <input
          type="text"
          name="name"
          class="form-control"
          v-model="form1.surname"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["form1"],
  created() {},
  data() {
    return {};
  }
};
</script>
