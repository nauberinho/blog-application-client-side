import * as React from "react";
import { usePostQuery } from "../../generated/graphql";
import Post from "./Post";

interface OwnProps {
  uuid: string;
}

const PostContainer: React.FC<OwnProps> = ({ uuid }) => {
  const { data, error, loading, refetch } = usePostQuery({
    variables: { uuid: String(uuid) }
  });
  React.useEffect(() => {
    refetch();
  }, [uuid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  return <Post data={data} />;
};

export default PostContainer;
