export default function FormComponent() {

	let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let phoneregex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

	function onInputClicked(inputId) {
	    let inputDiv = document.getElementById(inputId);
	    let inputLabel = inputDiv.getElementsByTagName("label")[0];
	    let inputText = inputDiv.getElementsByTagName("input")[0];

	    inputLabel.style.animationName = "decreaseFontsize";
	    inputLabel.style.animationDuration = "0.2s";

	    switch(inputId) {
	        case "fullName":
	            let errorName = document.getElementById("errorName");

	            if(!errorName.classList.contains("invisible")) {
	                errorName.classList.add("invisible");
	            }
	            break;
	        case "email":
	            let errorEmail = document.getElementById("errorEmail");

	            if(!errorEmail.classList.contains("invisible")) {
	                errorEmail.classList.add("invisible");
	            }
	            break;
	        case "phoneNumber":
	            let errorPhonenumber = document.getElementById("errorPhonenumber");

	            if(!errorPhonenumber.classList.contains("invisible")) {
	                errorPhonenumber.classList.add("invisible");
	            }
	            break;
	        default:
	            return;
	    }

	    setTimeout(function() {
	        inputLabel.classList.remove("text-[#677788]");
	        inputLabel.classList.add("text-[12px]");
	        inputLabel.classList.add("mb-[50px]");
	        inputLabel.classList.add("text-[#37405E]");
	    }, 100);

	    inputText.focus();
	}

	function onInputFocusOut(inputId) {
	    let inputDiv = document.getElementById(inputId);
	    let inputLabel = inputDiv.getElementsByTagName("label")[0];
	    let inputText = inputDiv.getElementsByTagName("input")[0];

	    if (!inputText.value.trim()) {
	      
	        inputLabel.style.animationName = "increaseFontsize";
	        inputLabel.style.animationDuration = "0.2s";

	        setTimeout(function() {
	            inputLabel.classList.add("text-[#677788]");
	            inputLabel.classList.remove("text-[12px]");
	            inputLabel.classList.remove("mb-[50px]");
	            inputLabel.classList.remove("text-[#37405E]");
	        }, 100);
	    }
	}

	function validateInput() {
	    let errorName = document.getElementById("errorName");
	    let errorEmail = document.getElementById("errorEmail");
	    let errorPhonenumber = document.getElementById("errorPhonenumber");

	    let fname = document.getElementById("fname");
	    let femail = document.getElementById("femail");
	    let fphonenumber = document.getElementById("fphonenumber");

	    let isError = false;

	    if(!fname.value.trim()) {
	        errorName.classList.remove("invisible");
	        isError = true;
	    }

	    if(!emailregex.test(femail.value)) {
	        errorEmail.classList.remove("invisible");
	        isError = true;
	    }

	    if(!phoneregex.test(fphonenumber.value)) {
	        errorPhonenumber.classList.remove("invisible");
	        isError = true;
	    }

	    if(!isError){

		window.centilio_connector_init.submit();
	      
	        // Making input values empty
	        fname.value = "";
	        onInputFocusOut("fullName");

	        femail.value = "";
	        onInputFocusOut("email");

	        fphonenumber.value = "";
	        onInputFocusOut("phoneNumber");

	        // Opening thank-you modal
	        openThankYouModal();

	        // Closing thank-you modal
	        setTimeout(closeThankYouModal, 5000);
	    }   
	}

	function closeThankYouModal() {
	    let thankYouModal = document.getElementById("thankYouModal");
	    let modalOverlay = document.getElementById("modalOverlay");
	    if(!thankYouModal.classList.contains("hidden")){
	        thankYouModal.classList.add("hidden");
	        modalOverlay.classList.add("hidden");
	    }
	}

	function openThankYouModal() {
	    let thankYouModal = document.getElementById("thankYouModal");
	    let modalOverlay = document.getElementById("modalOverlay");
	    if (thankYouModal.classList.contains("hidden")) {
	        thankYouModal.classList.remove("hidden");
	        modalOverlay.classList.remove("hidden");
	    }
	}

	return(
		<>
			<div className="mt-[20px] flex flex-col gap-[10px] sm:w-[90%] max-w-[400px]">
				<div className="">
				    <div id="fullName" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("fullName")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Full name</label>
				        <input className="outline-none mx-[10px] w-[100%] centilio-input-last-name" onBlur={() => onInputFocusOut("fullName")} placeholder="" type="text" id="fname" name="fname" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorName">Full name Cannot be Empty</div>
				</div>
				<div className="">
				    <div id="email" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("email")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Email</label>
				        <input className="outline-none mx-[10px] w-[100%] centilio-input-email" onBlur={() => onInputFocusOut("email")} placeholder="" type="text" id="femail" name="femail" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorEmail">Please provide a valid email</div>
				</div>
				<div className="">
				    <div id="phoneNumber" className="flex border-solid border-[1.5px] border-[#37405E] rounded-[5px] h-[50px] items-center hover:border-[#37405E]" onClick={() => onInputClicked("phoneNumber")}>
				        <label className="ml-[5px] absolute text-[#677788] cursor-text bg-[#FFFFFF] px-[10px]">Phone Number</label>
				        <input className="outline-none mx-[10px] w-[100%] centilio-input-mobile" onBlur={() => onInputFocusOut("phoneNumber")} placeholder="" type="text" id="fphonenumber" name="fphonenumber" />
				    </div>
				    <div className="text-right mt-[2px] text-[12px] text-[#ff3f3f] invisible" id="errorPhonenumber">Please provide valid phone number</div>
				</div>
				<div id="bookVisitNowButton" className="book-visit-button w-full text-center bg-[#37405E] py-[10px] px-[20px] rounded-[5px] cursor-pointer" onClick={() => validateInput()}>
					<span className="text-[#ffffff] tracking-tight">
						Book Your Visit Today
					</span>
				</div>
			</div>
			<div id="modalOverlay" className="w-[100%] bg-[#000000ab] fixed top-[0px] left-[0px] h-[100%] z-[5] hidden">
				<div id="thankYouModal" className="w-[100%] h-[100%] bg-[#7f808080] fixed z-[6] text-center hidden">
				    <div style={{
				        transform: "translate(-50%, -50%)"
				    }}
				        className="text-[#37405E] fixed bg-[#c2d9ff] top-[50%] left-[50%] py-[30px] px-[10px] sm:w-[400px] w-[90%] rounded-[10px] z-[5] leading-[35px] border-solid border-[2px] border-[#37405e]">
				        <div className="bg-[#37405E] w-max px-[15px] py-[18px] rounded-[50%] mx-auto">
				            <svg width="30" height="24" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				                <path d="M8.01587 1.77777L3.65079 6.22222L1.66667 4.20201" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
				            </svg>
				        </div>
				        <div className="text-[30px] font-semibold my-[20px]">Thank You!</div>
				        <div>We'll reach You Out Soon!</div>
				        <div className="bg-[#dc3737] text-[#FFFFFF] cursor-pointer rounded-[5px] my-[20px] w-max mx-auto px-[20px] font-medium" onClick={() => closeThankYouModal()}>Close</div>
				    </div>
				</div>
			</div>
		</>
	)
}
