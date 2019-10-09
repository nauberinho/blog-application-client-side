import * as React from "react";
import { usePostQuery } from "../../../generated/graphql";
import Post from "./Post";

interface OwnProps {
  match: { params: { id: string } };
}

const PostContainer: React.FC<OwnProps> = ({ match }) => {
  const { id } = match.params;
  const { data, error, loading, refetch } = usePostQuery({
    variables: { uuid: String(id) }
  });
  React.useEffect(() => {
    refetch();
  }, [id]);

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
