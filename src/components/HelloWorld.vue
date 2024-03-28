<template>
  <div class="bg-light">
    <b-container class="py-5 text-center">
      <b-row>
        <b-col>
          <h1 class="display-4">Bienvenido a nuestro proyecto</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="lead">Esta es una descripción breve de nuestro proyecto.</p>
        </b-col>
      </b-row>
      <b-button variant="primary" size="lg">Conoce más</b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Landing',
}
</script>

<style scoped>
.bg-light {
  background-color: #f8f9fa!important;
}
.display-4 {
  font-size: 2.5rem;
  font-weight: 300;
  color: #343a40;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
  color: #6c757d;
}
</style>
