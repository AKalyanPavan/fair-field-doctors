import Header from './Header.js'
import OfferCard from './OfferCard.js'
import Card from './Card.js'
import LocationCard from './LocationCard.js'
import FormComponent from './FormComponent.js'

import firstSection from '../images/first-section.jpeg'
import poshBuilding from '../images/posh-building.png'
import verified from '../images/offers/verified.svg'
import phone from '../images/phone.svg';

import { offers, basicFeatures, premiumAmenities, whatsIncluded, secureYourFuture } from './Variables.js'

export default function Homepage() {

	const description = 'Your Prescription for Secure, High-Return Real Estate in Coimbatore. Strategically located in Ramanathapuram, Coimbatore, Fair Field – Anicham & Magilam is not just land, it\'s legacy.';

	return(
		<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Lexend_Deca']">
			<Header />
			<div className="text-[#37405E] mt-[20px] sm:flex justify-between items-top sm:gap-[50px]">
				<div className="lg:w-[600px]">
					<div className="sm:text-[32px] text-[30px]">
						<span>Fair Field – </span>
						<span> Anicham & Magilam</span>
					</div>
					<div className="text-[#D3AC4A] text-[24px] my-[10px]">
						Premium Gated Community Crafted for Doctors
					</div>
					<div className="text-lg font-light max-sm:h-[170px]">{description}</div>
					<FormComponent />
				</div>
				<div className="max-lg:hidden w-[592px]">
					<img src={firstSection} className="rounded-[20px] border-solid border-[2px] border-[#37405E]" />
					<div className="text-center mt-[20px]">Smart Investment | Prestige Living | Personalized Comfort</div>
				</div>
			</div>
			<div className="mt-[100px] text-[#37405E]">
				<div className="sm:text-[36px] text-[30px] text-center">Exclusive Doctor-Only Offers</div>
				<div className="flex max-md:flex-col max-md:items-center justify-center gap-[30px] my-[30px]">
					{offers.map((offer, index) => (
						<OfferCard offer={offer} />
					))}
				</div>
				<a className="w-fit contents" target="_blank" href="https://drive.google.com/file/d/1YJxQn6dGG96-NPwuG6r0yCimGQwZZCWX/view?usp=sharing">
					<div className="w-fit mt-[30px] bg-[#37405E] mt-[50px] py-[10px] px-[20px] rounded-[5px] cursor-pointer mx-auto">
						<span className="text-[#ffffff] tracking-tight">
							Download Comparison PDF
						</span>
					</div>
				</a>
			</div>
			<div className="mt-[100px] text-[#37405E] text-center">
				<div className="sm:text-[36px] text-[30px]">Why Doctors Trust Fair Field?</div>
				<div className="text-[20px] font-light my-[30px] max-w-[920px] mx-auto">
					Situated in a well-connected neighborhood, offering easy access to business districts, educational institutions, and healthcare facilities.
				</div>
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[50px]">
					{basicFeatures.map((basicFeautre, index) => (
						<Card cardData={basicFeautre} />
					))}
				</div>
				<a href="tel:+91 7900882288">
					<div className="w-fit mt-[30px] bg-[#37405E] mt-[50px] py-[10px] px-[20px] rounded-[5px] cursor-pointer mx-auto">
						<span className="text-[#ffffff] tracking-tight">
							Join an Elite Community – Reserve Your Spot Today!
						</span>
					</div>
				</a>
			</div>
			<div className="mt-[100px] text-[#37405E] text-center">
				<div className="sm:text-[36px] text-[30px]">Amenities Designed for <br className="max-md:hidden" />Wellness & Relaxation</div>
				<div className="mt-[50px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[50px]">
					{premiumAmenities.map((premiumAmenity, index) => (
						<Card cardData={premiumAmenity} />
					))}
				</div>
			</div>
			<div className="mt-[100px]">
				<div className="flex lg:gap-[50px] items-center justify-between">
					<div className="min-[1200px]:max-w-[620px] max-lg:mx-auto">
						<div className="sm:text-[36px] text-[30px] text-[#37405E] max-lg:text-center">Book a Private Site Visit</div>
						<div className="text-[#7B7B7B] leading-[30px] mt-[10px]">
							<span>Walk the land, meet our team, and explore the possibilities</span>						</div>
						<div className="my-[30px]">
							<div className="text-[20px] text-[#37405E]">What’s Included</div>
							<div className="flex flex-col gap-[10px] mt-[10px] text-[#7B7B7B] ml-[20px]">
								{whatsIncluded.map((item, index) => (
									<div className="flex">
										<img src={verified} className="w-[20px] h-[20px] mt-[4px]" />
										<div className="ml-[10px]">
											{item}
										</div>
									</div>
								))}
							</div>
						</div>
						<a className="w-fit contents" href="tel:+91 7900882288">
							<div className="max-lg:mx-auto w-fit call-us-button bg-[#37405E] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-lg font-medium">
								<img src={phone} />
								<span className="text-[#ffffff] ml-[20px]">
									Book Now
								</span>
							</div>
						</a>
					</div>
					<div>
						<img src={poshBuilding} className="rounded-[20px] max-lg:hidden border-solid border-[2px] border-[#37405E] w-[550px]" />
					</div>
				</div>
			</div>
			<div className="my-[100px]">
				<div className="sm:text-[36px] text-[30px] text-center text-[#37405E]">
					 Secure Your Future – The Medical <br className="max-sm:hidden" />Market Is Buying Fast
				</div>
				<div className="flex flex-col gap-[20px] text-[#7B7B7B] w-fit mx-auto my-[50px]">
					{secureYourFuture.map((item, index) => (
						<div className="flex gap-[20px]">
							<img src={item.imageUrl} />
							<div>{item.title}</div>
						</div>
					))}
				</div>
				<a className="w-fit contents" href="tel:+91 7900882288">
					<div className="mx-auto w-fit call-us-button bg-[#37405E] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-lg font-medium">
						<img src={phone} />
						<span className="text-[#ffffff] ml-[20px]">
							Book Now
						</span>
					</div>
				</a>
			</div>
			<div className="my-[100px]">
				<div className="sm:text-[36px] text-[30px] text-center text-[#37405E]">
					Fair Field – Where Luxury Meets Smart Investment!
				</div>
				<a href="tel:+91 7900882288">
					<div className="bg-[#37405E] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-lg font-medium w-fit mx-auto mt-[20px]">
						<img src={phone} />
						<span className="text-[#ffffff] ml-[10px]">
							+91 79 00 88 22 88
						</span>
					</div>
				</a>
			</div>
		</div>
	)
}