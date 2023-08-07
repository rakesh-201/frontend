import React from "react";
import Safe from "../Images/Safe.gif";
import PortfolioManagement from "../Images/PortfolioManagement.gif";
import Service from "../Images/Service.gif";

function Card() {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Safe}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Secure Transactions</h5>
              <p className="card-text">
              At Swift Bond Invest, we prioritize the safety and confidentiality of your financial transactions. Our platform employs state-of-the-art encryption and security protocols to ensure that all your bond buying and selling activities are conducted with the utmost protection. Your personal information and payment details are safeguarded against unauthorized access, and we regularly monitor for any potential security threats. Rest assured that with Swift Bond Invest, you can invest in bonds confidently, knowing that your transactions are conducted in a secure and trustworthy environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">24/7 Service</h5>
              <p className="card-text">
                Experience language learning on your own terms with LinguaLink's
                24/7 service. Need assistance, practice, or a conversation
                partner at 2 am? We've got you covered. With round-the-clock
                access to our resources and dedicated support, you can learn at
                your own pace and convenience, making language learning a
                seamless part of your everyday life. Join LinguaLink and embrace
                the freedom of learning anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Service} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={PortfolioManagement} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Portfolio Management</h5>
              <p className="card-text">
              At Swift Bond Invest, we understand that successful bond investing requires diligent oversight and informed decision-making. Our advanced Portfolio Management feature empowers you to take control of your bond investments with ease and confidence. Whether you are an experienced investor or just starting on your financial journey, our user-friendly dashboard provides a comprehensive set of tools to effectively manage your bond portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
