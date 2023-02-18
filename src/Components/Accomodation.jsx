import React from "react";

function Accomodation() {
	return (
		<div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
			<div className="relative p-4">
				<h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
					Rooms
				</h3>
				<img
					className="w-full h-full object-cover relative border-4 border-white shadow-2xl"
					src="https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc29ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
					alt="/"
				/>
			</div>
			<div className="relative p-4">
				<h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
					Halls
				</h3>
				<img
					className="w-full h-full object-cover relative border-4 border-white shadow-2xl"
					src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc29ydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
					alt="/"
				/>
			</div>
			<div className="relative p-4">
				<h3 className=" absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
					Huts
				</h3>
				<img
					className="w-full h-full object-cover relative border-4 border-white shadow-2xl"
					src="https://plus.unsplash.com/premium_photo-1675039871348-6a717479cf37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
					alt="/"
				/>
			</div>
		</div>
	);
}

export default Accomodation;
