import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text, Divider } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";
import Actions from "../componenets/Actions";
import { useState } from "react";
import Comment from "../componenets/Comment";

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
          <Text fontSize={"sm"} color={"gray.500"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Let's talk about threads</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.200"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.500"} fontSize={"sm"}>
          238 Replies
        </Text>

        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.500"}></Box>

        <Text color={"gray.500"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Got the app to like , reply and post</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      <Comment
        comment={"Nice!"}
        createdAt="2d"
        likes={100}
        username="johndoet"
        userAvatar="https://bit.ly/sage-adebayo"
      />

      <Comment
        comment={"Hola From Spain"}
        createdAt="1d"
        likes={786}
        username="janeeedoe"
        userAvatar="https://bit.ly/ryan-florence"
      />

      <Comment
        comment={"One Piece is the best"}
        createdAt="3d"
        likes={73}
        username="armaadoe"
        userAvatar="https://bit.ly/prosper-baba"
      />

      <Comment
        comment={"Looks really good!"}
        createdAt="2d"
        likes={344}
        username="sallydoe"
        userAvatar="https://bit.ly/code-beast"
      />
    </>
  );
};

export default PostPage;
