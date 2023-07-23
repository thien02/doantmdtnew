import Nav from './nav';
import "../css/Order.css";
import icon_search from "../asset/img/magnifying-glass-solid.svg"
import product from "../asset/img/shoe19_720x.webp"
import bag from "../asset/img/bag-shopping-solid (1).svg"
import order_image from "../asset/img/Order.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar} from "@fortawesome/free-solid-svg-icons";export const Order = () => {

  library.add(faStar);

  return (
    <div>
      <Nav/>   
    <img src={order_image} alt="" className="order_image"/>
    <div className="rectangle2-12">
        <div class="orders-list">ORDERS LIST</div>
        <div class="order-id">Order ID</div>
        <div class="user">User</div>
        <div class="phone">Phone</div>
        <div class="address">Address</div>
        <div class="status">Status</div>
        <div class="detail">Detail</div>
        <div class="line2-3"></div>
        <div class="rectangle2-33">
      <div class="first">First</div>
        </div>
        <div class="rectangle2-35">
        <div class="2">2</div>
        </div>
        <div class="rectangle2-34">
        <div class="last">Last</div>
        </div>
        </div>
    </div>
  );
};

