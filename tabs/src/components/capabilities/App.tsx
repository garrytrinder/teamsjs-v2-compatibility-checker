import { Button } from "@fluentui/react-northstar";
import { app } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const App = () => {
    // check to see if app has been initialized
    if (app.isInitialized()) {
        app.registerOnThemeChangeHandler(() => {
            console.log("Theme changed");
        });

        // return button to get context
        return (
            <Button onClick={async () => {
                const context = await app.getContext();
                console.log(context);
            }}>
                Get Context
            </Button>
        )
    }
    // return empty fragment if app has not been initialized
    return (<></>);
}

export const AppIsSupported = () => booleanToString(true);
