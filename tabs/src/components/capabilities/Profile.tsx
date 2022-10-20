import { profile } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Profile = () => {
    // check to see if capability is supported
    if (profile.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const ProfileIsSupported = () => booleanToString(profile.isSupported());
