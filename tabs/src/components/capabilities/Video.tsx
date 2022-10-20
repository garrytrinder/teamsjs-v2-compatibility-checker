import { video } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Video = () => {
    // check to see if capability is supported
    if (video.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const VideoIsSupported = () => booleanToString(video.isSupported());
