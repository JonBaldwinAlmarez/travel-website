import React from "react";

function ReservationForm() {
	return (
		<div
			id="deals"
			className="flex justify-center max-w-[1140px] m-auto w-full p-4"
		>
			<form className="lg:flex lg:justify-between w-full items-center">
				<div className="flex flex-col my-2 py-2 text-center">
					<label>What to reserve?</label>
					<select className="lg:w-[300px] md:w-full border rounded-md p-2">
						<option>Room</option>
						<option>Halls</option>
						<option>Huts</option>
					</select>
				</div>
				<div className="flex w-full justify-between text-center">
					<div className="flex flex-col w-full lg:max-w[250px] my-2 p-2">
						<label>When to Check-In?</label>
						<input className=" border rounded-md p-2" type="date"></input>
					</div>
					<div className="flex flex-col w-full lg:max-w[250px] my-2 p-2">
						<label>When to Check-out?</label>
						<input className=" border rounded-md p-2" type="date"></input>
					</div>
				</div>
				<div className="flex lg:mt-7 flex-col my-2 p-2 w-full lg:w-[30%] hover:scale-105 duration-200">
					<button>Send Here</button>
				</div>
			</form>
		</div>
	);
}

export default ReservationForm;
