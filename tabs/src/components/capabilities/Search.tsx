import { search } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Search = () => {
    // check to see if capability is supported
    if (search.isSupported()) {
        return (
            <div>Coming soon</div>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const SearchIsSupported = () => booleanToString(search.isSupported());
