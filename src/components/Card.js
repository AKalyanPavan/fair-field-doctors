export default function Card({cardData}) {
	return(
		<div className={`text-center rounded-[10px] p-[20px] ${cardData.customStyle}`}>
			<img className="mx-auto mb-[20px]" src={cardData.imageUrl} />
			<div className="text-[20px] mb-[20px] h-[60px]">{cardData.title}</div>
			<div className="text-[14px] text-[#7B7B7B] leading-[30px]">{cardData.description}</div>
		</div>
	)
}