import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "soykot",
    name: "Md.Soykot",
    profile_pic: "https://avatars.githubusercontent.com/u/44709658?v=4",
  });
  return (
    <UserContext.Provider value={{ userDetails }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
