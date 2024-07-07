import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import { useState } from "react";

const UserPost = ({ postImage, postTitle, likes, replies }) => {
	// useState hook to manage liked state
	//liked: This prop passes the current state of whether the post is liked or not.
	//setLiked: This prop passes the function to update the liked state.
	const [liked, setLiked] = useState(false);

	return (
		// Link to the specific post
		<Link to={"/markzuckerberg/post/1"}>
			{/* Main container with gap, margin-bottom, and padding-y */}
			<Flex gap={3} mb={4} py={5}>
				{/* Container for user avatars */}
				<Flex flexDirection={"column"} alignItems={"center"}>
					{/* Main user avatar */}
					<Avatar size="md" name="Mark Zuckerberg" src="/zuck-avatar.png" />
					{/* Vertical line between avatars */}
					<Box w="1px" h={"full "} bg="gray.light" my={2}></Box>
					<Box position={"relative"} w={"full"}>
						{/* Additional avatars positioned absolutely */}
						<Avatar
							size="xs"
							name="John doe"
							src="https://bit.ly/dan-abramov"
							position={"absolute"}
							top={"0px"}
							left="15px"
							padding={"2px"}
						/>
						<Avatar
							size="xs"
							name="John doe"
							src="https://bit.ly/sage-adebayo"
							position={"absolute"}
							bottom={"0px"}
							right="-5px"
							padding={"2px"}
						/>
						<Avatar
							size="xs"
							name="John doe"
							src="https://bit.ly/prosper-baba"
							position={"absolute"}
							bottom={"0px"}
							left="4px"
							padding={"2px"}
						/>
					</Box>
				</Flex>

				{/* Post content container */}
				<Flex flex={1} flexDirection={"column"} gap={2}>
					{/* Header section with username and options */}
					<Flex justifyContent={"space-between"} w={"full"}>
						{/* User name and verified badge */}
						<Flex w={"full"} alignItems={"center"}>
							<Text fontSize={"sm"} fontWeight={"bold"}>
								markzuckerberg
							</Text>
							<Image src="/verified.png" w={"4"} ml={1} />
						</Flex>
						{/* Post time and options icon */}
						<Flex gap={4} alignItems={"center"}>
							<Text fontStyle={"sm"} color={"gray.light"}>
								1d
							</Text>
							<BsThreeDots />
						</Flex>
					</Flex>

					{/* Post text */}
					<Text fontsize={"sm"}>{postTitle}</Text>
					{postImage && (
						<Box
							borderRadius={6}
							overflow={"hidden"}
							border={"1px solid"}
							borderColor={"gray.light"}
						>
							<Image src={postImage} w={"full"} />
						</Box>
					)}

					{/* Post image container */}

					<Flex gap={3} my={1}>
						<Actions liked={liked} setLiked={setLiked} />
					</Flex>

					<Flex gap={2} alignItems={"center"}>
						<Text color={"gray.light"} fontSize={"sm"}>
							{replies} replies
						</Text>

						<Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>

						<Text color={"gray.light"} fontSize={"sm"}>
							{likes} Likes
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Link>
	);
};

/*How It Works
Initial State: In UserPost, the useState hook initializes the liked state to false.

Passing Props: The liked state and the setLiked function are passed to the Actions component as props.

Conditional Styling: In Actions.jsx, the svg element for the like button uses the liked prop to conditionally set its color and fill attributes:

If liked is true, the color and fill are set to "rgb(237, 73, 86)" (red).

If liked is false, the color is empty, and the fill is "transparent".

Toggle Like State: When the like button (svg element) is clicked, the onClick handler calls setLiked(!liked), toggling the liked state between true and false.

Re-render: The change in the liked state causes UserPost to re-render, updating the Actions component with the new state. 
This re-render changes the color and fill of the like button based on the updated liked state.


*/

export default UserPost;
