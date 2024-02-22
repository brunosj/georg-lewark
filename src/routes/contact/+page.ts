export async function load() {
	try {
		const item = await import(`../../lib/data/contact.md`);
		return {
			content: item.default,
			meta: item.metadata
		};
	} catch (postError) {
		return { content: null, meta: null };
	}
}
