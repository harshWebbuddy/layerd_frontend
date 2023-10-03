import React from "react";

export default function AiImagesPage() {
	return (
		<section className="space-y-10">
			<h1 className="font-bold text-xl">AI Image</h1>
			<div className="space-y-5">
				<div className="space-y-1">
					<h1 className="font-bold text-xl">Step 1:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						Navigate to the AI Image tool on WhopMe.com.
					</p>
				</div>
				<div className="space-y-1">
					<h1 className="font-bold text-xl">Step 2:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						Choose between Dalle-2, Midjourney, or Stable Diffusion.
					</p>
				</div>
				<div className="space-y-1">
					<h1 className="font-bold text-xl">Step 3:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						For Dalle-2, input the text description of the image you want to
						generate and click on 'Generate'. You will see the generated image.
					</p>
				</div>
				<div className="space-y-1">
					<h1 className="font-bold text-xl">Step 4:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						For Midjourney, upload the image you want to transform creatively
						and click on 'Transform'. You will see the transformed image.
					</p>
				</div>
				<div className="space-y-1">
					<h1 className="font-bold text-xl">Step 5:</h1>
					<p className="text-white/70 text-sm leading-relaxed">
						For Stable Diffusion, choose the model you want to use for
						generating a high-quality image and click on 'Generate'. You will
						see the generated image.
					</p>
				</div>
			</div>
			<p className="text-white/70 text-sm leading-relaxed">
				Remember, these tools are designed to be user-friendly and intuitive.
				Feel free to explore and utilize them according to your needs.
			</p>
		</section>
	);
}
