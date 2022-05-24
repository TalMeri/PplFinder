import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";
import { useSelector } from "react-redux";

const Favorites = () => {
    const favorites = useSelector((state) => state.reduser.favorites);
    const fetchUsers = () => {
        return favorites
    }

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList users={favorites} isLoading={false} fetchUsers={fetchUsers}/>
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
