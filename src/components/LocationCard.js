export default function LocationCard({locationData}) {
	return(
		<div className={`text-center rounded-[10px] p-[20px] broder-solid border-[1px] border-[#BFBDBD] h-full`}>
			<div className="flex items-center justify-center">
				<img src={locationData.url} />
				<div className="text-[20px] ml-[10px]">{locationData.title}</div>
			</div>
			<ul className="list-disc text-left mt-[20px] ml-[30px] list-gap-[10px]">
				{locationData.items.map((item, index) => (
					<li className="mt-[10px]">{item}</li>
				))}
			</ul>
		</div>
	)
}