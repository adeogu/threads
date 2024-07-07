import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/layout";

/**
 * Renders a link to a specific post with avatars.
 * Main avatar for Mark Zuckerberg and three smaller avatars are displayed.
 * @returns {JSX.Element} JSX element that renders a styled link containing avatars.
 */
const UserPost = () => {
	const avatarUrl = "/zuck-avatar.png";
	const friend1AvatarUrl = "https://bit.ly/dan-abramov";
	const friend2AvatarUrl = "https://bit.ly/tioluwani-kolawole";
	const friend3AvatarUrl = "https://bit.ly/kent-c-dodds";

	const renderAvatars = () => (
		<AvatarGroup>
			<Avatar size="md" name="Mark Zuckerberg" src={avatarUrl} />
			<Avatar size="xs" name="John Doe" src={friend1AvatarUrl} />
			<Avatar size="xs" name="John Doe" src={friend2AvatarUrl} />
			<Avatar size="xs" name="John Doe" src={friend3AvatarUrl} />
		</AvatarGroup>
	);

	return (
		<Link to={`/${user}/post/${postId}`}>
			<Flex gap={3} mb={4} py={5}>
				<Flex flexDirection={"column"} alignItems={"center"}>
					{renderAvatars()}
				</Flex>
			</Flex>
		</Link>
	);
};

export default UserPost;
