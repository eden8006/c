export const state = () => ({
  locales: {
    zh: {
      label: "简体（中文）",
    },
    en: {
      label: "English(EN)",
    },
  },
  locale: 'zh'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales[locale]) {
      state.locale = locale
    }
  }
}
