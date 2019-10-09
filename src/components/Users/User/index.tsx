import * as React from "react";
import { useUserProfileQuery } from "../../../generated/graphql";
import { User } from "./User";

interface Props {
  match: {
    params: { id: string };
  };
}

const UserContainer: React.FC<Props> = ({ match }) => {
  const { id } = match.params;
  const { data, error, loading, refetch } = useUserProfileQuery({
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

  return <User data={data} />;
};

export default UserContainer;
