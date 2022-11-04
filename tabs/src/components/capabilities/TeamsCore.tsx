import { Button, Flex } from "@fluentui/react-northstar";
import { teamsCore } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const TeamsCore = () => {
    // check to see if capability is supported
    if (teamsCore.isSupported()) {
        // register a handler for page unload event
        teamsCore.registerBeforeUnloadHandler(() => {
            console.log("BeforeUnloadHandler");
            return true;
        });

        // register a handler for page unload event
        teamsCore.registerOnLoadHandler(() => {
            console.log("OnLoadHandler");
            return true;
        });

        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    teamsCore.enablePrintCapability();
                }}>
                    Enable Print Capability
                </Button>
                <Button onClick={async () => {
                    teamsCore.print();
                }}>
                    Print
                </Button>
            </Flex>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const TeamsCoreIsSupported = () => booleanToString(teamsCore.isSupported());
