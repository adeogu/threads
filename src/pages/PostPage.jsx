import { Avatar, Flex, Image, Text, Box } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import Actions from "./Actions";

const PostPage = () => {
	const [liked, setLiked] = useState(false);

	return (
		<>
			<Flex>
				<Flex w={"full"} alignItems={"center"} gap={3}>
					<Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
					<Flex>
						<Text fontSize={"sm"} fontWeight={"bold"}>
							markzuckerberg
						</Text>
						<Image src="/verified.png" w="4" h="4" ml={4} />
					</Flex>
				</Flex>
				<Flex gap={4} alignItems={"center"}>
					<Text fontSize={"sm"} color={"gray.light"}>
						1d
					</Text>
					<BsThreeDots />
				</Flex>
			</Flex>

			<Text my={3}>Lets *apos; talk anout threads</Text>
			<Box
				borderRadius={6}
				overflow={"hidden"}
				border={"1px solid"}
				borderColor={"gray.light"}
			>
				<Image src={"/post1.png"} w={"full"} />
			</Box>

			<Flex gap={3} my={3}>
				<Actions liked={liked} setLiked={setLiked} />
			</Flex>

			<Flex gap={2} alignItems={"center"}>
				<Text color={"gray.light"} fontSize={"sm"}>
					238 Replies
				</Text>

				<Box w={0.5} h={0.5} borderRadius={"full"} bg={"grey.light"}></Box>

				<Text color={"gray.light"} fontSize={"sm"}>
					{200 + (liked ? 1 : 0)} likes
				</Text>
			</Flex>
			<Divider my={4} />
		</>
	);
};

export default PostPage;
