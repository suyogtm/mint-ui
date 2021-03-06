import * as React from "react";
import moment from "moment";
import styled from "styled-components";
import COLORS from "../__utils/colors";

import { IHeaderProps, IMonth, IMonthProps } from "./interfaces";

// List of valid Months within min-max date range
const getMonths = ({ date, minDate, maxDate }: IMonthProps): Array<IMonth> => {
	// All months by default
	let months = moment.monthsShort().map((month: string, index: number) => ({
		month,
		value: index
	}));
	let minMonthNumber = 1;
	let maxMonthNumber = 12;

	if (minDate.isBefore(date, "year") && date.isBefore(maxDate, "year")) {
		return months;
	}

	// All dates of same year
	if (date.isSame(minDate, "year") && date.isSame(maxDate, "year")) {
		minMonthNumber = minDate.month();
		maxMonthNumber = maxDate.month();
	}

	// Less than Max year and equal to Min year
	if (minDate.isSame(date, "year") && date.isBefore(maxDate, "year")) {
		minMonthNumber = minDate.month();
		maxMonthNumber = date.endOf("year").month();
	}

	// Greater then Min year and equal to Max year
	if (minDate.isBefore(date, "year") && date.isSame(maxDate, "year")) {
		minMonthNumber = date.startOf("year").month();
		maxMonthNumber = maxDate.month();
	}

	return months.filter(month => {
		return minMonthNumber <= month.value && month.value <= maxMonthNumber;
	});
};

export const Header = (props: IHeaderProps): JSX.Element => {
	let { minDate, maxDate, ...rest } = props;
	const date = moment(props.date);
	const years = [];

	// Populating years between min-max dates
	for (let y = minDate.year(); y <= maxDate.year(); y++) {
		years.push(y);
	}

	// Callbacks in case we need to add something more in future
	const changeYear = (year: number) => {
		// Handling month case where year changes and existing month is out of its range

		// Set month to minimum
		if (minDate.year() === year && date.month() < minDate.month()) {
			changeMonth(minDate.month());
		}

		// Set month to maximum
		if (maxDate.year() === year && date.month() > maxDate.month()) {
			changeMonth(maxDate.month());
		}

		// year change
		rest.changeYear(year);
	};

	const changeMonth = (month: number) => {
		rest.changeMonth(month);
	};

	return (
		<HeaderWrapper style={props.headerStyles}>
			<LeftNavigation
				style={props.navigationStyles}
				onClick={rest.decreaseMonth}
				disabled={rest.prevMonthButtonDisabled}
			>
				{"▲"}
			</LeftNavigation>
			<StyledSelect
				value={date.year()}
				onChange={({
					target: { value }
				}: {
					target: { value: string };
				}) => changeYear(+value)}
			>
				{years.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</StyledSelect>

			<StyledSelect
				value={date.month()}
				onChange={({
					target: { value }
				}: {
					target: { value: string };
				}) => changeMonth(+value)}
			>
				{getMonths({ date, minDate, maxDate }).map(option => (
					<option key={option.value} value={option.value}>
						{option.month}
					</option>
				))}
			</StyledSelect>

			<RightNavigation
				style={props.navigationStyles}
				onClick={rest.increaseMonth}
				disabled={rest.nextMonthButtonDisabled}
			>
				{"▲"}
			</RightNavigation>
		</HeaderWrapper>
	);
};

const StyledSelect = styled.select`
	font-size: 14px;
	width: 75px;
	font-weight: bold;
`;

const HeaderWrapper = styled.div`
	border-radius: 3px;
	padding: 10px 0px;
	display: flex;
	justify-content: space-around;
	background-color: ${COLORS.PRIMARY};
`;

const LeftNavigation = styled.button`
	transform: rotate(-90deg);
	background: transparent;
	border: none;
	border-radius: 3px;
	font-size: 15px;
	cursor: pointer;
`;

const RightNavigation = styled.button`
	transform: rotate(90deg);
	background: transparent;
	border: none;
	border-radius: 3px;
	font-size: 15px;
	cursor: pointer;
`;

export default Header;
