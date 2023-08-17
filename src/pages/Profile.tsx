import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../App";
import SelfProfile from "../components/ProfileComponents/SelfProfile";
import ViewProfile from "../components/ProfileComponents/ViewProfile";
const Profile = () => {
    const profile = "https://picsum.photos/id/237/200/300";
    const [loaded, setLoaded] = useState<boolean>(false);
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState<boolean>(false);
    const providedData = useContext(userContext);
    useEffect(() => {
        id === providedData?.user
            ? setUserProfile(true) // if its true it displays users own profile
            : setUserProfile(false); // if its false it displays the user profile provided by the params

        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, [id]);

    return (
        <div className='w-full lg:ml-[340px] flex justify-center gap-[100px] pt-[10px] md:pt-[50px] md:pl-[73px]'>
            {userProfile ? (
                <SelfProfile loaded={loaded} profile={profile} />
            ) : (
                <ViewProfile loaded={loaded} profile={profile} />
            )}
        </div>
    );
};

export default Profile;
