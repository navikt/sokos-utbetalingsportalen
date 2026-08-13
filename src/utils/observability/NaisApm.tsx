import { init } from "@nais/apm";
import { useEffect } from "react";

const NaisApm = () => {
	useEffect(() => {
		init({
			app: "sokos-utbetalingsportalen",
			namespace: "okonomi",
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
};

export default NaisApm;
