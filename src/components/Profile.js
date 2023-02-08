import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const saveUserData = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const domain = "dev-u5mawjni6mjjw103.us.auth0.com";
        const user_id = user.sub;
  
        const { data: userData } = await axios.get(
          `https://${domain}/api/v2/users/${user_id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        await axios.post('http://localhost:3001/save-user-data', {
          user_id: user_id,
          email: userData.email,
          nickname: userData.nickname
        });
      } catch (error) {
        console.error(error);
      }
    };
    if (isAuthenticated) {
      saveUserData();
    }
  }, [isAuthenticated, getAccessTokenSilently, user?.sub]);

  return null
};

export default Profile;
