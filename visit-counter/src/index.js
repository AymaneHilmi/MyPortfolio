function getTodayKey() {
	const today = new Date();
	return `visits:${today.toISOString().split('T')[0]}`; // format: visits:2025-03-26
}

function getDateNDaysAgo(n) {
	const date = new Date();
	date.setDate(date.getDate() - n);
	return date.toISOString().split('T')[0];
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// Route 1: Incrément et compteur total
		if (url.pathname === "/api/visits") {
			const key = getTodayKey();
			let todayCount = await env.VISITOR_COUNTER.get(key);
			todayCount = todayCount ? parseInt(todayCount) + 1 : 1;
			await env.VISITOR_COUNTER.put(key, todayCount.toString());

			// Calcul du total toutes dates confondues
			const keys = await env.VISITOR_COUNTER.list({ prefix: "visits:" });
			let total = 0;
			for (const { name } of keys.keys) {
				const val = await env.VISITOR_COUNTER.get(name);
				total += parseInt(val || "0");
			}

			return new Response(JSON.stringify({ today: todayCount, total }), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		// Route 2: Données pour graphe
		if (url.pathname === "/api/stats") {
			const stats = {};
			for (let i = 6; i >= 0; i--) {
				const date = getDateNDaysAgo(i);
				const count = await env.VISITOR_COUNTER.get(`visits:${date}`);
				stats[date] = parseInt(count || "0");
			}

			return new Response(JSON.stringify(stats), {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			});
		}

		return new Response("Not found", { status: 404 });
	},
};