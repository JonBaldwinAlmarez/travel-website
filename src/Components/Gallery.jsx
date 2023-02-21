import React from "react";

function Gallery() {
	return (
		<div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
			<h2 className="text-center text-gray-600 p-4 text-4xl font-bold italic">
				Gallery
			</h2>
			<div className="rounded-md grid sm:grid-cols-5 gap-4 lg:flex lg:justify-center">
				<div className="sm:col-span-3 col-span-2 row-span-2 border rounded-t-lg shadow-lg hover:scale-105 duration-200">
					<img
						className=" w-full h-full object-cover rounded-md"
						src="https://images.unsplash.com/photo-1610694742834-de5288c36368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>

				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-full border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1613104722989-b9a8b775251a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-full border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-full border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-full border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-full border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1613104722989-b9a8b775251a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYWNoJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-full border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-full border rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1572968317339-9341015b6098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNoJTIwc3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
				<div>
					<img
						className=" w-full h-full object-cover lg:rounded-md rounded-t-lg shadow-lg hover:scale-105 duration-200"
						src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwc3Vuc2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
						alt="/"
					/>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
