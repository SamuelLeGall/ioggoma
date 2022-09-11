export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  beforeMount(el: any, binding: any) {
    // eslint-disable-next-line no-param-reassign
    el.clickOutsideEvent = function (event: any) {
      // here I check that click was outside the el and his children
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value(false);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  unmounted(el: any) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};
