import { sharing } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Sharing = () => {
    // check to see if capability is supported
    if (sharing.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const SharingIsSupported = () => booleanToString(sharing.isSupported());
