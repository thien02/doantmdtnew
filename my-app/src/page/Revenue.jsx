import Nav from './nav';
import "../css/Revenue.css";
import icon_search from "../asset/img/magnifying-glass-solid.svg"
import product from "../asset/img/shoe19_720x.webp"
import bag from "../asset/img/bag-shopping-solid (1).svg"
import order_image from "../asset/img/Order.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";export const Revenue = () => {

  library.add(faStar);

  return (
    <div>
      <Nav/>   
     <img src={order_image} alt="" className="order_image"/>    
     <div className="rectangle-10">
        {/* <img src={icon_search}></img> */}
            <input type="text" placeholder="search..."className="search">
            </input>
        </div>  
     <div className="rectangle-11">
        <div class="catagories">Catagories</div>
        <button><div class="days">DAYS</div> </button>
        <div class="months">MONTHS</div>
        <div class="quarters">QUARTERS</div>
        <div class="years">YEARS</div>
     </div>     
     <div class="rectangle-33">
        <div class="revenue">REVENUE</div>
        <svg
        class="star-regular-1"
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_23_15)">
          <path
            d="M14.9948 0C15.474 0 15.9115 0.294531 16.1198 0.764648L19.6927 8.76797L27.6719 10.048C28.1406 10.1217 28.5312 10.4785 28.6771 10.9713C28.8229 11.4641 28.7031 11.9965 28.3698 12.359L22.5833 18.6008L23.9479 27.4141C24.026 27.9238 23.8333 28.4393 23.4479 28.7451C23.0625 29.051 22.5469 29.085 22.1302 28.8414L14.9948 24.6953L7.86459 28.8357C7.44271 29.0793 6.93229 29.0453 6.54688 28.7395C6.16146 28.4336 5.96354 27.9182 6.04167 27.4084L7.40625 18.5951L1.61979 12.359C1.28125 11.9965 1.16667 11.4584 1.3125 10.9713C1.45834 10.4842 1.84896 10.1273 2.31771 10.048L10.2969 8.76797L13.8698 0.764648C14.0833 0.294531 14.5156 0 14.9948 0ZM14.9948 4.47461L12.2604 10.6031C12.0781 11.0053 11.7292 11.2885 11.3177 11.3564L5.15625 12.342L9.63021 17.1621C9.91667 17.4736 10.0521 17.9154 9.98438 18.3516L8.92708 25.1314L14.4063 21.9482C14.776 21.733 15.2188 21.733 15.5833 21.9482L21.0625 25.1314L20.0104 18.3572C19.9427 17.9211 20.0729 17.4793 20.3646 17.1678L24.8385 12.3477L18.6771 11.3564C18.2708 11.2885 17.9167 11.0109 17.7344 10.6031L14.9948 4.47461Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_15">
            <rect width="30" height="29" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        class="star-regular-2"
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_23_15)">
          <path
            d="M14.9948 0C15.474 0 15.9115 0.294531 16.1198 0.764648L19.6927 8.76797L27.6719 10.048C28.1406 10.1217 28.5312 10.4785 28.6771 10.9713C28.8229 11.4641 28.7031 11.9965 28.3698 12.359L22.5833 18.6008L23.9479 27.4141C24.026 27.9238 23.8333 28.4393 23.4479 28.7451C23.0625 29.051 22.5469 29.085 22.1302 28.8414L14.9948 24.6953L7.86459 28.8357C7.44271 29.0793 6.93229 29.0453 6.54688 28.7395C6.16146 28.4336 5.96354 27.9182 6.04167 27.4084L7.40625 18.5951L1.61979 12.359C1.28125 11.9965 1.16667 11.4584 1.3125 10.9713C1.45834 10.4842 1.84896 10.1273 2.31771 10.048L10.2969 8.76797L13.8698 0.764648C14.0833 0.294531 14.5156 0 14.9948 0ZM14.9948 4.47461L12.2604 10.6031C12.0781 11.0053 11.7292 11.2885 11.3177 11.3564L5.15625 12.342L9.63021 17.1621C9.91667 17.4736 10.0521 17.9154 9.98438 18.3516L8.92708 25.1314L14.4063 21.9482C14.776 21.733 15.2188 21.733 15.5833 21.9482L21.0625 25.1314L20.0104 18.3572C19.9427 17.9211 20.0729 17.4793 20.3646 17.1678L24.8385 12.3477L18.6771 11.3564C18.2708 11.2885 17.9167 11.0109 17.7344 10.6031L14.9948 4.47461Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_15">
            <rect width="30" height="29" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        class="star-regular-3"
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_23_19)">
          <path
            d="M14.9948 0C15.474 0 15.9115 0.294531 16.1198 0.764648L19.6927 8.76797L27.6719 10.048C28.1406 10.1217 28.5312 10.4785 28.6771 10.9713C28.8229 11.4641 28.7031 11.9965 28.3698 12.359L22.5833 18.6008L23.9479 27.4141C24.026 27.9238 23.8333 28.4393 23.4479 28.7451C23.0625 29.051 22.5469 29.085 22.1302 28.8414L14.9948 24.6953L7.86459 28.8357C7.44271 29.0793 6.93229 29.0453 6.54688 28.7395C6.16146 28.4336 5.96354 27.9182 6.04167 27.4084L7.40625 18.5951L1.61979 12.359C1.28125 11.9965 1.16667 11.4584 1.3125 10.9713C1.45834 10.4842 1.84896 10.1273 2.31771 10.048L10.2969 8.76797L13.8698 0.764648C14.0833 0.294531 14.5156 0 14.9948 0ZM14.9948 4.47461L12.2604 10.6031C12.0781 11.0053 11.7292 11.2885 11.3177 11.3564L5.15625 12.342L9.63021 17.1621C9.91667 17.4736 10.0521 17.9154 9.98438 18.3516L8.92708 25.1314L14.4063 21.9482C14.776 21.733 15.2188 21.733 15.5833 21.9482L21.0625 25.1314L20.0104 18.3572C19.9427 17.9211 20.0729 17.4793 20.3646 17.1678L24.8385 12.3477L18.6771 11.3564C18.2708 11.2885 17.9167 11.0109 17.7344 10.6031L14.9948 4.47461Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_19">
            <rect width="30" height="29" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div class="line-3"></div>
      <div class="line-4"></div>
      <div class="line-5"></div>
      <div class="line-6"></div>
      <div class="_0">0</div>
      <div class="_2">2</div>
      <div class="_4">4</div>
      <div class="_6">6</div>
      <div class="_8">8</div>
      <div class="_10">10</div>
      <div class="mon1">Mon</div>
      <div class="mon2">Mon</div>
      <div class="mon3">Mon</div>
      <div class="best-selling-products">BEST SELLING PRODUCTS</div>
      <div class="product">Product</div>
      <div class="name">Name</div>
      <div class="color">Color</div>
      <div class="price">Price</div>
      <div class="quantity">Quantity</div>
      <div class="sold">Sold</div>
      <div class="line-7"></div>
      <img src={product} alt="" className="image_Product"/>
      <div class="bast-shoe">BAST SHOE</div>
      <div class="yellow">yellow</div>
      <div class="_70">$70</div>
      <div class="_10">10</div>
      <div class="_26">26</div>
     </div>
    </div>
  );
};