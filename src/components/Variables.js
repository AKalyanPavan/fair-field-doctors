import priceMatch from '../images/offers/price-match.svg'
import blueprint from '../images/offers/blueprint.svg'

import primeLocation from '../images/base-features/prime-location.svg'
import eliteCommunity from '../images/base-features/elite-community.svg'
import surveillanceSecurity from '../images/base-features/surveillance-security.svg'
import sustainableDesign from '../images/base-features/sustainable-design.svg'
import highROIGrowth from '../images/base-features/highroi-growth.svg'

import garden from '../images/amenities/garden.svg'
import webcam from '../images/amenities/webcam.svg'
import roads from '../images/amenities/roads.svg'

import festiveOffers from '../images/secure-your-future/festive-offers.svg'
import priceTag from '../images/secure-your-future/price-tag.svg'
import doctor from '../images/secure-your-future/doctor.svg'
import plotsSold from '../images/secure-your-future/plots-sold.svg'

export const offers = [
	{
		imageUrl: priceMatch,
		title: 'Prestige Plot with Price Match Guarantee',
		subtitle: 'We guarantee the best price in premium neighborhoods. Found a better offer? We’ll beat it or pay you ₹50,000',
		features: [
			'Assured best price across premium projects',
			'₹50,000 bonus if we can’t beat verified price',
			'Benchmarking across top 5 luxury gated communities',
		]
	},
	{
		imageUrl: blueprint,
		title: 'Custom-Built Villa Blueprint(Worth ₹1.5L) – FREE',
		subtitle: 'Book 4 cents or more and design your dream villa with our architect—at no cost',
		features: [
			'Personalized layout for your family’s lifestyle',
			'Elevates social and personal value',
			'Unique identity in a gated community',
		]
	},
]

export const basicFeatures = [
	{
		imageUrl: primeLocation,
		title: 'Prime Healthcare-Centric Location',
		description: 'Minutes away from Coimbatore’s top hospitals: SLV, Gem, PSG, GKNM',
	},
	{
		imageUrl: eliteCommunity,
		title: 'Elite Community of Professionals',
		description: 'Doctors, NRIs, and high-ranking executives form our core residents',
	},
	{
		imageUrl: surveillanceSecurity,
		title: '24/7 Surveillance & Gated Entry',
		description: 'Ensuring privacy and security for your family',
	},
	{
		imageUrl: sustainableDesign,
		title: 'Sustainable Design',
		description: 'Rainwater harvesting, solar lighting, green zoning',
	},
	{
		imageUrl: highROIGrowth,
		title: 'High ROI & Passive Wealth Growth',
		description: 'Tap into the booming Coimbatore real estate market',
	},
];

export const premiumAmenities = [
	{
		imageUrl: garden,
		title: 'Landscaped Gardens',
		description: 'Green, tranquil spaces for unwinding after long hours',
		customStyle: '',
	},
	{
		imageUrl: webcam,
		title: 'Advanced Security Systems',
		description: '24/7 manned gates, CCTV, and smart barriers',
		customStyle: '',
	},
	{
		imageUrl: roads,
		title: 'Premium Internal Roads & Visitor Parking',
		description: 'Hassle-free living for you and your guests',
		customStyle: '',
	},
]

export const whatsIncluded = [
	'Personal Tour by Sales Executive',
	'Free Consultation with Architect',
	'Instant Quote with Exclusive Doctor Offers',
]

export const secureYourFuture = [
	{
		imageUrl: plotsSold,
		title: '32 Plots Already Sold',
	},
	{
		imageUrl: doctor,
		title: 'Doctors Are Among Our Top Buyers',
	},
	{
		imageUrl: priceTag,
		title: 'Prices Are Set to Rise – Act Now Before the Market Moves Further',
	},
	{
		imageUrl: plotsSold,
		title: 'Festive & Professional Offers Available Now',
	},
]