import { init } from "@nais/apm";
import { useEffect } from "react";

export default function NaisApm() {
	useEffect(() => {
		init({
			tracing: true,
			beforeSend: (item) => {
				if (item.meta?.page?.url) {
					try {
						const url = new URL(item.meta.page.url);
						url.search = "";
						item.meta.page.url = url.toString();
					} catch {
						/* ignore malformed URLs */
					}
				}
				return item;
			},
		});
	}, []);
}
