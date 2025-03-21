import { type Ref, ref } from 'vue';

type ColorMode = 'dark' | 'light';

interface IUseColorMode {
  mode: Readonly<Ref<ColorMode>>;
  changeColorMode: () => void;
}

export function useColorMode(): IUseColorMode {
  const preferColorMode =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  const storageMode = localStorage.getItem('mode') as ColorMode;
  const mode = ref(storageMode || preferColorMode);

  function changeColorMode() {
    const isDarkMode = mode.value === 'dark';

    mode.value = isDarkMode ? 'light' : 'dark';
    changeMode(mode.value);
    localStorage.setItem('mode', mode.value);
  }

  return { mode, changeColorMode };
}

export function changeMode(mode: ColorMode) {
  const isDarkMode = mode === 'dark';

  document.documentElement.classList.toggle('dark', isDarkMode);
  document.documentElement.classList.toggle('light', !isDarkMode);
  document.documentElement.setAttribute('data-color-mode', mode);
}
