import UserHeader from "../componenets/UserHeader";
import UserPost from "../componenets/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImage="/post1.png"
        postTitle="Lets Talk about threads"
      />
      <UserPost
        likes={455}
        replies={22}
        postImage="/post2.png"
        postTitle="Nice Tutorial"
      />
      <UserPost
        likes={4545}
        replies={55}
        postImage="/post3.png"
        postTitle="I love this guy"
      />
      <UserPost likes={678} replies={234} postTitle="Lets Talk about threads" />
    </>
  );
};
export default UserPage;
