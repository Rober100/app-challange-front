<template>
    <div class="container">
      <h1 class="mt-4">Dashboard</h1>
      <div class="row">
        <div class="col-md-6">
          <h2 class="mt-4">Mis tareas asignadas</h2>
          <ul class="list-group">
            <li v-for="task in assignedTasks" :key="task.id" class="list-group-item">{{ task.title }}</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2 class="mt-4">Todas las tareas</h2>
          <ul class="list-group">
            <li v-for="task in allTasks" :key="task.id" class="list-group-item">{{ task.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        assignedTasks: [],
        allTasks: []
      };
    },
    mounted() {
      this.fetchAssignedTasks();
  
      this.fetchAllTasks();
    },
    methods: {
      fetchAssignedTasks() {
        
      },
      fetchAllTasks() {
      
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  