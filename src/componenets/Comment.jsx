import { useState } from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/layout";
import { BsThreeDots } from "react-icons/bs";

const Comment = () => {
	const [liked, setLiked] = useState(false);

	return (
		<>
			<Flex gap={4} py={2} my={2} w={"full"}>
				<Avatar src="/zuck-avatar.png" size={"md"} />
				<Flex gap={4} w={"full"} flexDirection={"column"}>
					<Flex
						w={"full"}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Text fontSize="sm" fontWeight="bold ">
							markzuckerberg
						</Text>
						<Flex gap={2} alignItems={"center"}>
							<Text fontSize={"sm"} color={"gray.light"}>
								1d
							</Text>
							<BsThreeDots />
						</Flex>
					</Flex>
					<Text>This looks Great !</Text>
					<Actions liked={liked} setLiked={setLiked} />
					<Text fontSize={"sm"} color={"gray.light"}>
						{100 + (liked ? 1 : 0)} likes
					</Text>
				</Flex>
			</Flex>
			<Divider />
		</>
	);
};

export default Comment;
