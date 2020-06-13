<template>
  <div class="container">
    <h1>Pag 2</h1>
    <form class="">
      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="number"
          name="age"
          min="0"
          step="1"
          max="99"
          class="form-control"
          v-model="form2.age"
        />
      </div>
      <div class="form-group">
        <label for="gender">Gender</label>
        <div class="form-check form-check-inline">
          <label>
            <input
              type="radio"
              name="gender"
              class="form-check-input"
              value="M"
              v-model="form2.gender"
            />
            <span class="form-check-label">Male</span>
          </label>
          <label class="ml-3">
            <input
              type="radio"
              name="gender"
              class="form-check-input"
              value="F"
              v-model="form2.gender"
            />
            <span class="form-check-label">Female</span>
          </label>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["form2"],
  data() {
    return {};
  }
};
</script>
