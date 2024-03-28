<!-- Register.vue -->
<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formData.name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="formData.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });
        if (response.ok) {
          this.$router.push({ name: "home" });
        } else {
          const responseData = await response.json();
          console.error("Registration failed:", responseData.message);
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error registering user:", error);
        alert("An unexpected error occurred. Please try again later.");
      }
    },
  },
};
</script>

<style></style>
