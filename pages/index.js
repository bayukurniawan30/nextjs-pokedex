import Image from "next/image";

function IndexPage({ allData }) {
	// cek data di console
	console.log(allData);

	return (
		<div>
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto mt-10 mb-10">
				<p class="text-center text-3xl font-bold text-gray-800 dark:text-white mb-10">
					Pokedex
				</p>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Looping untuk menampilkan data pokemon */}
						{allData.map(({ name, sprites, types }) => (
						<div key={name}>
							<div className="overflow-hidden shadow-lg hover:shadow-xl transition duration-500 ease-in-out rounded-lg h-90 cursor-pointer m-auto">
								<a href="#" className="w-full block h-full">
									<img alt={name} src={sprites.front_default} className="max-h-60 " width="100%"/>
									<div className="bg-white dark:bg-gray-800 w-full p-4">
										<p className="text-indigo-500 text-md font-medium capitalize">
											{types[0].type.name}
										</p>
										<p className="text-gray-800 dark:text-white text-xl font-medium mb-2 capitalize">
											{name}
										</p>
										<p className="text-gray-400 dark:text-gray-300 font-light text-md">
											Blablabla
										</p>
									</div>
								</a>
							</div>
						</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}


export async function getStaticProps() {
	// cari 8 data pokemon 
	const res  = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=8')
	const data = await res.json();
	const allData = [];

	// masukkan data ke array yang baru
	let count = 0;
	for (const item of data.results) {
		const pokeUrl  = await fetch(item.url);
		const pokeData = await pokeUrl.json();
		allData[count++] = pokeData;
	}
  
	// pass data ke IndexPage
	return {
		props: {
			allData,
		},
	}
}

export default IndexPage