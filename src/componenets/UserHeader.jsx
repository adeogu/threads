import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react"; // Import from "@chakra-ui/react" instead of "@chakra-ui/layout"
import { MenuButton, Portal } from "@chakra-ui/react"; // Additional imports from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/react"; // Correct import for Avatar
import { BsInstagram } from "react-icons/bs"; // Import from react-icons
import { CgMoreO } from "react-icons/cg"; // Import from react-icons

// Defining the UserHeader functional component
const UserHeader = () => {
	// Returning JSX to render the UserHeader
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

				{/* Empty Box to take up remaining space */}
				<Box flex="1" />

				<Box ml="auto">
					<Avatar name="Mark Zuckerberg" src="/zuck-avatar.png" size={"lg"} />
				</Box>
			</Flex>

			<Text>Co-founder, executive chairman and CEO of Meta</Text>
			<Flex w={"full "} justifyContent={"space-between"}>
				<Flex gap={1} alignItems={"center"}>
					<Text color={"grey"}> 2.3k Followers</Text>
					<Text color={"grey"}>·</Text>

					<Box w="-2" h="1" bg={"grey.light"} borderRadius={"full"}></Box>
					<Link color={"grey"}>Instagram.com</Link>
				</Flex>
				<Flex>
					<Box className="icon-container">
						<div class="icon"></div>
						<BsInstagram size={30} cursor={"pointer"} />
					</Box>

					<Box className="icon-container1">
						<Menu>
							<MenuButton>
								<CgMoreO size={30} cursor={"pointer"} />
							</MenuButton>
							<Portal>
								<MenuList>
									<MenuItem>Copy Link</MenuItem>
								</MenuList>
							</Portal>
						</Menu>
					</Box>
				</Flex>
			</Flex>
		</VStack>
	);
};

// Making the UserHeader component available for use in other files
export default UserHeader;
