import { Flex } from "@chakra-ui/react";

// Actions component takes liked and setLiked as props
const Actions = ({ liked, setLiked }) => {
	return (
		// Flex container with gap between children, margin-y, and click handler to prevent default action
		<Flex gap={3} my={2} onClick={(e) => e.preventDefault()}>
			{/* SVG for Like button */}
			<svg
				aria-label="Like" // Accessibility label
				color={liked ? "rgb(237, 73, 86)" : ""} // Conditional color based on liked state
				fill={liked ? "rgb(237, 73, 86)" : "transparent"} // Conditional fill based on liked state
				height="19" // Height of the SVG
				role="img" // Role for accessibility
				viewBox="0 0 24 22" // Viewbox size for scaling
				width="20" // Width of the SVG
				onClick={() => setLiked(!liked)} // Click handler to toggle liked state
			>
				<path
					d="M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z"
					stroke="currentColor" // Stroke color
					strokeWidth="2" // Stroke width
				></path>
			</svg>

			{/* SVG for Comment button */}
			<svg
				aria-label="Comment" // Accessibility label
				color="" // Color (default)
				fill="" // Fill (default)
				height="20" // Height of the SVG
				role="img" // Role for accessibility
				viewBox="0 0 24 24" // Viewbox size for scaling
				width="20" // Width of the SVG
			>
				<title>Comment</title> {/* Title for accessibility */}
				<path
					d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
					fill="none" // No fill
					stroke="currentColor" // Stroke color
					strokeLinejoin="round" // Stroke line join type
					strokeWidth="2" // Stroke width
				></path>
			</svg>

			{/* Repost button component */}
			<RepostSVG />
			{/* Share button component */}
			<ShareSVG />
		</Flex>
	);
};

export default Actions;

// RepostSVG component for Repost button
const RepostSVG = () => {
	return (
		<svg
			aria-label="Repost" // Accessibility label
			color="currentColor" // Current color
			fill="currentColor" // Fill with current color
			height="20" // Height of the SVG
			role="img" // Role for accessibility
			viewBox="0 0 24 24" // Viewbox size for scaling
			width="20" // Width of the SVG
		>
			<title>Repost</title> {/* Title for accessibility */}
			<path
				fill="" // Fill (default)
				d="M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"
			></path>
		</svg>
	);
};

// ShareSVG component for Share button
const ShareSVG = () => {
	return (
		<svg
			aria-label="Share" // Accessibility label
			color="" // Color (default)
			fill="rgb(243, 245, 247)" // Fill color
			height="20" // Height of the SVG
			role="img" // Role for accessibility
			viewBox="0 0 24 24" // Viewbox size for scaling
			width="20" // Width of the SVG
		>
			<title>Share</title> {/* Title for accessibility */}
			<line
				fill="none" // No fill
				stroke="currentColor" // Stroke color
				strokeLinejoin="round" // Stroke line join type
				strokeWidth="2" // Stroke width
				x1="22" // X-coordinate of the start point
				x2="9.218" // X-coordinate of the end point
				y1="3" // Y-coordinate of the start point
				y2="10.083" // Y-coordinate of the end point
			></line>
			<polygon
				fill="none" // No fill
				points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" // Points defining the polygon
				stroke="currentColor" // Stroke color
				strokeLinejoin="round" // Stroke line join type
				strokeWidth="2" // Stroke width
			></polygon>
		</svg>
	);
};
