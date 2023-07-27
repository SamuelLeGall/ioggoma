// I18nAdapter.ts (Localization Adapters Layer)

import { useI18n } from "vue-i18n"; // Import the i18n package

export interface I18nAdapter {
  t(key: string): string;
}

export class I18nAdapterImpl implements I18nAdapter {
  private i18nInstance = useI18n();

  t(key: string): string {
    return this.i18nInstance.t(key);
  }
}
