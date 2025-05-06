import verified from '../images/offers/verified.svg';

export default function OfferCard({offer}) {
	return(
		<div className="broder-solid border-[1px] border-[#7b7b7b40] rounded-[10px] sm:w-[400px] p-[20px] text-[#7B7B7B]">
			<img src={offer.imageUrl} className="mx-auto" />
			<div className="text-[20px] leading-[30px] h-[90px] font-normal text-[#37405E] mt-[30px]">{offer.title}</div>
			<div className="">
				<div className="my-[20px] leading-[30px] h-[100px]">{offer.subtitle}</div>
				<div className="ml-[10px] flex flex-col gap-[20px]">
					{offer.features.map((feature, index) => 
						<div className="flex items-start gap-[10px]">
							<img src={verified} className="w-[20px] h-[20px] mt-[4px]" />
							<div>{feature}</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}