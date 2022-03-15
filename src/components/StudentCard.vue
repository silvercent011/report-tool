<template>
  <div class="col">
    <div class="card h-100 m-2">
      <div class="row g-0 h-100">
        <div
          class="col-md-4"
          v-if="student.img_url != null"
          :style="`background-image: url('${student.img_url}')`"
          style="background-size: cover; background-position: center"
        ></div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="card-content">
              <h5 class="card-title">{{ student.nome }}</h5>
              <h6 class="card-text text-muted">{{ student.email }}</h6>
              <p class="card-text">
                Turma: {{ student.turma }}
                <br />
                Turno: {{ student.turno }}
                <br />
                Atualizado em {{ dataFormat }}
              </p>
              <button class="btn btn-primary">Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: ["student"],
  setup(props) {
    const dataFormat = computed(() => {
      const data = new Date(props.student.updated).toLocaleDateString();
      return data;
    });

    return { dataFormat };
  },
});
</script>
