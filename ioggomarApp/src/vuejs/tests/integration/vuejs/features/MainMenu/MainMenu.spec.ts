import { mount } from "@vue/test-utils";
import { vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { createI18n } from "vue-i18n";
//alias are working but not detected by the typescript, can be ignored
import MainMenu from "../../../../../ioggomarApp/src/vuejs/app/components/modules/MainMenu/GetMainMenuHTMLPresenter.vue";
import * as messagesFr from "../../../../../ioggomarApp/src/localizations/fr_FR/UI/Menus/MainMenuMessage.json";

// import router from "@router/index";
// import MainMenu from "@components/modules/Menu/MainMenu.vue";
// import * as messagesFr from "@localizations/fr_FR/UI/Menus/MainMenuMessage.json";

test("mount MainMenu", async () => {
  expect(MainMenu).toBeTruthy();
  const router = vi.fn();
  const i18n = createI18n({
    legacy: false,
    locale: "fr_FR", // set locale
    fallbackLocale: "en_US", // set fallback locale
    messages: {
      fr_FR: { MainMenuMessage: { MainMenu: messagesFr.MainMenu } },
    }, // set locale messages
  });
  const wrapper = mount(MainMenu, {
    global: {
      // by default stubActions is true so code inside store methods is not run
      plugins: [createTestingPinia({ stubActions: false }), i18n, router],
    },
  });

  expect(wrapper.get("h1").text()).toBe("Menu principal");
  expect(wrapper.get("p").text()).toBe("Player level 1");

  await wrapper.get("button").trigger("click");

  expect(wrapper.get("p").text()).toBe("Player level 2");
});
