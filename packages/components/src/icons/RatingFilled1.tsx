import React, { SVGProps } from "react";

const SvgRatingFilled1 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd">
			<path
				fill="#CD3234"
				fillRule="nonzero"
				d="M20 2C10.059 2 2 10.059 2 20s8.059 18 18 18 18-8.059 18-18S29.941 2 20 2z"
			/>
			<path
				fill="#FF575F"
				fillRule="nonzero"
				d="M20 4c8.837 0 16 7.163 16 16s-7.163 16-16 16S4 28.837 4 20 11.163 4 20 4z"
			/>
			<path
				fill="#CD3234"
				fillRule="nonzero"
				d="M12.095 19.993a.693.693 0 011.02.939c-1.815 1.97-3.826 1.97-5.641 0a.693.693 0 011.02-.94c1.266 1.375 2.336 1.375 3.601 0zm19.411 0a.693.693 0 011.02.939c-1.815 1.97-3.826 1.97-5.641 0a.693.693 0 011.02-.94c1.265 1.375 2.335 1.375 3.601 0z"
			/>
			<path
				fill="#CD3234"
				d="M12.543 30.957c4.676-2.08 9.53-2.08 14.56 0 .374-2.014-.342-3.839-2.15-5.475-3.43-2.56-6.883-2.56-10.355 0-1.817 1.81-2.502 3.635-2.055 5.475z"
			/>
			<path
				fill="#931C1E"
				d="M20 4c9.082 0 16 7.163 16 16 0 .682-.041 1.355-.122 2.015-.623-8.267-7.528-14.78-15.954-14.78-8.1 0-14.795 6.02-15.854 13.829l-.023.186A16.68 16.68 0 014 20c0-8.837 6.918-16 16-16z"
				opacity={0.249}
			/>
		</g>
	</svg>
);

export default SvgRatingFilled1;
