

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.04e1ccf8.js","_app/immutable/chunks/scheduler.a0f294ad.js","_app/immutable/chunks/index.005a5e49.js"];
export const stylesheets = ["_app/immutable/assets/0.3f42bb21.css"];
export const fonts = [];
