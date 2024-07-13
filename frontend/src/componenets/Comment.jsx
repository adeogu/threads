import { useState } from "react";
import { Flex, Text, Divider } from "@chakra-ui/layout";
import { BsThreeDots } from "react-icons/bs";
import { Avatar } from "@chakra-ui/avatar";
import Actions from "./Actions";

const Comment = ({ userAvatar, createAt, comment, username, likes }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={userAvatar} size={"md"} />
        <Flex gap={2} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight="bold ">
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {createAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Actions liked={liked} setLiked={setLiked} />
          <Text fontSize={"sm"} color={"gray.light"}>
            {likes + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comment;
