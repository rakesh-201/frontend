import React from "react";

function Footer() {
  return (
    <div class="card text-center navbarCol">
      {/* <div class="card-header">Featured</div> */}
      <div class="card-body">
        <h5 class="card-title">Checkout below links</h5>
        <p class="card-text">
          {/* With supporting text below as a natural lead-in to additional content. */}
        </p>
        <div className="row">
          <a href="#" class="btn btn-warning offset-3 col-2">
            Privacy Policy
          </a>
          <a href="#" class="btn btn-warning col-2 mx-2">
            Terms of service
          </a>
          <a href="#" class="btn btn-warning col-2">
            Newsletter Subscription
          </a>
        </div>
      </div>
      <div class="card-footer text-muted">&copy; 2023 by Team 27</div>
    </div>
  );
}

export default Footer;
