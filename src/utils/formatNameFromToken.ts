export const formatNameFromToken = (name: string): string => {
	if (name.includes(",")) {
		const [lastName, firstName] = name.split(",").map((part) => part.trim());
		return `${firstName} ${lastName}`;
	}
	return name;
};
