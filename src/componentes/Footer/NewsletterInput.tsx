import { useState } from "react";

function NewsletterInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: { target: { value: any; }; }) => {
    setIsFocused(false);
    setHasText(!!e.target.value);
  };

  const isActive = isFocused || hasText;

  return (
    <div className="relative w-full max-w-md mt-8">
       
        <div className="border-b border-black w-full pb-2 flex items-center">
            <div className="relative w-full">
            
                <label
                className={`absolute left-0 transition-all duration-300 pointer-events-none 
                    ${isActive ? "text-2xl -top-5" : "text-2xl md:text-4xl lg:text-5xl top-1"}`}
                >
                Receba novidades
                </label>

            
                <input
                type="email"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setHasText(!!e.target.value)}
                className="w-full bg-transparent outline-none pt-6 text-base md:text-lg"
                placeholder={isActive ? "Seu e-mail" : ""}
                />
            </div>

            <button className="text-2xl text-black ml-2">
                <svg width="57" height="58" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4257 18.9817L38.7328 18.9817L38.7328 33.2888" stroke="#232323" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.6973 39.017L38.5316 19.1826" stroke="#232323" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  );
}

export default NewsletterInput;