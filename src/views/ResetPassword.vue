<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Reset Password</div>
  
            <div class="card-body">
              <form @submit.prevent="resetPassword">
                <div class="form-group">
                  <label for="password">New Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <div class="form-group">
                  <label for="password_confirmation">Confirm Password</label>
                  <input type="password" class="form-control" id="password_confirmation" v-model="password_confirmation" required>
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
        password: '',
        password_confirmation: ''
      };
    },
    methods: {
      resetPassword() {
      }
    }
  }
  </script>
  