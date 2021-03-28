import React, { useState, useEffect } from "react";

const Main = (props) => {
  return (
    <div>
      <section
        id="reinvest"
        style={{
          backgroundImage: "url('images/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "690px",
          paddingTop: "80px",
        }}
      >
        <div className="container">
          <br />
          <br />
          <br />
          <h1 className="text-primary text-center bg-white rounded-lg shadow-lg p-3 mb-5">
            PoliTalk
          </h1>
          <br />
          <br />
          <br />
          <h3 className="text-white bg-primary rounded-lg shadow-lg p-3 mb-5">
            Digitally empowering underrepresented minorities in politics
          </h3>
        </div>
      </section>
      <section id="about" className="p-4">
        <div className="container">
          <h1 className="d-flex justify-content-center m-2 p-2">About Us</h1>
          <p className="d-flex justify-content-center m-2 p-2">
            PoliTalk is a politics exchange platform, aiming to create a
            professional and efficient connection between underrepresented
            minority groups and politics. Community members can post questions
            or concerns and other members can +1 the post. Professional
            legislators or lawmakers can then answer or attempt to enforce laws
            to support these concerns. To make this process as effective as
            possible, we use NLP Machine Learning to suggest other articles or
            posts to users based on previous likes. Our platform also offers
            suggestions for events that coincide with their interests and free
            time via Google Calendar.
          </p>
        </div>
      </section>
      <section id="services" className="">
        <div className="bg-dark text-white p-4">
          <div className="container">
            <h1 className="d-flex justify-content-center m-2 p-4">
              Our Services
            </h1>

            <div className="row exp-grids py-3 d-inline-flex justify-content-center">
              <div className="col-lg-5 col-md-7 bg-white text-dark m-2 p-4">
                <img src="images/browse.png" alt=" " className="img-fluid" />
                <div className="exp wthree">
                  <h5>Browse Stocks</h5>
                  <div className="clearfix"></div>
                  <p>
                    Easily browse through stocks and see their past. Change the
                    scale of the graph to your pleasing. Then if you wish to
                    hold a position, specify the amount of money you wish to
                    donate and submit.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-7 bg-white text-dark m-2 p-4">
                <br />
                <br />
                <br />
                <img src="images/logo.png" alt=" " className="img-fluid" />
                <div className="exp wthree">
                  <br />
                  <br />
                  <br />

                  <h5>Charities</h5>
                  <div className="clearfix"></div>

                  <p>
                    Help out your favorite charities while learning and
                    practicing trading. The charities will receive the initial
                    buy price. Then, you can set a percentage of the profits
                    that also goes to charity. In this era, instead of a simple
                    donation, you can use our trading platform to trade for your
                    charities.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-7 bg-white text-dark m-2 p-4">
                <br />
                <br />
                <br />
                <img src="images/portfolio.png" alt=" " className="img-fluid" />
                <div className="exp wthree">
                  <br />
                  <br />
                  <br />

                  <h5>Portfolio</h5>
                  <div className="clearfix"></div>

                  <p>
                    Easily manage your portfolio with Reinvest. Here you can see
                    all the positions you currently hold as well as the initial
                    buy price and quantity. You can sell the stock by clicking
                    Sell for the desired stock. You can also see the current
                    earnings for yourself and the charity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="support" className="m-2">
        <div className="container">
          <h1 className="d-flex justify-content-center m-2 p-4">Support</h1>
          <h4>Contact:</h4>
          <p>@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Main;
