type APIResponse = {
  user: {
    userId: number;
    frientList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};
type FriendList = APIResponse['user']['frientList'];
