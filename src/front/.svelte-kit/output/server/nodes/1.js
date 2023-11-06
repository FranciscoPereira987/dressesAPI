

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.696eebee.js","_app/immutable/chunks/scheduler.a0f294ad.js","_app/immutable/chunks/index.005a5e49.js","_app/immutable/chunks/singletons.135c7f1b.js"];
export const stylesheets = [];
export const fonts = [];
