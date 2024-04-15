import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import yourImage from "./images/graph.jpg";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <div
        className="header-section"
        style={{
          backgroundColor: "rgba(124, 3, 123, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div>
          <FaPhone
            style={{ marginRight: "5px", fontSize: "18px", color: "white" }}
          />
          <span
            style={{
              marginRight: "20px",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "28px",
              textAlign: "left",
              color: "white",
            }}
          >
            +91 8088013100
          </span>

          <FaEnvelope
            style={{
              marginRight: "5px",
              fontSize: "15px",
              color: "white",
              alignItems: "center",
            }}
          />
          <span
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "28px",
              textAlign: "left",
              color: "white",
            }}
          >
            hello@bru.finance
          </span>
        </div>
        <div>
          <FaLinkedin
            style={{ marginRight: "10px", fontSize: "20px", color: "white" }}
          />
          <FaTwitter
            style={{ marginRight: "10px", fontSize: "20px", color: "white" }}
          />
          <FaInstagram
            style={{ marginRight: "10px", fontSize: "20px", color: "white" }}
          />
        </div>
      </div>
      <div
        className="nav-section"
        style={{
          backgroundColor: "white",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1358/1*W4zW2KGtOn_hLyIYJJ-bWg.png"
            alt="logo"
            style={{
              width: "60px",
              height: "40px",
              position: "absolute",
              top: "5%",
              left: "5%",
            }}
          />
        </div>
        <Router>
          
        </Router>
        <div>
          <span
            style={{
              marginRight: "30px",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "24.2px",
              textAlign: "center",
            }}
          >
            Home
          </span>

          <span
            style={{
              marginRight: "30px",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "24.2px",
              textAlign: "center",
            }}
          >
            About Us
          </span>
          <span
            style={{
              marginRight: "30px",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "24.2px",
              textAlign: "center",
            }}
          >
            Features
          </span>

          <span
            style={{
              marginRight: "30px",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "24.2px",
              textAlign: "center",
            }}
          >
            Contacts
          </span>

          <span
            style={{
              marginRight: "30px",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "24.2px",
              textAlign: "center",
            }}
          >
            FAQ
          </span>
          <span style={{ fontWeight: "bold", color: "white" }}>Contact</span>
        </div>
      </div>
      
      <div style={{ position: "relative" }}>
        <img
          src="https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_1280.jpg"
          alt="businessman"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "100vh",
            width: "100%",
            height: "280px",
            backgroundColor: "rgba(240, 219, 250, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              position: "absolute",
              top: "8vh",
              font: "inter",
              color: "rgba(124, 3, 123, 1)",
            }}
          >
            About Brú Finance
          </h2>
          <p style={{ width: "1240px", font: "inter" }}>
            Brú Finance is a DeFi platform that introduces Fractional ESG bonds,
            a novel fixed-income loan tool. This innovative protocol opens up
            access to banking services for individuals holding real-world assets
            (RWAs) worldwide. It achieves this by transforming RWAs into digital
            tokens and launching ESG-compliant fractional bonds on the
            blockchain.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            width: "1240px",
            height: "112px",
            top: "1000px",
            left: "600px",
          }}
        >
          <h2
            style={{
              position: "absolute",
              font: "inter",
              color: "rgba(124, 3, 123, 1)",
            }}
          >
            Features - Why Brú Bonds
          </h2>
          <p
            style={{
              position: "absolute",
              width: "1240px",
              font: "inter",
              top: "60px",
              right: "35%",
            }}
          >
            There are a few reasons why you might want to consider investing in
            Brú Finance.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            top: "1150px",
            left: "132px",
            backgroundColor: "rgba(240, 219, 250, 0.5)",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/13105/13105373.png"
            style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              top: "15px",
              left: "70px",
            }}
          />
          <h3 style={{ position: "absolute", top: "65px", left: "50px" }}>
            RWA Backed
          </h3>
          <p
            style={{
              position: "absolute",
              top: "100px",
              left: "20px",
              textAlign: "center",
              fontSize: "small",
              wordWrap: "break-word",
            }}
          >
            Backed by Real World Assets to the tune of 140% of the bond value
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            top: "1150px",
            left: "480px",
            backgroundColor: "rgba(240, 219, 250, 0.5)",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4893/4893024.png"
            style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              top: "15px",
              left: "70px",
            }}
          />
          <h3 style={{ position: "absolute", top: "65px", left: "50px" }}>
            Fixed Tenure
          </h3>
          <p
            style={{
              position: "absolute",
              top: "100px",
              left: "20px",
              textAlign: "center",
              fontSize: "small",
              wordWrap: "break-word",
            }}
          >
            Short 6-month tenure to match the loan repayment schedule
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            top: "1150px",
            left: "820px",
            backgroundColor: "rgba(240, 219, 250, 0.5)",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4408/4408037.png"
            style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              top: "15px",
              left: "70px",
            }}
          />
          <h3 style={{ position: "absolute", top: "65px", left: "50px" }}>
            Higher Returns
          </h3>
          <p
            style={{
              position: "absolute",
              top: "100px",
              left: "20px",
              textAlign: "center",
              fontSize: "small",
              wordWrap: "break-word",
            }}
          >
            With Bru Finance, you will get more than 22% returns, including all
            benefits
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            top: "1150px",
            left: "1160px",
            backgroundColor: "rgba(240, 219, 250, 0.5)",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3kN-9cpTZzvPiF5Ocw90vQmKGMfmXn2YKB_DKh9TKH8lDM9PpOhgL3fOPnbJa7a7cAU&usqp=CAU"
            style={{
              position: "absolute",
              width: "60px",
              height: "60px",
              top: "15px",
              left: "70px",
            }}
          />
          <h3 style={{ position: "absolute", top: "65px", left: "50px" }}>
            Social Impact
          </h3>
          <p
            style={{
              position: "absolute",
              top: "100px",
              left: "20px",
              textAlign: "center",
              fontSize: "small",
              wordWrap: "break-word",
            }}
          >
            Provide financial assistance to unbanked /underbanked communities.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            width: "1600px",
            height: "400px",
            top: "1420px",
            backgroundImage:
              'url("https://wallpapers.com/images/hd/investment-background-ntdozfa12skxcjsj.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "600px",
              height: "270px",
              top: "100px",
              left: "90px",
              borderRadius: "64px",
            }}
          >
            <h2 style={{position:'absolute',left:'20%', color: "white", font: "inter",textAlign:'left'}}>
              Start with a minimum
              <br />
              investment of Rs. 50,000 only
            </h2>
            <AiFillCaretRight style={{ position:'absolute',top:'50%',color: "white", font: "inter",left:'18%' }}/>
            <span style={{ position:'absolute',top:'30%',color: "white", font: "inter",left:'20%' }}>
              Assured Economic Return @12% p.a.
            </span>
            <br />
            <AiFillCaretRight  style={{ position:'absolute',top:'31%',color: "white", font: "inter",left:'18%' }}/>
            <span  style={{ position:'absolute',top:'40%',color: "white", font: "inter",left:'20%' }}>
              Free Bonus Brú Tokens @10% p.a.
            </span>
            <br />
            <AiFillCaretRight style={{ position:'absolute',top:'41%',color: "white", font: "inter",left:'18%' }}/>
            <span style={{ position:'absolute',top:'50%',color: "white", font: "inter",left:'20%' }}>
              Karma Points for Creating Social Impact
            </span>
            <br />
            <br />
            <br />
            <button
              style={{
                position: "absolute",
                top: "75%",
                left: "28%",
                transform: "translateX(-50%)",
                borderRadius: "25px",
                backgroundColor: "rgba(174, 0, 171, 1)",
                padding: "10px 20px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "black",
              }}
            >
              Invest Now
            </button>

            <img
              src={yourImage}
              alt="Optional Alt Text"
              style={{
                position: "absolute",
                top: "0%",
                width: "300px",
                height: "280px",
                marginLeft: "600px",
              }}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "1600px",
            height: "700px",
            top: "1820px",
            backgroundColor: "white",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "rgba(124, 3, 123, 1)",
              font: "inter",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            style={{
              textAlign: "center",
              color: "rgba(102, 102, 102, 1)",
              font: "inter",
              fontSize: "20px",
              lineHeight: "30px",
            }}
          >
            Get answers for a few of the frequently asked questions by investors
            like you!
          </p>
          <div
            style={{
              position: "absolute",
              top: "27.5%",
              left: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "rgba(166, 112, 192, 0.4)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "0%",
            }}
          >
            <span
              style={{
                marginRight: "auto",
                color: "rgba(84, 15, 122, 1)",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              What is Bru?
            </span>
            <FaMinusCircle style={{ cursor: "pointer" }} />
          </div>
          <div
            style={{
              position: "absolute",
              top: "38%",
              left: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "5%",
            }}
          >
            Brú Finance is an award-winning DeFi lending protocol bringing
            emerging market asset-backed Fractionalized ESG bonds to
            decentralized finance to serve the 1.7 Billion unbanked people with
            Decentralized Finance backed by real-world assets (RWAs).
          </div>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "rgba(166, 112, 192, 0.4)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "0%",
            }}
          >
            <span
              style={{
                marginRight: "auto",
                color: "rgba(84, 15, 122, 1)",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              What are Emerging Market Asset-Backed Bonds?
            </span>
            <FaPlusCircle style={{ cursor: "pointer" }} />
          </div>

          <div
            style={{
              position: "absolute",
              top: "56%",
              left: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "rgba(166, 112, 192, 0.4)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "0%",
            }}
          >
            <span
              style={{
                marginRight: "auto",
                color: "rgba(84, 15, 122, 1)",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              How do I lend to the Brú Pool?
            </span>
            <FaPlusCircle style={{ cursor: "pointer" }} />
          </div>

          <div
            style={{
              position: "absolute",
              top: "68.5%",
              left: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "rgba(166, 112, 192, 0.4)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "0%",
            }}
          >
            <span
              style={{
                marginRight: "auto",
                color: "rgba(84, 15, 122, 1)",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              How do I borrow from the Brú Pool?
            </span>
            <FaPlusCircle style={{ cursor: "pointer" }} />
          </div>

          <div
            style={{
              position: "absolute",
              top: "62.2%",
              left: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "rgba(166, 112, 192, 0.4)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "0%",
            }}
          >
            <span
              style={{
                marginRight: "auto",
                color: "rgba(84, 15, 122, 1)",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              How do I invest in Brú Finance?
            </span>
            <FaPlusCircle style={{ cursor: "pointer" }} />
          </div>

          <div
            style={{
              position: "absolute",
              top: "75%",
              left: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "white",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              height: "0%",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "0",
                color: "rgba(124, 3, 123, 1)",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              View All FAQs
            </span>
            <GoArrowRight style={{ position: "absolute", left: "17%" }} />
          </div>

          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "12%",
              transform: "translateY(-50%)",
              width: "544px",
              backgroundColor: "rgba(84, 15, 122, 1)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                marginBottom: "20px",
                textAlign: "center",
                color: "white",
                font: "inter",
              }}
            >
              Enquiry Now
            </h2>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ marginBottom: "10px", width: "80%" }}>
                <input
                  type="text"
                  placeholder="Name"
                  style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px", width: "80%" }}>
                <input
                  type="tel"
                  placeholder="Mobile"
                  style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px", width: "80%" }}>
                <input
                  type="email"
                  placeholder="Email"
                  style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px", width: "80%" }}>
                <input
                  type="text"
                  placeholder="City"
                  style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px", width: "80%" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <input type="checkbox" style={{ marginRight: "5px" }} />
                  Yes, please guide me for exam booking
                </label>
              </div>
              <button
                type="submit"
                style={{
                  width: "50%",
                  backgroundColor: "deeppink",
                  color: "rgba(242, 242, 242, 1)",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "5%",
            transform: "translateY(-50%)",
            width: "40%",
            color: "white",
          }}
        >
          <h1>Brú Finance Bonds</h1>
          <p>
            Bru Finance offers Bru Bonds that are unique in the sense that it
            allows the investor to invest in the operations of individual
            farmers secured by 140% by the assets. Brú Bonds are 100% secured in
            the event of a default by the borrower.
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "5%",
            height: "100px",
            width: "150px",
            transform: "translateY(-50%)",
            backgroundColor: "deeppink",
            padding: "10px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <p
            style={{
              color: "black",
              font: "inter",
              fontWeight: "700",
              fontSize: "32px",
              align: "center",
              lineHeight: "38.73px",
              top: "0%",
              position: "absolute",
            }}
          >
            12% p.a
          </p>
          <span
            style={{
              color: "black",
              font: "inter",
              fontWeight: "500",
              fontSize: "18px",
              align: "center",
              lineHeight: "21.78px",
              top: "67%",
              position: "absolute",
              textAlign: "center",
            }}
          >
            Assured Return
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "18%",
            height: "100px",
            width: "150px",
            transform: "translateY(-50%)",
            backgroundColor: "deeppink",
            padding: "10px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <p
            style={{
              color: "black",
              font: "inter",
              fontWeight: "700",
              fontSize: "32px",
              align: "center",
              lineHeight: "38.73px",
              top: "0%",
              position: "absolute",
            }}
          >
            10% p.a.
          </p>
          <p
            style={{
              color: "black",
              font: "inter",
              fontWeight: "500",
              fontSize: "18px",
              align: "center",
              lineHeight: "21.78px",
              top: "50%",
              position: "absolute",
              left: "15%",
            }}
          >
            Brú Tokens
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "31%",
            height: "100px",
            width: "150px",
            transform: "translateY(-50%)",
            backgroundColor: "deeppink",
            padding: "10px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <p
            style={{
              position: "absolute",
              color: "black",
              font: "inter",
              fontWeight: "700",
              fontSize: "25px",
              lineHeight: "38.73px",
              textAlign: "center",
              top: "5%",
              left: "15%",
              alignItems: "center",
            }}
          >
            Karma
          </p>
          <p
            style={{
              color: "black",
              font: "inter",
              fontWeight: "700",
              fontSize: "25px",
              lineHeight: "38.73px",
              textAlign: "center",
              top: "30%",
              left: "15%",
              position: "absolute",
            }}
          >
            Points
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "16%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <FaPlusCircle style={{ cursor: "pointer", fontSize: "30px" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "29%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <FaPlusCircle style={{ cursor: "pointer", fontSize: "30px" }} />
        </div>
        <button
          style={{
            position: "absolute",
            top: "75%",
            left: "9%",
            transform: "translateX(-50%)",
            borderRadius: "25px",
            backgroundColor: "rgba(174, 0, 171, 1)",
            padding: "10px 20px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          Invest Now
        </button>

        <div
          style={{
            position: "absolute",
            top: "88%",
            left: "25%",
            width: "628px",
            height: "74px",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            padding: "10px",
            color: "white",
            fontSize: "16px",
            textAlign: "center",
            font: "inter",
          }}
        >
          Feel free to reach us at +91 8088013100, hello@brufinance.com in case
          of any queries
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
            width: "40%",
            backgroundColor: "rgba(84, 15, 122, 1)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              textAlign: "center",
              color: "white",
              font: "inter",
            }}
          >
            Enquiry Now
          </h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ marginBottom: "10px", width: "80%" }}>
              <input
                type="text"
                placeholder="Name"
                style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px", width: "80%" }}>
              <input
                type="tel"
                placeholder="Mobile"
                style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px", width: "80%" }}>
              <input
                type="email"
                placeholder="Email"
                style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px", width: "80%" }}>
              <input
                type="text"
                placeholder="City"
                style={{ width: "90%", padding: "10px", borderRadius: "5px" }}
              />
            </div>
            <div style={{ marginBottom: "10px", width: "80%" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <input type="checkbox" style={{ marginRight: "5px" }} />
                Yes, please guide me for exam booking
              </label>
            </div>
            <button
              type="submit"
              style={{
                width: "50%",
                backgroundColor: "rgba(84, 15, 122, 1)",
                color: "rgba(242, 242, 242, 1)",
                padding: "10px",
                border: "1px solid white",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
