import 'piral/polyfills';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';
import 'vue';
import { createVueApi } from 'piral-vue';

const feedUrl = 'feed url here';

renderInstance({
  layout,
  errors,
  plugins: [createVueApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
