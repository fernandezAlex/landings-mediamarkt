import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";


const AsyncButton = ({
	type,
	text,
	loadingText,
	isLoading,
	disabled,
	icon,
	iconPosition,
	className,
	buttonStyles,
	textStyles,
	iconStyles,
	animated
}) => {

	return (
		<button
			type={type}
			disabled={disabled}
			className={`asyncbutton ${animated ? "animated" : ""} ${disabled ? "disabled" : ""}`}
			style={{...buttonStyles}}
		>
			{iconPosition === "left" && (isLoading ? (
				<FontAwesomeIcon icon={faSpinner} style={{...iconStyles}} />) : icon ? ( 
				<FontAwesomeIcon icon={icon} style={{...iconStyles}} />) : null)}
			<span style={{...textStyles}}>{isLoading ? loadingText : text}</span>
            {iconPosition === "right" && (isLoading ? (
				<FontAwesomeIcon icon={faSpinner} style={{...iconStyles}} />) : icon ? (
				<FontAwesomeIcon icon={icon} style={{...iconStyles}} />) : null)}
		</button>
	);
};

AsyncButton.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string,
	loadingText: PropTypes.string,
	isLoading: PropTypes.bool,
	iconPosition: PropTypes.string,
	className: PropTypes.string,
	buttonStyles: PropTypes.string,
	textStyles: PropTypes.object,
	iconStyles: PropTypes.string,
	animated: PropTypes.bool,
	disabled: PropTypes.bool
};

export default AsyncButton;
