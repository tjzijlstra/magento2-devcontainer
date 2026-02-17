import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import MappiaAd from './MappiaAd.vue';

import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(MappiaAd),
    });
  },
};
