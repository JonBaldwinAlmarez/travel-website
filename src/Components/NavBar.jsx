import React, { useState, useEffect } from "react";
import {
	FaBars,
	FaTwitter,
	FaGooglePlusG,
	FaInstagram,
	FaFacebook,
} from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";

function NavBar() {
	const [NavBar, setNavBar] = useState(false);

	const actionNavBar = () => {
		setNavBar(!NavBar);
	};

	return (
		<div className=" w-full min-h-[50px] flex justify-between items-center z-10 absolute text-white bg-gray-800">
			<ul className="hidden sm:flex px-4">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#gallery">Gallery</a>
				</li>
				<li>
					<a href="#deal">Deal</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="flex justify-between">
				<FaFacebook size={20} className="mx-4" />
				<FaGooglePlusG size={20} className="mx-4" />
				<FaTwitter size={20} className="mx-4" />
				<FaInstagram size={20} className="mx-4" />
			</div>
			{/* Hamburger icons */}
			<div onClick={actionNavBar} className="sm:hidden z-10">
				<FaBars size={20} className="mr-4 cursor-pointer" />
			</div>
			{/* Menu */}
			<div
				onClick={actionNavBar}
				className={
					NavBar
						? " overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-400 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flex-col"
						: "absolute top-0 h-screen left-[-100%] ease-in duration-500"
				}
			>
				<ul className="h-full w-full text-center pt-12">
					<li className="text-2xl py-8">
						<a href="/">Home</a>
					</li>
					<li className="text-2xl py-8">
						<a href="#gallery">Gallery</a>
					</li>
					<li className="text-2xl py-8">
						<a href="#deal">Deal</a>
					</li>
					<li className="text-2xl py-8">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
