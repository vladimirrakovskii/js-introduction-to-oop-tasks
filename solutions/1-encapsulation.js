// BEGIN
export const getMutualFriends = (firstUser, secondUser) => {
  const firstUserFriends = firstUser.getFriends();
  const secondUserFriends = secondUser.getFriends();
  const firstUserFriendIds = firstUserFriends.map((friend) => friend.id);
  const mutualFriends = secondUserFriends.filter((friend) => firstUserFriendIds.includes(friend.id));

  return mutualFriends;
};
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});
