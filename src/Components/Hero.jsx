import React from "react";

function Hero() {
	return (
		<div className=" w-full h-[90vh]">
			<img
				src="https://images.unsplash.com/photo-1601562219653-0f16522227b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwc3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
				alt="Beach Resort"
				className=" w-full h-full object-cover"
			/>
			<div className="max-w-[1140px] m-auto">
				<div className="p-4 absolute top-[40%] w-full md:-[50%] max-w-w[600px] h-full flex flex-col text-white">
					<h1 className="font-bold text-4xl">Your Dream Get away</h1>
					<h2 className="text-4xl py-4 italic">
						Here in <span className=" text-cyan-500">Manaklay Beach</span>.
					</h2>
					<cite className=" text-xl font-bold italic">
						- A place where relaxation last.
					</cite>
				</div>
			</div>
		</div>
	);
}

export default Hero;
