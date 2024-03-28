<template>
  <div class="container">
    <h1 class="mt-4">Lista de Tareas</h1>

    <!-- Botón para crear una nueva tarea -->
    <button class="btn btn-success mb-3" @click="showCreateTaskModal">
      Crear Tarea
    </button>

    <!-- Lista de tareas -->
    <div class="list-group">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <!-- Información de la tarea -->
        <div>
          <h5>{{ task.title }}</h5>
          <p>{{ task.description }}</p>
        </div>

        <!-- Botones de editar y eliminar tarea -->
        <div>
          <button class="btn btn-primary mr-2" @click="editTask(task)">
            Editar
          </button>
          <button class="btn btn-danger" @click="deleteTask(task.id)">
            Eliminar
          </button>
        </div>
      </div>
    </div>

    <!-- Modal para crear tarea -->
    <div class="modal" :class="{ 'is-active': isCreateTaskModalOpen }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Crear Nueva Tarea</p>
          <button
            class="delete"
            aria-label="close"
            @click="closeCreateTaskModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Formulario de creación de tarea -->
          <form @submit.prevent="createTask">
            <div class="field">
              <label class="label" for="newTaskTitle">Título:</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  id="newTaskTitle"
                  v-model="newTask.title"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label" for="newTaskDescription">Descripción:</label>
              <div class="control">
                <textarea
                  class="textarea"
                  id="newTaskDescription"
                  v-model="newTask.description"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary" type="submit">
                  Crear Tarea
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tasks: [], 
      newTask: {
        title: "",
        description: "",
      },
      isCreateTaskModalOpen: false,
    };
  },
  mounted() {
    // Llamar al método getAllTask() para obtener las tareas cuando se monta el componente
    this.getAllTask();
  },
  methods: {
    showCreateTaskModal() {
      // Mostrar modal de creación de tarea
      this.isCreateTaskModalOpen = true;
    },
    closeCreateTaskModal() {
      // Cerrar modal de creación de tarea
      this.isCreateTaskModalOpen = false;
    },
    createTask() {
      // Lógica para crear una nueva tarea
      console.log("Crear nueva tarea:", this.newTask);
      this.isCreateTaskModalOpen = false;
    },
    getAllTask() {
      axios
        .get("http://127.0.0.1:8000/api/tasks") 
        .then((response) => {
          this.tasks = response.data; 
        })
        .catch((error) => {
          console.error("Error al obtener las tareas:", error);
        });
    },
  },
};
</script>

<style></style>
