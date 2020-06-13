<template>
  <div class="container">
    <div class="row">
      <span class="col col-6">Name:</span>
      <span class="col col-6">{{ form1.name }}</span>
      <span class="col col-6">Surename:</span>
      <span class="col col-6">{{ form1.surname }}</span>
      <span class="col col-6">Age:</span>
      <span class="col col-6">{{ form2.age }}</span>
      <span class="col col-6">Gender:</span>
      <span class="col col-6">{{ form2.gender }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["form1", "form2"],
  data() {
    return {};
  }
};
</script>
