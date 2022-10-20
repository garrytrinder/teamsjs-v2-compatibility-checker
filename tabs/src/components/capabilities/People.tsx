import { people } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const People = () => {
    // check to see if capability is supported
    if (people.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const PeopleIsSupported = () => booleanToString(people.isSupported());
