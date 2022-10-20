import { stageView } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const StageView = () => {
    // check to see if capability is supported
    if (stageView.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const StageViewIsSupported = () => booleanToString(stageView.isSupported());
