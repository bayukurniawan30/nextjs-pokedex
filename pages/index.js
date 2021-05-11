import Image from "next/image";
import Link from 'next/link'
import Title from '@components/title'

function IndexPage({ allData, moreData }) {
	// console.log(allData);
	// console.log(moreData);

	return (
		<div>
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto mt-10 mb-10">
					<Title></Title>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{/* Looping untuk menampilkan data pokemon */}
						{allData.map(({ id, name, sprites, types }) => (
							<div key={name}>
								<Link href={"/detail/" + id}>
									<a>
										<div className="overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 hover:border-indigo-500 transition duration-500 ease-in-out rounded-lg h-90 cursor-pointer m-auto transform hover:scale-105">
											<div className="w-full block h-full">
												<img alt={name} src={sprites.front_default} className="w-80 " width="100%" />
												<div className="bg-white dark:bg-gray-800 w-full p-4">
													<div className="text-indigo-500 text-md font-medium">
														{/* {types[0].type.name} */}
														{/* {JSON.stringify(types)} */}
														{types.map((type) => (
															<span className="capitalize" key={type.type.name}>{type.type.name} {types.length === type.slot ? "" : ' - '}</span>
														))}
													</div>
													<p className="text-gray-800 dark:text-white text-xl font-medium mb-2 capitalize">
														#{id} {name}
													</p>
															
													<p className="text-gray-400 dark:text-gray-300 font-light text-md">
														{moreData[id - 1].flavor_text_entries[0].flavor_text}
													</p>
												</div>
											</div>
										</div>
									</a>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

// fetch data dengan getStaticProps
export async function getStaticProps() {
	// cari data pokemon

	// set limitnya brapa
	const limit = 151
	// fetch pokemon API
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
	// ubah data ke format json
	const data = await res.json()
	const allData = []
	const moreData = []

	// masukkan data ke array yang baru
	let count = 0
	let count2 = 0
	for (const item of data.results) {
		const pokeUrl = await fetch(item.url);
		const pokeData = await pokeUrl.json();

		const speciesUrl = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeData.name}`)
		const speciesData = await speciesUrl.json()
		allData[count++] = pokeData
		moreData[count2++] = speciesData
	}

	// pass data ke IndexPage
	return {
		props: {
			allData,
			moreData
		},
	}
}

export default IndexPage