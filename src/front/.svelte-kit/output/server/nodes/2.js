

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.9d09034e.js","_app/immutable/chunks/scheduler.a0f294ad.js","_app/immutable/chunks/index.005a5e49.js"];
export const stylesheets = [];
export const fonts = [];
