

import React, { FC } from "react";

import GaslessUploader from "./components/GaslessUploader";
const Page: FC = () => {
	return (
		<div className="mx-auto py-10 bg-background text-text flex flex-col-reverse gap-10 md:flex-row justify-center items-start">
			<div className="p-10 w-full md:w-1/3 md:p-0">
				<GaslessUploader showImageView={true} showReceiptView={true} blockchain="SOL" />
			</div>

			
		</div>
	);
};

export default Page;
