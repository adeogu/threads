import {
	VStack,
	Flex,
	Text,
	Box,
	Link,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Avatar,
	Portal,
	useToast,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

/**
 * React component that renders a user profile header using Chakra UI components.
 * Includes user's name, avatar, follower count, and links to social media.
 * Provides functionality to copy the current URL to the clipboard and display a success toast notification.
 */
const UserHeader = () => {
	const toast = useToast();

	/**
	 * Function to copy the current URL to the clipboard and show a success toast.
	 */
	const copyURL = () => {
		const currentURL = window.location.href;
		navigator.clipboard.writeText(currentURL).then(() => {
			toast({
				title: "Success.",
				status: "success",
				description: "Profile link copied.",
				duration: 3000,
				isClosable: true,
			});
		});
	};

	// JSX to render the UserHeader
	return (
		<VStack gap={4} alignItems={"start"}>
			<Flex justifyContent={"space-between"} w={"full"}>
				<Box>
					<Text fontSize={"2xl"} fontWeight={"bold"}>
						Mark Zuckerberg
					</Text>
					<Flex gap={2} alignItems={"center"}>
						<Text fontSize={"sm"}>markzukerberg</Text>
						<Text
							fontSize={"xs"}
							bg={"gray.dark"}
							color={"gray.light"}
							p={1}
							borderRadius={"full"}
						>
							threads.net
						</Text>
					</Flex>
				</Box>

				<Box flex="1" />

				<Box ml="auto">
					<Avatar
						name="Mark Zuckerberg"
						src="/zuck-avatar.png"
						size={{
							base: "md",
							md: "xl",
						}}
					/>
				</Box>
			</Flex>

			<Text>Co-founder, executive chairman and CEO of Meta</Text>
			<Flex w={"full"} justifyContent={"space-between"}>
				<Flex gap={1} alignItems={"center"}>
					<Text color={"gray.500"}>2.3k Followers</Text>
					<Text color={"gray.500"}>·</Text>
					<Box w="2px" h="1" bg={"gray.500"} borderRadius={"full"}></Box>
					<Link color={"gray.500"}>Instagram.com</Link>
				</Flex>
				<Flex>
					<Box className="icon-container">
						<div className="icon"></div>
						<BsInstagram size={30} cursor={"pointer"} />
					</Box>

					<Box className="icon-container1">
						<Menu>
							<MenuButton>
								<CgMoreO size={30} cursor={"pointer"} />
							</MenuButton>
							<Portal>
								<MenuList bg={"grey.dark"}>
									<MenuItem bg={"grey.dark"} onClick={copyURL}>
										Copy Link
									</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
					</Box>
				</Flex>
			</Flex>
			<Flex w={"full"}>
				<Flex
					flex={1}
					borderBottom={"1.5px solid white"}
					justifyContent={"center"}
					pb="3"
					cursor={"pointer"}
				>
					<Text fontWeight={"bold"}> Threads</Text>
				</Flex>
				<Flex
					flex={1}
					borderBottom={"1px solid grey"}
					justifyContent={"center"}
					color={"grey.light"}
					pb="3"
					cursor={"pointer"}
				>
					<Text fontWeight={"bold"}> Replies</Text>
				</Flex>
			</Flex>
		</VStack>
	);
};

// Making the UserHeader component available for use in other files
export default UserHeader;
