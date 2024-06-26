import { Checkbox, Input } from "@chakra-ui/react";
import React from "react";
import { useState, useContext, useEffect } from "react";

import { AuthContext } from "./AuthContext";

import visa from "../images/web21-footer-visacard-logo.png";
import master from "../images/web21-footer-mastercard-logo.png";
import maestro from "../images/web21-footer-maestrocard-logo.png";
import americanE from "../images/web21-footer-amexcard-logo.png";
import rupay from "../images/web21-footer-rupaycard-logo.png";
import dinnerclub from "../images/web21-footer-dinnerscard-logo.png";
import wallet from "../images/web21-footer-wallet-logo.png";
import internet from "../images/web21-footer-internet-banking-logo.png";
import delievery from "../images/icon-ck-footer-hassle-free-delievry-21.svg";
import returns from "../images/icon-ck-footer-easy-returns-21.svg";
import trophy from "../images/icon-ck-footer-trophy-21.svg";
import versign from "../images/icon-ck-footer-verisign-21-2x.webp";
import psidss from "../images/icon-ck-footer-pci-21-2x.png";
import image from "../images/monster-ultimate--t--gaming-chair-in-black.webp";
import image1 from "../images/high-back-executive-chair-in-black-color-by-valuewud-high-back-executive-chair-in-black-color-by-val-qyqaob.webp";
import location from "../images/w21-locate-orange-icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Address = () => {
  const {
    cartactive,
    setcartactive,
    addressactive,
    setaddressactive,
    setdeliveryactive,
  } = useContext(AuthContext);
  useEffect(() => {
    setcartactive(false);
    setaddressactive(true);
  }, []);
  
  const { cartItems } = useSelector((store) => store.cart);
  const [cartitem, setcartitem] = useState([...cartItems]);
  console.log(cartitem)
  const [addresses, setaddresses] = useState([
    {
      name: "lucky",
    },
  ]);

  const updateaddress = (id) => {
    setaddresses({
      ...addresses[0],
      name: "yadav",
      pincode: 123001,
    });
    console.log(addresses);
    setisshow("hidden");
  };
  // const [total, settotal] = useState(0)
  const [name, setname] = useState("");
  const [numberb, setnumberb] = useState("");
  const [pincodeb, setpincodeb] = useState("");
  const [address1, setaddress1] = useState("");
  const [street, setstreet] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [locationa, setlocation] = useState("Home");
  const [isshow, setisshow] = useState("show");
  const [deliver, setdeliver] = useState(false);
  const [checkout, setcheckout] = useState("");
  console.log(cartitem);
  console.log(addresses);
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  const opencheckout = (value) => {
    setcheckout(value);
  };
  var cartvalue = 0;
  var delieverya = 0;
  var assembly = 0;
  var discount = 0;
  var credits = 0;
  var total = 0;
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  for (let i = 0; i < cartitem.length; i++) {
    cartvalue =
      cartvalue + parseInt(cartitem[i]["actual_price"].split(",").join(""));
    const rndInta = randomIntFromInterval(50, 1000);
    const rndIntb = randomIntFromInterval(50, 1000);
    const rndIntc = randomIntFromInterval(50, 1000);
    const rndIntd = randomIntFromInterval(50, 1000);
    // console.log(rndInt);
    delieverya = 399
    assembly = 432;
    discount = 599
    credits = 1189
    total = cartvalue + delieverya + assembly - discount - credits;
  }
  // console.log(cartvalue);
  // console.log(delieverya);
  // console.log(assembly);
  // console.log(discount);
  // console.log(credits);
  // console.log(total);
  const makedelivery = () => {
    setdeliver(true);
    setdeliveryactive(true);
  };
  // if (deliver == true) {
  // }
  return (
    <div>
      <div className="page">
        <div className="jsp1">
          <h2 className={` ${deliver == true ? "hidden" : "estimates"} `}>
            Delivery Estimates{" "}
            <span className="estimatea">
              ({cartitem.length} {cartitem.length > 1 ? "items" : "item"})
            </span>
          </h2>
        </div>
        <div className="jsp2">
          <div className="page-left">
            <div className={` ${deliver == true ? "hidden" : "jsp2-data"} `}>
              <div className="cart-lista">
                {cartitem?.map((item) => (
                  <div className="card" key={item.id}>
                    <img className="item-image" src={item.img[0]} alt="" />
                    <div className="cart-right cart-righta">
                      <div className="jss-top1">
                        <span className="deliveryby">Delivery by</span>
                        <span className="delivery3">
                          <span className="delivery5">wed,o8 Sep</span>

                          <span className="delivery4">| ₹ {delieverya}</span>
                        </span>
                      </div>
                      <div className="jss-top1">
                        <span className="deliveryby">Assembly</span>
                        <span className="delivery3">
                          <span className="delivery5">
                            Can Be Self-Assembled
                          </span>
                          <span className="delivery4">
                            {item.assembly === 0 ? "" : ` | ₹ ${assembly}`}
                          </span>
                        </span>
                      </div>
                      <div className="jss-bottom1"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={` ${deliver == true ? "hidden" : "jsd1"} `}>
              <h5 className="select-address">Select Delivery Address</h5>
              <span className="modifyaddres">Add Or Change Address</span>
            </div>
            <h2 className={` ${deliver == true ? "estimates" : "hidden"} `}>
              Deliver Here
            </h2>
            {/* <h6 className={` ${isshow == "show" ? "hidden" : "edit-addr"} `}>
              Edit Address
            </h6> */}
            <div className="getaddress">
              <div
                className={` ${isshow == "show" ? "hidden" : "your-address"} `}
              >
                <div className="nameb">
                  <span className="namec">{name} </span>
                  <span className="locationd"> {locationa}</span>
                </div>
                <div className="adr">
                  {address1}, {address2} <br /> {state} - {pincodeb} <br />
                  {state}
                </div>
                <div className="mnumber">Mobile: {numberb}</div>
              </div>
              <div className={` ${isshow == "show" ? "jsd2 " : " hidden"} `}>
                {/* <h6>Default Address</h6> */}
                <div className={` ${deliver == true ? "hidden" : "jsd3"} `}>
                  <div className="addressinput">
                    <div className="addr-row">
                      <div className="leftc">
                        <input
                          className="inputbox"
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          placeholder="Enter Name"
                        />
                        <div className="err-message"></div>
                      </div>
                      <div className="rightc">
                        <input
                          type="text"
                          className="inputbox"
                          value={numberb}
                          onChange={(e) => setnumberb(e.target.value)}
                          placeholder="Enter Mobile Number"
                        />
                        <div className="err-message"></div>
                      </div>
                    </div>
                    <div className="addr-row">
                      <div className="leftc">
                        <input
                          className="inputbox"
                          value={pincodeb}
                          onChange={(e) => setpincodeb(e.target.value)}
                          placeholder="Pincode"
                        />
                        <div className="err-message"></div>
                      </div>
                      <div className="rightc">
                        <div className="locatea">
                          <div className="locate">
                            {/* <img src={location} alt="" /> */}
                            <p>Locate me</p>
                          </div>
                        </div>

                        <div className="err-message"></div>
                      </div>
                    </div>
                    <div className="addr-row">
                      <div className="centrea">
                        <input
                          className="inputbox"
                          value={address1}
                          onChange={(e) => setaddress1(e.target.value)}
                          placeholder="House/Flat/Block Number"
                        />
                        <div className="err-message"></div>
                      </div>
                    </div>
                    <div className="addr-row">
                      <div className="centrea">
                        <input
                          className="inputbox"
                          value={address2}
                          onChange={(e) => setaddress2(e.target.value)}
                          placeholder="Apartment/Building/Society Name"
                        />
                        <div className="err-message"></div>
                      </div>
                    </div>
                    <div className="addr-row">
                      <div className="leftc">
                        <input
                          className="inputbox"
                          value={city}
                          onChange={(e) => setcity(e.target.value)}
                          placeholder="Select City"
                        />
                        <div className="err-message"></div>
                      </div>
                      <div className="rightc">
                        <input
                          className="inputbox"
                          value={state}
                          onChange={(e) => setstate(e.target.value)}
                          placeholder="State"
                        />
                        <div className="err-message"></div>
                      </div>
                    </div>
                    <div className="addr-row align-lefta" id="align-lefta">
                      <div className="leftc">
                        <input
                          className="inputbox"
                          value={"India"}
                          onChange={(e) => setstate(e.target.value)}
                          placeholder="Currently"
                        />
                        <div className="err-message"></div>
                      </div>
                    </div>
                    <div className="addr-row">
                      <div className="leftc">
                        <div className="type-of-address">Type of Address</div>
                        <div className="select-type">
                          <div
                            onClick={() => setlocation("Home")}
                            className={` ${
                              locationa == "Home" ? "homeb" : "homeb homea"
                            } `}
                          >
                            Home
                          </div>
                          <div
                            onClick={() => setlocation("Work")}
                            className={` ${
                              locationa == "Work"
                                ? "homeb officeb"
                                : "homeb officea"
                            } `}
                          >
                            Work
                          </div>
                          <div
                            onClick={() => setlocation("Others")}
                            className={` ${
                              locationa == "Others"
                                ? "homeb othersa"
                                : "homeb othersb"
                            } `}
                          >
                            others
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="addr-row">
                      <Checkbox>Set this as your default address</Checkbox>
                    </div>
                    <div className="addr-row">
                      <div className="centrea">
                        <div className="butt-save cancelb">Cancel</div>
                        <div
                          onClick={() => updateaddress(0)}
                          className="butt-save saveb"
                        >
                          Save
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={` ${isshow == "show" ? "hidden" : "jsd4"} `}>
              {/* <span className="billing_adr">
                Billing Address Same As Shipping Address
              </span> */}
              {/* <span className="billing-adr-change">Change</span> */}
            </div>
            <div className={` ${deliver == true ? "payment-box" : "hidden"} `}>
              <h5 className="choose-method">Choose Payment Method</h5>
              <div className="payment-opt">
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "debit" ? "circlea thik" : "circlea"
                    } `}
                  ></span>{" "}
                  <span
                    className="checkout-card check-debit"
                    onClick={() => opencheckout("debit")}
                  >
                    ATM/DEBIT CARD
                  </span>
                  <div
                    className={` ${
                      checkout == "debit"
                        ? "proceed-to-pay debit-card"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "paylater" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-paylater"
                    onClick={() => opencheckout("paylater")}
                  >
                    CARDLESS EMI / PAYLATER
                  </span>
                  <div
                    className={` ${
                      checkout == "paylater"
                        ? "proceed-to-pay paylater"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "credit" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-debit"
                    onClick={() => opencheckout("credit")}
                  >
                    CREDIT CARD
                  </span>
                  <div
                    className={` ${
                      checkout == "credit"
                        ? "proceed-to-pay credit-card"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "emi" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-emi"
                    onClick={() => opencheckout("emi")}
                  >
                    EMI
                  </span>
                  <div
                    className={` ${
                      checkout == "emi" ? "proceed-to-pay emi" : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "internet" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-internet"
                    onClick={() => opencheckout("internet")}
                  >
                    INTERNET BANKING
                  </span>
                  <div
                    className={` ${
                      checkout == "internet"
                        ? "proceed-to-pay debit-card"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "gift" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-gift"
                    onClick={() => opencheckout("gift")}
                  >
                    PEPPERFRY GIFT CARD
                  </span>
                  <div
                    className={` ${
                      checkout == "gift"
                        ? "proceed-to-pay debit-card"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "google" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-google"
                    onClick={() => opencheckout("google")}
                  >
                    GOOGLE PAY/UPI
                  </span>
                  <div
                    className={` ${
                      checkout == "google"
                        ? "proceed-to-pay debit-card"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "wallet" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-wallet"
                    onClick={() => opencheckout("wallet")}
                  >
                    WALLET
                  </span>
                  <div
                    className={` ${
                      checkout == "wallet"
                        ? "proceed-to-pay debit-card"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <Link to={"/payment"}>
                        <span>
                          PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="checkout-debit-card">
                  <span
                    className={` ${
                      checkout == "international" ? "circlea thik" : "circlea"
                    } `}
                  ></span>
                  <span
                    className="checkout-card check-international"
                    onClick={() => opencheckout("international")}
                  >
                    INTERNATIONAL CARDS
                  </span>
                  <div
                    className={` ${
                      checkout == "international"
                        ? "proceed-to-pay debit-card"
                        : "hidden"
                    } `}
                  >
                    <div className="proceeda">
                      <span>
                        PROCEED TO PAY ₹ {total.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-right page-righta">
            <div className="right-main">
              <div className="rmid1">
                <div className="price-detail jsc2">
                  <p>Price Details</p>
                  <p>
                    {cartitem.length} {cartitem.length > 1 ? "items" : "item"}
                  </p>
                </div>
                <div className="pricing">
                  <div className="cartvalue jsc2 aa">
                    <p>Cart Value</p>
                    <p>₹ {cartvalue}</p>
                  </div>
                  <div className="delivery1 jsc2 aa">
                    <p>Delivery</p>
                    <p>₹ {delieverya}</p>
                  </div>
                  <div className="assembly1 jsc2 aa">
                    <p>Assembly</p>
                    <p>₹ {assembly}</p>
                  </div>
                </div>
                <div className="discount">
                  <div className="retail jsc2">
                    <p>Retail Discount</p>
                    <p>(-)₹ {discount.toLocaleString("en-IN")}</p>
                  </div>
                  <div className="credits jsc2">
                    <p>Credits Reedemed</p>
                    <p>(-)₹ {credits.toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <div className="total">
                  <div className="sub-total jsc2">
                    <div className="jsct">
                      <p>Sub Total</p>
                      <p className="p11">(incl. of all taxes)</p>
                    </div>
                    <p>₹ {total.toLocaleString("en-IN")}</p>
                  </div>
                </div>
                <div className="rinfo">
                  <div className="rinfob">
                    <span>
                      <span className="emi">EMI </span>
                      Starting ₹{Math.floor(total / 33).toLocaleString("en-IN")}
                      /month
                    </span>
                    <span className="emi">No Cost EMI Available</span>
                  </div>
                </div>

                <div className={` ${deliver == true ? "hidden" : "checkout"} `}>
                  <p className="p1a" onClick={() => makedelivery()}>
                    PLACE ORDER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer">
        <div className="fcontainer">
          <div className="row footer-row1">
            <div className="fcol">
              <h6 className="f-h6">We accept</h6>
              <div className="fcardlist">
                <img src={visa} alt="" />
                <img src={master} alt="" />
                <img src={maestro} alt="" />
                <img src={americanE} alt="" />
              </div>
              <div className="fcardlist">
                <img src={rupay} alt="" />
                <img src={dinnerclub} alt="" />
                <img src={wallet} alt="" />
                <img src={internet} alt="" />
              </div>
            </div>
            <div className="fcol">
              <h6 className="f-h6">Buy Safe Pay Easy</h6>
              <div className="fdata">
                <div className="jsf1">
                  <img src={delievery} alt="" />
                  <p>
                    Hassale Free <br /> Delievery
                  </p>
                </div>
                <div className="jsf1">
                  <img src={returns} alt="" />
                  <p>
                    Easy <br />
                    Returns
                  </p>
                </div>
                <div className="jsf1">
                  <img src={trophy} alt="" />
                  <p>
                    11 Lakh Homes <br />
                    Made Beautiful
                  </p>
                </div>
              </div>
            </div>
            <div className="fcol">
              <h6 className="f-h6">100% Safe & Secure</h6>
              <div className="fdata fd2">
                <img src={versign} alt="" />
                <img src={psidss} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Address;
