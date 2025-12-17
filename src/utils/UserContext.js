const { createContext } = require("react");

const UserContext = createContext({
    userName: "Global User"
});

export default UserContext