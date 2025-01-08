import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Company = () => {
  return (
    <div className="bg-transparent sm:bg-[url('/media/black.svg')] zoom-background rounded-b-[100px] sm:rounded-none bg-cover bg-no-repeat relative flex items-start fade-in-background 2xl:p-0 p-4 w-full h-full justify-start mx-auto">
      <div className="sm:flex hidden w-full items-center justify-center">
        <div
          style={{
            border: "4px solid gray",
            borderRadius: "10px",
            overflow: "hidden",
            width: "1400px",
            maxWidth: "100%",
          }}
        >
          <ReactCompareSlider
            transition="0.25s cubic-bezier(.17,.67,.83,.67)"
            boundsPadding={0}
            changePositionOnHover
            itemOne={
              <ReactCompareSliderImage
                src=""
                srcSet="/ai/landing1.svg"
                alt="Image one"
                style={{
                  width: "1400px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src=""
                srcSet="/ai/landing2.svg"
                alt="Image two"
                style={{
                  width: "1400px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            }
            keyboardIncrement="5%"
            position={50}
            style={{
              width: "1400px",
              maxWidth: "100%",
              aspectRatio: "16/9",
            }}
            handle={
              <svg width="52" height="791" viewBox="0 0 52 791" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="25.3677" y1="791" x2="25.3677" y2="-2.76386e-08" stroke="#C82543" stroke-width="1.2646"/>
              <circle opacity="0.1" cx="26" cy="395" r="26" fill="#C82543"/>
              <circle opacity="0.5" cx="26.0004" cy="395" r="22.1" fill="#C82543"/>
              <circle cx="25.9998" cy="395.001" r="18.2" fill="#C82543"/>
              <path d="M23 389L17 395L23 401" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28 401L34 395L28 389" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
