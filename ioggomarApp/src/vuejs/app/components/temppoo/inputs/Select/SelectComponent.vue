<template>
  <div>
    <div v-if="props.multiple" id="multiple-select-list-values-container">
      <div
        v-for="selectedOption in selectedOptions"
        :key="selectedOption.key"
        class="multiple-select-value-container"
      >
        {{ selectedOption.value }}
        <span
          class="margin-left-5 multiple-select-value-close"
          @click="removeSelectedvalueByKey(selectedOption.key)"
        >
          x
        </span>
      </div>
    </div>
    <div id="select-input-field-container">
      <input
        id="input-field"
        v-model="inputText"
        @focusin="updateShowOptions(true)"
        @input="showOptions ? '' : updateShowOptions(true)"
      />
    </div>
    <div
      v-if="showOptions"
      id="select-options-list-container"
      class="display-flex flex-direction-column padding-10 margin-top-10 flex-fill"
    >
      <div v-if="filteredOptions.length">
        <div
          v-for="option in filteredOptions"
          :key="option.key"
          class="select-option-container padding-10"
          :class="
            checkSelectedvalueByKey(option.key) !== -1 ? 'is-selected' : ''
          "
          @click="updateSelectedOption(option)"
        >
          {{ option.value }}
        </div>
      </div>
      <div v-else>
        <div class="select-option-container padding-10">
          {{ t("SelectComponent.noResult") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, onMounted, Ref } from "vue";
import { useI18n } from "vue-i18n";
import { Option } from "@models/game/basic";

export default defineComponent({
  name: "SelectComponent",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Object as PropType<Array<Option> | Option>,
      required: true,
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
    const { t } = useI18n();

    // state
    const showOptions = ref(false);
    const inputText = ref("");
    const selectedOptions: Ref<Array<Option>> = ref([]);

    // COMPUTED
    const filteredOptions = computed(() => {
      const res = props.options.reduce(
        (previousValue: Array<Option>, currentValue: Option) => {
          if (
            currentValue.value
              .toLowerCase()
              .includes(inputText.value.toLowerCase())
          ) {
            previousValue.push(currentValue);
          }
          return previousValue;
        },
        []
      );
      if (props.sorted) {
        res.sort((a: Option, b: Option) => a.value.localeCompare(b.value));
      }
      return res;
    });

    // METHODS
    const emitModel = (newValue: Option | Array<Option>) => {
      emit("update:model-value", newValue);
    };
    const updateShowOptions = (newValue: boolean) => {
      showOptions.value = newValue;
    };
    const checkSelectedvalueByKey = (key: string) => {
      return selectedOptions.value.findIndex((option) => option.key === key);
    };

    const removeSelectedvalueByKey = (key: string) => {
      const indexOptionToRemove = checkSelectedvalueByKey(key);
      if (indexOptionToRemove !== -1) {
        selectedOptions.value.splice(indexOptionToRemove, 1);
        emitModel(selectedOptions.value);
      }
    };

    const updateSelectedOption = (newSelectedOption: Option) => {
      if (props.multiple) {
        inputText.value = "";
        if (checkSelectedvalueByKey(newSelectedOption.key) === -1) {
          // not part of selected values at the moment so we add this Option to the list
          selectedOptions.value.push(newSelectedOption);
          emitModel(selectedOptions.value);
        } else {
          // is part of selected values at the moment so we remove this Option to the list*
          removeSelectedvalueByKey(newSelectedOption.key);
        }
      } else if (!props.multiple) {
        inputText.value = newSelectedOption.value;
        selectedOptions.value = [newSelectedOption];
        emitModel(selectedOptions.value[0]);
        updateShowOptions(false);
      }
    };

    // HOOKS
    onMounted(() => {
      // incoming model value is type :
      //    - Array<Option> if multiple=true
      //    - Option if multiple=false
      // Internally we work with an selectedOptions of type Array<Option> in both cases
      if (props.multiple) {
        inputText.value = "";
        selectedOptions.value = props.modelValue;
      } else {
        inputText.value = props.modelValue.value;
        selectedOptions.value = [props.modelValue];
      }
    });

    return {
      props,
      t,
      selectedOptions,
      showOptions,
      inputText,
      filteredOptions,
      checkSelectedvalueByKey,
      removeSelectedvalueByKey,
      updateShowOptions,
      updateSelectedOption,
    };
  },
});
</script>
<style scoped lang="scss">
.select-option-container {
  background-color: aquamarine;
  border-bottom: 2px solid black;
}
.select-option-container:hover {
  cursor: pointer;
  background-color: saddlebrown;
  color: aquamarine;
}
#select-options-list-container {
  background-color: rebeccapurple;
}
#multiple-select-list-values-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.multiple-select-value-close:hover {
  cursor: pointer;
}
.multiple-select-value-container {
  padding: 2px 5px;
  background-color: chartreuse;
  border: 2px black solid;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: fit-content;
}
.is-selected {
  background-color: bisque !important;
}
</style>
