import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Initialization = (props) => {
  const [hasInitializedUser, setHasInitializedUser] = useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const saveUserData = async () => {
      if(!isAuthenticated) {
        
      }
      try {
        const accessToken = await getAccessTokenSilently();
        const domain = `${process.env.REACT_APP_AUTH0_DOMAIN}`;
        const user_id = user.sub;
  
        const { data: userData } = await axios.get(
          `https://${domain}/api/v2/users/${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        await axios({
          url: `${process.env.REACT_APP_API_URL}/save-user-data`,
          method: 'POST',
          data: {
            user_id: user_id,
            email: userData.email,
            nickname: userData.nickname
          },
          headers: {
            token: accessToken
          }
          
        });
      } catch (error) {
        console.error(error);
      }
      setHasInitializedUser(true);
    };
   
       saveUserData();
    
  }, [isAuthenticated, hasInitializedUser, getAccessTokenSilently, user?.sub]);

  return hasInitializedUser ? props.children : <div>Initializing</div>;
};

export default Initialization;

