import App from './build/App.svelte';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App({
        target: document.getElementById('svelte-chart')
    });
});
