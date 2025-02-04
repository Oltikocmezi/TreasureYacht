import React from "react";
/* import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInBg from "../../assets/img/SignInUp/SignBackground.jpg";
import NavBar from "../NavBar/NavBar";
import { MdAccountCircle } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest"; */

function Membership() {
  /* const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);

      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }; */
  return (
    <>
      <div
        className="font-mono w-full h-screen flex flex-col justify-center items-center"
        /* style={{
          backgroundImage: `url(${SignInBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }} */
      >
        <form
          // onSubmit={handleSubmit}
          className=" flex flex-col justify-around items-center bg-black bg-opacity-80 rounded-3xl h-fit w-80 px-6 py-20 mt-24 md:w-96 lg:w-5/12"
        >
          {/* <MdAccountCircle className="h-24 w-24 text-green-900" /> */}
          <input
            className="p-4 bg-transparent border-solid border-2 border-green-900 rounded-xl mt-6 text-white"
            name="username"
            placeholder="Username"
            type="text"
            required
            minLength={3}
            maxLength={20}
          />
          <input
            className="p-4 mt-4 bg-transparent text-white border-solid border-2 border-green-900 rounded-xl"
            name="password"
            placeholder="Password"
            type="password"
            required
          />
          {/* <Link
              className="text-right w-60 text-blue-700 hover:text-blue-500 font-bold"
              to="/"
            >
              Forgot password?
            </Link> */}
          <button
            className="mt-8 bg-green-900 bg-opacity-70 text-white p-4 w-64 rounded-full text-center"
            //   disabled={isLoading}
          >
            Log in
          </button>
          {/* {error && <span className="text-red-600">{error}</span>} */}
          <h1 className="text-white mt-4">Or</h1>
          <button
            href="/"
            className="mt-8 bg-red-800 bg-opacity-90 text-white p-4 w-64 rounded-xl text-center"
          >
            Continue With Google
          </button>{" "}
          */
          <p className="mt-6 tracking-tight text-md px-2 text-center w-80 text-white text-bold">
            Don't you have an account Get Started
          </p>
        </form>
      </div>
    </>
  );
}

export default Membership;
