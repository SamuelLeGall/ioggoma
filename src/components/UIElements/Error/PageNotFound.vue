<template>
  <div>
    <h1>{{ t("ErrorsMessage.PageNotFound.title") }}</h1>
    <p>{{ errorMessage }}</p>
    <router-link :to="{ name: 'MAIN_MENU' }">
      {{ t("ErrorsMessage.PageNotFound.goBackMainMenu") }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "PageNotFound",
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { t } = useI18n();
    return {
      props,
      t,
    };
  },
});
</script>

<style scoped></style>
