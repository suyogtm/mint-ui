import * as React from "react";
import { render } from "@testing-library/react";
import Card from "./index";

test("Card renders correctly", () => {
	const { asFragment } = render(
		<Card
			title="Default size card"
			extra={<a href="#">More</a>}
			style={{ width: 300 }}
		>
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</Card>
	);
	expect(asFragment()).toMatchSnapshot();
});
