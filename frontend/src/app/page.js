"use client";
import { useEffect, useState } from "react";

const Home = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		(async () => {
			const response = await fetch("http://localhost:8080/");
			const data = await response.json();
			setData(data);
			console.log(data);
		})();
	}, []);

	return (
		<section className="h-screen">
			<div className="max-w-[80vw] py-[2rem] mx-auto flex flex-col flex-wrap gap-4  items-start">
				<h1 className="font-semibold text-[2.5rem]">Users</h1>
				{/* <p className="text-base leading-relaxed whitespace-pre-line">
					{data && data.content}
				</p> */}
				{/* {data &&
					data.content
						.split("\n")
						.filter((para) => para.trim() !== "")
						.map((para, index) => (
							<p
								key={index}
								className="mb-4 leading-relaxed text-base">
								{para}
							</p>
						))} */}
				{/* <span>Click Button</span> */}
				<div className="flex flex-wrap gap-[1rem] items-center">
					{data &&
						data.map((user, i) => (
							<article
								key={i}
								className="w-[32%] bg-[#181818] px-[1.5rem] py-[0.75rem] rounded-[0.5rem] hover:bg-[#252525] cursor-pointer">
								<h2 className="text-[1.25rem] font-bold flex items-center gap-[3rem] justify-between">
									<span>
										{user.first_name} {user.last_name}
									</span>
									<p className="px-[1rem] py-[0.25rem] bg-[#2c2c2c] inline-block rounded-2xl font-semibold text-[0.75rem] text-[#9c9c9c]">
										{user.email}
									</p>
								</h2>
								<p
									className={
										user.gender === "Male" ? "text-[#0084ff]" : "text-[#ff68eb]"
									}>
									{user.gender}
								</p>
							</article>
						))}
				</div>
			</div>
		</section>
	);
};

export default Home;
