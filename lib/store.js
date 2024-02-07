// store.js
import { createStore } from 'https://cdn.jsdelivr.net/npm/zustand@4.5.0/esm/vanilla.mjs';

class AppStore {
  data = {};
  get showProgress () {
    return this.store.data.showProgress.getState().showProgress;
  }

  set showProgress (showProgress) {
    this.data.showProgress.setState({showProgress});
  }

  constructor () {
    const showProgress = createStore((set) => ({
      showProgress: true,
      setShowProgress: (showProgress) => {
        set({ showProgress });
      }
    }));
    this.data.showProgress = showProgress;
  }
}

(() => {
  document.addEventListener('DOMContentLoaded', (event) => {
    window._app = {
      store: new AppStore()
    };
  });
})();