import * as React from "react";
import styled, { css } from "styled-components";
import { Omit, CommonTypeTuple } from "../__utils/type";
import "../app.css";
import COLORS from "../__utils/colors";

export interface InputProps {
	type?: string;
	value: CommonTypeTuple;
	placeholder?: string;
	label?: string;
	error?: string;
	helpText?: string;
	block?: boolean;
	disabled?: boolean;
	onChange?: (val: string) => void;
	onBlur?: React.FocusEventHandler;
}

export const WrapperStyles = css<Pick<InputProps, "block">>`
	width: ${props => (props.block ? "100%" : "328px")};
	text-align: left;
`;

export const InputStyles = css<
	Pick<InputProps, "error" | "disabled"> & Omit<InputProps, "onChange">
>`
	border: 0;
	border: 1px solid ${COLORS.GREY4};
	outline: none;
	padding: 12px 48px 12px 16px;
	border-radius: 4px;
	color: ${COLORS.GREY1};
	width: 100%;
	font-size: 16px;
	&:focus {
		border-color: ${COLORS.PRIMARY};
	}
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: ${COLORS.DISABLED};
	}
	::-moz-placeholder {
		/* Firefox 19+ */
		color: ${COLORS.DISABLED};
	}
	:-ms-input-placeholder {
		/* IE 10+ */
		color: ${COLORS.DISABLED};
	}
	:-moz-placeholder {
		/* Firefox 18- */
		color: ${COLORS.DISABLED};
	}
	::placeholder: {
		color: ${COLORS.DISABLED};
	}
	${props =>
		props.error &&
		css`
			border-color: ${COLORS.DANGER};
			&:focus {
				border-color: ${COLORS.DANGER};
			}
		`};
	${props =>
		props.disabled &&
		css`
			opacity: 0.64;
			cursor: no-drop;
			background-color: ${COLORS.DISABLED};
			color: ${COLORS.GREY3};
			::-webkit-input-placeholder {
				/* Chrome/Opera/Safari */
				color: ${COLORS.GREY3};
			}
			::-moz-placeholder {
				/* Firefox 19+ */
				color: ${COLORS.GREY3};
			}
			:-ms-input-placeholder {
				/* IE 10+ */
				color: ${COLORS.GREY3};
			}
			:-moz-placeholder {
				/* Firefox 18- */
				color: ${COLORS.GREY3};
			}
			::placeholder: {
				color: ${COLORS.GREY3};
			}
		`};
`;

const SharedStyles = css`
	color: ${COLORS.GREY1};
`;

export const LabelStyles = css<Pick<InputProps, "error">>`
	margin-bottom: 4px;
	label {
		${SharedStyles};
		${props =>
			props.error &&
			css`
				color: ${COLORS.DANGER};
			`};
	}
`;

export const Error = css`
	${SharedStyles};
	margin-top: 4px;
	word-wrap: break-word;
	label {
		color: ${COLORS.DANGER};
	}
`;

export const HelpText = css`
	${SharedStyles};
	color: ${COLORS.GREY2};
`;

const StyledWrapper = styled.div`
	${WrapperStyles};
`;
type LabelProps = Pick<InputProps, "error"> & {
	children: React.ReactNode;
};

const StyledLabel = styled.div<LabelProps>`
	${LabelStyles};
`;
export const StyledInput = styled.input<
	Pick<InputProps, "error" | "disabled"> & Omit<InputProps, "onChange">
>`
	${InputStyles};
`;
const StyledError = styled.div<{ children: React.ReactNode }>`
	${Error};
`;
const StyledHelpText = styled.p<{ children: React.ReactNode }>`
	${HelpText};
`;

export const Input: React.FC<
	InputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
> = ({
	type = "text",
	placeholder,
	label,
	error,
	helpText,
	block = false,
	disabled = false,
	onChange,
	onBlur,
	value,
	className = "",
	...rest
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e.target.value);
		}
	};
	return (
		<StyledWrapper block={block}>
			<StyledLabel error={error}>
				<label>{label}</label>
			</StyledLabel>
			<StyledInput
				type={type}
				placeholder={placeholder}
				error={error}
				disabled={disabled}
				onBlur={onBlur}
				onChange={handleChange}
				value={value}
				className={className}
				aria-label="tm-input"
				{...rest}
			/>
			{error ? (
				<StyledError>
					<label>{error}</label>
				</StyledError>
			) : null}
			{helpText ? <StyledHelpText>{helpText}</StyledHelpText> : null}
		</StyledWrapper>
	);
};

export default Input;