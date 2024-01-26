import IWNRHPoster from '$lib/assets/projects/i-was-never-really-here/iwnrh_poster.jpg?as=run&imagetools';
import IWNRHStill1 from '$lib/assets/projects/i-was-never-really-here/iwnrh_still1.jpg?as=run&imagetools';
import IWNRHStill2 from '$lib/assets/projects/i-was-never-really-here/iwnrh_still2.jpg?as=run&imagetools';
import IWNRHStill3 from '$lib/assets/projects/i-was-never-really-here/iwnrh_still3.jpg?as=run&imagetools';
import TGSPoster from '$lib/assets/projects/the-greatest-sin/the-greatest-sin_poster.jpg?as=run&imagetools';
import TGSStill1 from '$lib/assets/projects/the-greatest-sin/the-greatest-sin_still1.jpg?as=run&imagetools';
import TGSStill2 from '$lib/assets/projects/the-greatest-sin/the-greatest-sin_still2.jpg?as=run&imagetools';
import TGSStill3 from '$lib/assets/projects/the-greatest-sin/the-greatest-sin_still3.jpg?as=run&imagetools';

type ImageComponent = string;
type ImageStills = string[];

export function getProjectImage(name: string): ImageComponent {
	const imageMap: Record<string, ImageComponent> = {
		'i-was-never-really-here': IWNRHPoster,
		'the-greatest-sin': TGSPoster
	};

	return imageMap[name] || '';
}

export function getProjectStills(slug: string): ImageStills {
	const stillsMap: Record<string, ImageStills> = {
		'i-was-never-really-here': [IWNRHStill1, IWNRHStill2, IWNRHStill3],
		'the-greatest-sin': [TGSStill1, TGSStill2, TGSStill3]
	};

	return stillsMap[slug] || [];
}
