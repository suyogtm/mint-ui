import React from "react";
import styled from "styled-components";
import PALETTE from "@turtlemint/shared/utils/colors";
import {
	ButtonProps,
	ButtonStyles,
	LinkStyles
} from "@turtlemint/shared/components/button";
import { ICONS } from "../__utils/icons";

const StyledButton = styled.button<ButtonProps>`
	${ButtonStyles};
`;
const StyledLink = styled.a<ButtonProps>`
	${LinkStyles};
`;

const Button: React.FC<ButtonProps> = ({
	btnType = "primary",
	size = "sm",
	disabled = false,
	block = false,
	icon = "",
	loading = false,
	className = "",
	prefixCls = "tm-button",
	onClick = function() {},
	href = "#",
	target = "blank",
	htmlType = "button",
	children = <></>,
	...rest
}: ButtonProps) => {
	const handleClick: React.MouseEventHandler<
		HTMLButtonElement | HTMLAnchorElement
	> = e => {
		if (btnType === "link") {
			e.preventDefault();
		}
		onClick(e);
	};
	const IconComponent = ICONS[icon];
	return (
		<>
			{loading ? (
				<StyledButton
					btnType={btnType}
					size={size}
					block={block}
					disabled={disabled}
				>
					Loading...
				</StyledButton>
			) : (
				<>
					{btnType === "link" ? (
						<StyledLink
							href={href}
							target={target}
							disabled={disabled}
							{...rest}
						>
							{children}
						</StyledLink>
					) : (
						<StyledButton
							onClick={handleClick}
							btnType={btnType}
							size={size}
							block={block}
							disabled={disabled}
							type={htmlType}
							className={`${prefixCls}-${className} `}
							{...rest}
						>
							{IconComponent ? (
								<IconComponent
									outlineColor={PALETTE.WHITE}
									size={16}
								/>
							) : null}
							<span
								style={{
									verticalAlign: "middle",
									marginLeft: icon ? "8px" : "0px"
								}}
							>
								{children}
							</span>
						</StyledButton>
					)}
				</>
			)}
		</>
	);
};

export default Button;