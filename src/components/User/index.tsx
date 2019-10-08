import * as React from "react";
import { useUserProfileQuery } from "../../generated/graphql";
import User from "./User";

interface OwnProps {
  id: string;
}

const LaunchProfileContainer: React.FC<OwnProps> = ({ id }) => {
  console.log(id, "=id");
  const { data, error, loading, refetch } = useUserProfileQuery({
    variables: { uuid: String(id) }
  });
  React.useEffect(() => {
    console.log("Changed id");
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

export default LaunchProfileContainer;
