import { Button, Flex } from "@fluentui/react-northstar";
import { geoLocation } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const GeoLocation = () => {
    // check to see if capability is supported
    // this isn't released yet, so it's not surprising that it doesn't work
    if (geoLocation.isSupported()) {
        return (
            <Flex gap="gap.small" vAlign="center">
                <Button onClick={async () => {
                    // check if the user has granted permission to access their location
                    const hasPerms = await geoLocation.hasPermission();
                    console.log(`GeoLocation: ${hasPerms}`);
                }}>
                    Has Permission
                </Button>
                <Button onClick={async () => {
                    // request permission to access the user's location
                    const hasConsent = await geoLocation.requestPermission();
                    console.log(`GeoLocation consented: ${hasConsent}`);
                }}>
                    Request Permission
                </Button>
                <Button onClick={async () => {
                    // get the user's location
                    try {
                        const location = await geoLocation.getCurrentLocation();
                        console.log(`GeoLocation consented: ${location}`);
                    } catch (e) {
                        console.log(`GeoLocation error: ${e}`);
                    }
                }}>
                    Get Location
                </Button>
                {geoLocation.map.isSupported() &&
                    <>
                        <Button onClick={async () => {
                            try {
                                await geoLocation.map.chooseLocation()
                            } catch (e) {
                                console.log(`GeoLocation error: ${e}`);
                            }
                        }}>
                            Map: Choose Location
                        </Button>
                        <Button onClick={async () => {
                            try {
                                const location = await geoLocation.getCurrentLocation();
                                await geoLocation.map.showLocation(location);
                            } catch (e) {
                                console.log(`GeoLocation error: ${e}`);
                            }
                        }}>
                            Map: Show Location
                        </Button>
                    </>
                }
            </Flex>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const GeoLocationIsSupported = () => booleanToString(geoLocation.isSupported());
