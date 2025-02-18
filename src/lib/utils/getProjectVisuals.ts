// Define the project structure
interface ProjectVisuals {
	poster?: string;
	stills: string[];
}

// Map of project slugs to their folder names (if different)
const PROJECT_FOLDER_MAP: Record<string, string> = {
	'i-was-never-really-here': 'i-was-never-really-here',
	'the-greatest-sin': 'the-greatest-sin',
	'el-camino': 'el-camino',
	'vanishing-point': 'kaleidoskop',
	'la-mancha-2': 'la-mancha',
	lucien: 'lucien',
	'macenta-beans': 'macenta-beans',
	'primal-paths': 'primal-paths',
	'alma-blu': 'alma-blu',
	'never-my-love': 'never-my-love',
	schluesselmoment: 'schluesselmoment',
	'wenn-du-lust-hast': 'wenn-du-lust-hast',
	'gilead-hivision-100-campaign': 'gilead-hivision-100-campaign',
	'odra-unplugged': 'odra-unplugged',
	'gesundbrunnen-grundschule': 'gesundbrunnen-grundschule'
};

/**
 * Gets the folder name for a project
 */
function getProjectFolder(slug: string): string {
	return PROJECT_FOLDER_MAP[slug] || slug;
}

/**
 * Dynamically imports project visuals
 */
async function importProjectVisuals(slug: string): Promise<ProjectVisuals> {
	const folder = getProjectFolder(slug);
	const visuals: ProjectVisuals = { stills: [] };

	try {
		// Try to import poster if it exists
		try {
			visuals.poster = (
				await import(`$lib/assets/projects/${folder}/${folder}_poster.jpg?as=run&imagetools`)
			).default;
		} catch (e) {
			// Poster is optional
		}

		// Import stills
		let stillIndex = 1;
		while (true) {
			try {
				const still = (
					await import(
						`$lib/assets/projects/${folder}/${folder}_still${stillIndex}.jpg?as=run&imagetools`
					)
				).default;
				visuals.stills.push(still);
				stillIndex++;
			} catch (e) {
				// Try PNG if JPG fails
				try {
					const still = (
						await import(
							`$lib/assets/projects/${folder}/${folder}_still${stillIndex}.png?as=run&imagetools`
						)
					).default;
					visuals.stills.push(still);
					stillIndex++;
				} catch (e) {
					// No more stills found
					break;
				}
			}
		}
	} catch (e) {
		console.error(`Failed to load visuals for project ${slug}:`, e);
	}

	return visuals;
}

/**
 * Gets the poster image for a project
 */
export async function getProjectImage(slug: string): Promise<string> {
	const visuals = await importProjectVisuals(slug);
	return visuals.poster || '';
}

/**
 * Gets all still images for a project
 */
export async function getProjectStills(slug: string): Promise<string[]> {
	const visuals = await importProjectVisuals(slug);
	return visuals.stills;
}
