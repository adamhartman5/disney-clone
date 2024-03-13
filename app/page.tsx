import Image from 'next/image';
import { Button } from '@/components/ui/button';
import MoviesCarousel from '@/components/MoviesCarousel';

export default function Home() {
	return (
		<main className=''>
			<h1 className=''>Let's build Disney</h1>

			{/* CarouselBannerWrapper */}

			<div className='flex flex-col space-y-2 xl:mt-48'>
				<MoviesCarousel movies={[]} title='upcoming' />
				{/* <MoviesCarousel movies={...} title='upcoming' /> */}
				{/* <MoviesCarousel movies={...} title='upcoming' /> */}
			</div>
		</main>
	);
}
