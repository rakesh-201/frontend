import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import LoginImg from "../Images/Login.gif";

function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img src={LoginImg} class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col="4" md="6">
          <MDBInput
            wrapperClass="mb-4"
            label="User Name"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <Link
            className="mb-4 w-100 btn btn-warning"
            size="lg"
            onClick={() => {
              console.log("in");
            }}
            to="/dashboard"
          >
            Sign in
          </Link>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
          >
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Continue with facebook
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#55acee" }}
          >
            <MDBIcon fab icon="twitter" className="mx-2" />
            Continue with twitter
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
