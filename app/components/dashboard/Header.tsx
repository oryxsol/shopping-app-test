import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none border-b-2">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex justify-between items-center w-full">
          <form action="#" method="POST">
            <div className="relative border rounded-lg p-2 border-primary">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 ms-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent  text-lg font-semibold text-black pl-9 pr-4 focus:outline-none xl:w-125"
              />
            </div>
          </form>
          <div className="gap-2 flex items-center">
            <div className="bg-secondary rounded-lg size-8 flex justify-center items-center ">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.6953 6.00001V6.00834M10.0521 3.64334C10.677 4.26843 11.028 5.11613 11.028 6.00001C11.028 6.88389 10.677 7.73158 10.0521 8.35667M12.4097 1.28586C13.0288 1.90492 13.5198 2.63986 13.8549 3.44872C14.19 4.25758 14.3624 5.12452 14.3624 6.00002C14.3624 6.87553 14.19 7.74247 13.8549 8.55133C13.5198 9.36019 13.0288 10.0951 12.4097 10.7142M5.33548 8.35667C4.71058 7.73158 4.35953 6.88389 4.35953 6.00001C4.35953 5.11613 4.71058 4.26843 5.33548 3.64334M2.97609 10.7142C2.357 10.0951 1.8659 9.36019 1.53085 8.55133C1.1958 7.74247 1.02335 6.87553 1.02335 6.00002C1.02335 5.12452 1.1958 4.25758 1.53085 3.44872C1.8659 2.63986 2.357 1.90492 2.97609 1.28586"
                  stroke="#6290CB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-secondary rounded-lg size-8 flex justify-center items-center ">
              <p className="text-primary">EN</p>
            </div>
            <div className="bg-secondary rounded-lg size-8 flex justify-center items-center ">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.19532 13.1667V14C5.19532 14.663 5.45871 15.2989 5.92756 15.7678C6.3964 16.2366 7.03228 16.5 7.69532 16.5C8.35836 16.5 8.99425 16.2366 9.46309 15.7678C9.93193 15.2989 10.1953 14.663 10.1953 14V13.1667M6.02866 3.16667C6.02866 2.72464 6.20425 2.30072 6.51681 1.98816C6.82937 1.67559 7.2533 1.5 7.69532 1.5C8.13735 1.5 8.56127 1.67559 8.87383 1.98816C9.18639 2.30072 9.36199 2.72464 9.36199 3.16667C10.319 3.61919 11.1348 4.32361 11.722 5.20442C12.3092 6.08523 12.6457 7.10923 12.6953 8.16667V10.6667C12.758 11.1848 12.9415 11.6809 13.231 12.1151C13.5205 12.5493 13.9079 12.9095 14.362 13.1667H1.02866C1.48277 12.9095 1.87016 12.5493 2.15965 12.1151C2.44913 11.6809 2.63261 11.1848 2.69532 10.6667V8.16667C2.74496 7.10923 3.08141 6.08523 3.66861 5.20442C4.25582 4.32361 5.07165 3.61919 6.02866 3.16667Z"
                  stroke="#6290CB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-secondary rounded-lg size-8 flex justify-center items-center ">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.362 4.66927V3.0026C10.362 2.56058 10.1864 2.13665 9.87382 1.82409C9.56126 1.51153 9.13734 1.33594 8.69531 1.33594H2.86198C2.41995 1.33594 1.99603 1.51153 1.68347 1.82409C1.37091 2.13665 1.19531 2.56058 1.19531 3.0026V13.0026C1.19531 13.4446 1.37091 13.8686 1.68347 14.1811C1.99603 14.4937 2.41995 14.6693 2.86198 14.6693H8.69531C9.13734 14.6693 9.56126 14.4937 9.87382 14.1811C10.1864 13.8686 10.362 13.4446 10.362 13.0026V11.3359M6.19531 8.0026H16.1953M16.1953 8.0026L13.6953 5.5026M16.1953 8.0026L13.6953 10.5026"
                  stroke="#6290CB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="bg-secondary rounded-lg size-8 flex justify-center items-center ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02734 4.66927V3.0026C1.02734 2.56058 1.20294 2.13665 1.5155 1.82409C1.82806 1.51153 2.25198 1.33594 2.69401 1.33594H4.36068M1.02734 11.3359V13.0026C1.02734 13.4446 1.20294 13.8686 1.5155 14.1811C1.82806 14.4937 2.25198 14.6693 2.69401 14.6693H4.36068M11.0273 1.33594H12.694C13.136 1.33594 13.56 1.51153 13.8725 1.82409C14.1851 2.13665 14.3607 2.56058 14.3607 3.0026V4.66927M11.0273 14.6693H12.694C13.136 14.6693 13.56 14.4937 13.8725 14.1811C14.1851 13.8686 14.3607 13.4446 14.3607 13.0026V11.3359"
                  stroke="#6290CB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center ms-8 gap-2">
              <div className="bg-secondary rounded-full size-8 flex justify-center items-center ">
                <p className="text-primary">S</p>
              </div>
              <div className="bg-secondary rounded-lg size-8 flex justify-center items-center ">
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1101_1370)">
                    <path
                      d="M11.198 5.62532C11.6334 3.72906 14.1861 3.72906 14.6215 5.62532C14.6868 5.91019 14.8149 6.17474 14.9952 6.39743C15.1756 6.62012 15.4032 6.79467 15.6594 6.90686C15.9157 7.01905 16.1934 7.06571 16.4699 7.04305C16.7465 7.0204 17.0141 6.92906 17.2509 6.77647C18.8277 5.76138 20.6335 7.66844 19.6729 9.33577C19.5287 9.58593 19.4424 9.86851 19.421 10.1606C19.3996 10.4526 19.4437 10.7458 19.5498 11.0165C19.6558 11.2871 19.8208 11.5275 20.0313 11.718C20.2418 11.9086 20.4919 12.044 20.7612 12.1132C22.5557 12.5732 22.5557 15.2708 20.7612 15.7308C20.4917 15.7998 20.2413 15.9351 20.0306 16.1257C19.8198 16.3163 19.6546 16.5568 19.5485 16.8276C19.4423 17.0984 19.3981 17.3918 19.4196 17.6841C19.441 17.9763 19.5275 18.259 19.6719 18.5093C20.6325 20.1756 18.8277 22.0837 17.2499 21.0686C17.0132 20.9162 16.7457 20.825 16.4694 20.8024C16.193 20.7798 15.9155 20.8265 15.6594 20.9385C15.4033 21.0506 15.1758 21.2249 14.9955 21.4474C14.8151 21.6698 14.687 21.9341 14.6215 22.2187C14.1861 24.1149 11.6334 24.1149 11.198 22.2187C11.1327 21.9338 11.0047 21.6693 10.8243 21.4466C10.6439 21.2239 10.4164 21.0493 10.1601 20.9371C9.90384 20.825 9.62613 20.7783 9.34958 20.8009C9.07302 20.8236 8.80544 20.9149 8.56861 21.0675C6.99177 22.0826 5.18602 20.1756 6.14664 18.5082C6.29083 18.2581 6.37713 17.9755 6.39852 17.6834C6.41992 17.3914 6.3758 17.0982 6.26975 16.8275C6.1637 16.5569 5.99872 16.3165 5.78822 16.126C5.57771 15.9354 5.32763 15.8 5.05828 15.7308C3.26378 15.2708 3.26378 12.5732 5.05828 12.1132C5.32787 12.0442 5.57822 11.9089 5.78896 11.7183C5.9997 11.5277 6.16488 11.2872 6.27105 11.0164C6.37722 10.7456 6.42138 10.4522 6.39994 10.1599C6.3785 9.86771 6.29206 9.58495 6.14766 9.33469C5.18705 7.66844 6.99177 5.7603 8.56963 6.77539C9.59156 7.43195 10.916 6.85098 11.198 5.62532Z"
                      stroke="#6290CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.9097 17.159C14.6029 17.159 15.9755 15.7086 15.9755 13.9194C15.9755 12.1302 14.6029 10.6797 12.9097 10.6797C11.2165 10.6797 9.84393 12.1302 9.84393 13.9194C9.84393 15.7086 11.2165 17.159 12.9097 17.159Z"
                      stroke="#6290CB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1101_1370">
                      <rect
                        width="24.5263"
                        height="25.917"
                        fill="white"
                        transform="translate(0.646606 0.960938)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
