<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Forgot Password</div>
  
            <div class="card-body">
              <form @submit.prevent="submitEmail">
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" v-model="email" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      submitEmail() {
      }
    }
  }
  </script>
  