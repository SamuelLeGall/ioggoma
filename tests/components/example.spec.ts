import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { createI18n } from "vue-i18n";
//alias are working but not detected by the typescript, can be ignored
import router from "@router/index";
import MainMenu from "@components/modules/Menu/MainMenu.vue";

test("mount component", async () => {
  expect(MainMenu).toBeTruthy();
  const i18n = createI18n({
    legacy: false,
    locale: "fr_FR", // set locale
    fallbackLocale: "en_US", // set fallback locale
    messages: {
      fr_FR: { MainMenuMessage: { MainMenu: { title: "Menu Principal" } } },
    }, // set locale messages
  });
  const wrapper = mount(MainMenu, {
    global: {
      // by default stubActions is true so code inside store methods is not run
      plugins: [createTestingPinia({ stubActions: false }), i18n, router],
    },
  });

  expect(wrapper.get("h1").text()).toBe("Menu Principal");
  expect(wrapper.get("span").text()).toBe("Player level 1");

  await wrapper.get("button").trigger("click");

  expect(wrapper.get("span").text()).toBe("Player level 2");
});
