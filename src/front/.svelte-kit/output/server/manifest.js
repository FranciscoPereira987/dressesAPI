export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4aef8340.js","app":"_app/immutable/entry/app.36ace17e.js","imports":["_app/immutable/entry/start.4aef8340.js","_app/immutable/chunks/scheduler.a0f294ad.js","_app/immutable/chunks/singletons.135c7f1b.js","_app/immutable/entry/app.36ace17e.js","_app/immutable/chunks/scheduler.a0f294ad.js","_app/immutable/chunks/index.005a5e49.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
