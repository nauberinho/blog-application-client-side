import * as React from "react";
import { useDispatch, connect } from "react-redux";
import { useUserProfileQuery } from "../../../generated/graphql";
import { User } from "./User";

import { registerLastViewed } from "../../../store/statistics/actions";

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

  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>Select a flight from the panel</div>;
  }

  dispatch(registerLastViewed({ lastViewed: data }));

  return <User data={data} />;
};

export default UserContainer;
