import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

function TopBar() {
	return (
		<div className="flex justify-between items-center px-4 py-2">
			<div className="flex items-center">
				<BsChatSquareDots
					size={30}
					className=" text-[var(--primary-dark)] mr-2"
				/>
				<h1 className=" text-lg font-bold text-gray-800">
					Beach Park And Resort
				</h1>
			</div>
			<div className="flex">
				<div className=" hidden md:flex items-center px-6">
					<AiOutlineClockCircle
						size={20}
						className="mr-2 text-[var(--primary-dark)]"
					/>
					<p className="text-sm text-gray-700">24 Hours - 7 Days A week</p>
				</div>
				<div className=" hidden md:flex items-center px-6">
					<AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
					<p className="text-sm text-gray-700">911</p>
				</div>
			</div>
			<button>Get a free voucher</button>
		</div>
	);
}

export default TopBar;
