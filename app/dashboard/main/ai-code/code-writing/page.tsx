import Image from "next/image";
import React from "react";

export default function page() {
	const codeArray = [
		"/main/code/javascript.png",
		"/main/code/typescript.png",
		"/main/code/matlab.png",
		"/main/code/excel.png",
		"/main/code/html.png",
		"/main/code/css.png",
		"/main/code/swift.png",
		"/main/code/go.png",
		"/main/code/csharp.png",
		"/main/code/cpp.png",
		"/main/code/java.png",
		"/main/code/rust.png",
		"/main/code/python.png",
		"/main/code/ruby.png",
		"/main/code/php.png",
		"/main/code/dart.png",
		"/main/code/mysql.png",
	];
	return (
		<section className="relative p-3">
			<div className="max-w-7xl mx-auto space-y-10">
				<div className="flex justify-center">
					<h1 className="text-3xl font-bold text-center max-w-sm">
						Supports Major Programming Languages
					</h1>
				</div>
				<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-4">
					{codeArray.map((item, index) => (
						<div
							className="bg-gradient-to-br from-[#ffffff13] to-[#8f8f8f0c] grid place-content-center p-12 rounded-xl cursor-pointer"
							key={index}>
							<div className="bg-gradient-to-br from-[#ffffff1f] to-[#8f8f8f0c] w-[90px] h-[90px] p-4 rounded-full grid place-content-center">
								<Image
									src={item}
									alt="dshj"
									width={40}
									height={40}
									className="object-cover"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-[664px] h-[138px] bg-[#FFB076] blur-[250px] absolute top-1/3 left-[-550px]" />
		</section>
	);
}
