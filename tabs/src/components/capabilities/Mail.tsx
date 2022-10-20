import { mail } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Mail = () => {
    // check to see if capability is supported
    if (mail.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const MailIsSupported = () => booleanToString(mail.isSupported());
