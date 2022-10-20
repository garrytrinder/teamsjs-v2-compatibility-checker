import { geoLocation } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const GeoLocation = () => {
    // check to see if capability is supported
    if (geoLocation.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const GeoLocationIsSupported = () => booleanToString(geoLocation.isSupported());
