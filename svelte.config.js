import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    target: '#svelte',
    adapter: adapter(),
  },
};
