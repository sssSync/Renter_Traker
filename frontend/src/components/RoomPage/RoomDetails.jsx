import "./room_style.scss";

import roomImg from "../../assets/room-img/room.jpg";
import FaqItem from "./FaqSec";
const RoomDetails = () => {
  return (
    <div className="pt-36 h-full flex justify-center items-center ">
      <div className="main_room-div w-[80%] mt-12">
        <div className="mainDetails flex justify-between ">
          <div className="text_details">
            <h1 className="room_title ">Sobar vila</h1>
            <h3>
              Good Quality, will have a good time and good food. Feel like home.24*7 electricity and
              water supply.Always Clean and hyaenic. No Smoking and Drinking allowed
            </h3>
            <div className="mini-details mt-4">
              <h3 className="mb-2">⭐ ⭐ ⭐ ⭐ ⭐</h3>
              <h3>
                <span className="text-white">price :</span>
                <span className="text-green-500"> 20,000</span>
              </h3>
              <h3>
                <span className="text-white">Owner:</span>
                <span className="text-gray-400">Shubredu Neogi</span>
              </h3>
              <h3>
                <span className="text-white">Near By : </span>
                <span className="text-gray-400">Shorisha Hospital, Shorisha high School</span>
              </h3>
              <h3>
                <span className="text-white">Location:</span>
                <span className="text-gray-400">
                  Sorisha, Diamond Harbour, South 24 porgona, 721148
                </span>
              </h3>
            </div>
          </div>
          <div className="image_details flex flex-shrink-0">
            <div className="extra-img">
              <div className="mini-img">
                <img src={roomImg} alt="" />
              </div>
              <div className="mini-img">
                <img src={roomImg} alt="" />
              </div>
              <div className="mini-img">
                <img src={roomImg} alt="" />
              </div>
              <div className="mini-img last-img">
                <img src={roomImg} alt="" />
              </div>
            </div>
            <div className="main-img">
              <img src={roomImg} alt="boro bariiiiiii" />
            </div>
          </div>
        </div>

        <div className="my-20 w-full horizon"></div>

        <div className="extra_details">
          <h1 className="section-title">Extra Details -</h1>

          <div className="details-box grid grid-cols-3 gap-12">
            <div className="details-point">
              <h2>Renter preference </h2>
              <h3>
                <span className="text-gray-400">Only Students :</span>
                <span className="text-white"> Yes</span>
              </h3>
              <h3>
                <span className="text-gray-400">Renter sex :</span>
                <span className="text-white"> Boys</span>
              </h3>
            </div>
            <div className="details-point">
              <h2>Residence</h2>
              <h3>
                <span className="text-gray-400">Building Type :</span>
                <span className="text-white">Apartment Building </span>
              </h3>
              <h3>
                <span className="text-gray-400">Room Type :</span>
                <span className="text-white">Single-room</span>
              </h3>
              <h3>
                <span className="text-gray-400">Available Date :</span>
                <span className="text-white"> Immediately </span>
              </h3>
            </div>
            <div className="details-point">
              <h2>Advantages</h2>
              <h3>
                <span className="text-gray-400">Collage distance :</span>
                <span className="text-white">3km</span>
              </h3>
              <h3>
                <span className="text-gray-400">Market Distance :</span>
                <span className="text-white">200m</span>
              </h3>
            </div>
            <div className="details-point">
              <h2>Room Services</h2>
              <h3>
                <span className="text-gray-400">Wi-fi :</span>
                <span className="text-white">Available</span>
              </h3>

              <h3>
                <span className="text-gray-400">Food :</span>
                <span className="text-white">We Provide</span>
              </h3>
              <h3>
                <span className="text-gray-400">Bed :</span>
                <span className="text-white">We Provide</span>
              </h3>
              <h3>
                <span className="text-gray-400">Toilet :</span>
                <span className="text-white">Given per Room</span>
              </h3>
              <h3>
                <span className="text-gray-400">Kitchen Facility :</span>
                <span className="text-white">Available</span>
              </h3>
              <h3>
                <span className="text-gray-400">Water-supply :</span>
                <span className="text-white">24*7hrs service</span>
              </h3>
            </div>
            <div className="details-point">
              <h2>Other Services</h2>
              <h3>
                <span className="text-gray-400">Electricity :</span>
                <span className="text-white">24*7hrs service</span>
              </h3>
              <h3>
                <span className="text-gray-400">Security :</span>
                <span className="text-white">24*7hrs service</span>
              </h3>
              <h3>
                <span className="text-gray-400">Parking :</span>
                <span className="text-white">Available</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="my-20 w-full horizon"></div>

        <div className="contact_section">
          <h1 className="section-title">Contact Section -</h1>
          <div className="contact_details">
            <h3>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.7614 14.7613 15 11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.23858 9.23847 2 11.9999 2Z"></path>
                </svg>
              </div>
              <span className="text-gray-400">Name :</span>
              <span className="text-white">Bilash Halder</span>
            </h3>
            <h3>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(30,223,42,1)"
                >
                  <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
                </svg>
              </div>
              <span className="text-gray-400">Phone :</span>
              <span className="text-white">+91 9876543210</span>
            </h3>
            <h3>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M17.0839 15.812C19.6827 13.0691 19.6379 8.73845 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.36205 8.73845 4.31734 13.0691 6.91612 15.812C7.97763 14.1228 9.8577 13 12 13C14.1423 13 16.0224 14.1228 17.0839 15.812ZM12 23.7279L5.63604 17.364C2.12132 13.8492 -2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z"></path>
                </svg>
              </div>
              <span className="text-gray-400">Address :</span>
              <span className="text-white">Shorisha ,Diamond Harbour, S.24 porgona, W.B</span>
            </h3>
          </div>
        </div>

        <div className="my-20 w-full horizon"></div>
        <div className="faq_details">
          <h1 className="section-title">FAQ Section-</h1>
          <div className="faq-box">
            <div className="inputSection">
              <textarea name="question" id="" />
              <button className="justify-self-end">Submit</button>
            </div>
            <FaqItem />
            <FaqItem />
            <FaqItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
