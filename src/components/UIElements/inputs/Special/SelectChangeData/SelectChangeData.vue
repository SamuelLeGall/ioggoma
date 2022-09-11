<template>
  <div class="container">
    <select-component
      :options="options"
      :model-value="modelValue"
      :sorted="sorted"
      :multiple="multiple"
      @update:model-value="changeData($event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useI18n } from "vue-i18n";
import SelectComponent from "@components/UIElements/inputs/Select/SelectComponent.vue";
import { useGameStore } from "@stores/game";
interface Option {
  key: string;
  value: string;
}

export default defineComponent({
  name: "SelectChangeData",
  components: { SelectComponent },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Object as PropType<Array<Option> | Option>,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "",
    },
    options: {
      type: Object as PropType<Array<Option>>,
      required: true,
    },
    sorted: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:model-value"],
  setup(props: any, { emit }: any) {
    // STORE
    const gameStore = useGameStore();
    const { setCurrentLocalization, setCurrentDataTheme } = gameStore;

    // I18N
    // change locale via `global` property
    const { t, locale } = useI18n({ useScope: "global" });

    // METHODS
    const changeData = (option: Option) => {
      switch (props.type) {
        case "localization":
          changeLocalization(option);
          break;
        case "theme":
          changeTheme(option);
          break;
        default:
          break;
      }
      // we update the model
      emit("update:model-value", option);
    };

    const changeLocalization = async (newLocalization: Option) => {
      setCurrentLocalization(newLocalization);
      locale.value = newLocalization.key;
    };
    const changeTheme = async (newTheme: Option) => {
      setCurrentDataTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme.key);
    };

    return {
      changeData,
      t,
      props,
    };
  },
});
</script>
