import logo from '../images/logo.svg';
import phone from '../images/phone.svg';

export default function Header() {
	return(
		<div className="py-[20px] bg-[#ffffff] flex justify-between items-center top-[0px] sticky z-[1]">
			<img src={logo} className="sm:w-[200px] w-[150px] sm:h-[100px] h-[75px]" />
			<a href="tel:+91 7900882288">
				<div id="callUsNowButton" className="call-us-button bg-[#37405E] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium">
					<img src={phone} />
					<span className="text-[#ffffff] ml-[10px] max-sm:hidden">
						+91 79 00 88 22 88
					</span>
					<span className="text-[#ffffff] ml-[10px] sm:hidden">
						Call Us
					</span>
				</div>
			</a>
		</div>
	)
}