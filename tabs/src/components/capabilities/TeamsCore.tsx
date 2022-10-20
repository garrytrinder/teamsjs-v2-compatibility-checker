import { teamsCore } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const TeamsCore = () => {
    // check to see if capability is supported
    if (teamsCore.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const TeamsCoreIsSupported = () => booleanToString(teamsCore.isSupported());
