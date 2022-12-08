import '../Footer/Footer.scss';
import { NavBar } from '../../Components/NavBar/Navbar';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="content-of-footer narrow-container">
          <div className="fit-me">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 4.77463C0 0.495128 5.35289 -0.447573 7.80629 3.05885C10.2648 6.57253 11.7134 10.8473 11.7301 15.4601C11.7301 10.8878 13.1371 6.64474 15.5409 3.1417C17.8898 -0.281361 23.0647 0.623173 23.0647 4.77464V10.2662C23.0647 16.6354 17.9015 21.7986 11.5324 21.7986C5.16321 21.7986 0 16.6354 0 10.2662V4.77463Z"
                fill="#1AC84B"
              />
            </svg>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="69" height="22" viewBox="0 0 69 22" fill="none">
                <path
                  d="M11.8678 5.096H4.02775V9.744H11.6438V13.44H4.02775V21H0.16375V1.4H11.8678V5.096ZM16.3073 5.32C15.7099 5.32 15.1873 5.10533 14.7393 4.676C14.3099 4.228 14.0953 3.70533 14.0953 3.108C14.0953 2.51067 14.3099 1.988 14.7393 1.54C15.1873 1.092 15.7099 0.867999 16.3073 0.867999C16.9233 0.867999 17.4459 1.092 17.8753 1.54C18.3233 1.988 18.5473 2.51067 18.5473 3.108C18.5473 3.70533 18.3233 4.228 17.8753 4.676C17.4459 5.10533 16.9233 5.32 16.3073 5.32ZM14.5153 21V7H18.1273V21H14.5153ZM29.4413 10.472H26.2773V16.296C26.2773 16.7813 26.3986 17.136 26.6413 17.36C26.8839 17.584 27.2386 17.7147 27.7053 17.752C28.1719 17.7707 28.7506 17.7613 29.4413 17.724V21C26.9586 21.28 25.2039 21.0467 24.1773 20.3C23.1693 19.5533 22.6653 18.2187 22.6653 16.296V10.472H20.2293V7H22.6653V4.172L26.2773 3.08V7H29.4413V10.472ZM51.5547 1.4V21H47.7187V8.288L42.2027 17.388H41.7547L36.2387 8.316V21H32.3747V1.4H36.3507L41.9787 10.668L47.5787 1.4H51.5547ZM58.0907 15.484C58.5761 17.2387 59.8921 18.116 62.0387 18.116C63.4201 18.116 64.4654 17.6493 65.1747 16.716L68.0867 18.396C66.7054 20.3933 64.6707 21.392 61.9827 21.392C59.6681 21.392 57.8107 20.692 56.4107 19.292C55.0107 17.892 54.3107 16.128 54.3107 14C54.3107 11.8907 55.0014 10.136 56.3827 8.736C57.7641 7.31733 59.5374 6.608 61.7027 6.608C63.7561 6.608 65.4454 7.31733 66.7707 8.736C68.1147 10.1547 68.7867 11.9093 68.7867 14C68.7867 14.4667 68.7401 14.9613 68.6467 15.484H58.0907ZM58.0347 12.684H65.1747C64.9694 11.732 64.5401 11.0227 63.8867 10.556C63.2521 10.0893 62.5241 9.856 61.7027 9.856C60.7321 9.856 59.9294 10.108 59.2947 10.612C58.6601 11.0973 58.2401 11.788 58.0347 12.684Z"
                  fill="#111112"
                />
              </svg>
            </div>
          </div>
          <div className="middle-container-of-footer">
            <NavBar />
            <div className="social-networks same-display">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="22"
                viewBox="0 0 14 22"
                fill="none"
                className="image-social"
              >
                <path
                  d="M13 5.3H9.9935C9.4505 5.3 9.01 5.74 9.01 6.2835V9.7335H13L12.4155 13.532H9.0105V20.5H4.6225V13.532H1V9.7335H4.5755L4.6225 6.1285L4.616 5.4735C4.61078 4.95361 4.70867 4.43784 4.904 3.95601C5.09933 3.47418 5.38823 3.03584 5.75401 2.66635C6.11978 2.29686 6.55517 2.00353 7.035 1.80334C7.51483 1.60314 8.02958 1.50004 8.5495 1.5H13V5.3Z"
                  stroke="#111112"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="image-social"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z"
                  fill="#111112"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                className="image-social"
              >
                <path
                  d="M21.0834 1.75922C21.0834 1.75922 19.2336 2.85188 18.2051 3.16172C17.653 2.52694 16.9193 2.07702 16.1032 1.87282C15.2871 1.66861 14.428 1.71998 13.642 2.01997C12.856 2.31995 12.1812 2.85409 11.7086 3.55012C11.2361 4.24616 10.9888 5.07053 11.0001 5.91172V6.82838C9.38916 6.87016 7.79292 6.51288 6.35351 5.78838C4.9141 5.06387 3.67621 3.99463 2.75008 2.67588C2.75008 2.67588 -0.916585 10.9259 7.33341 14.5926C5.44556 15.874 3.19664 16.5166 0.916748 16.4259C9.16675 21.0092 19.2501 16.4259 19.2501 5.88422C19.2501 5.62938 19.2244 5.37455 19.1767 5.12338C20.1117 4.20122 21.0834 1.75922 21.0834 1.75922Z"
                  stroke="#111112"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="privacy-policy same-display">
              <p className="privacy">Policy privacy</p>
              <p className="privacy">Copyright2022.All Rights reserved.</p>
            </div>
          </div>
          <div className="contact">
            <div id="text-contact">Contact:</div>
            <div id="number">+1234567890</div>
          </div>
        </div>
      </footer>
    </>
  );
};
