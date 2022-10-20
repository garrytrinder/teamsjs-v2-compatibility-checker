import { Button } from "@fluentui/react-northstar";
import { calendar } from "@microsoft/teams-js";
import { booleanToString } from "../../helpers";

export const Calendar = () => {
    // check to see if capability is supported
    if (calendar.isSupported()) {
        // return button to compose a meeting
        return (
            <Button onClick={async () => {
                await calendar.composeMeeting({
                    attendees: ['AdeleV@6plbfs.onmicrosoft.com', 'AlexW@6plbfs.onmicrosoft.com'],
                    content: "Meeting Agenda",
                    subject: "Meeting created by Teams JS"
                })
            }}>
                Compose Meeting
            </Button>
        )
    };
    // return empty fragment if capability is not supported
    return (<></>);
}

export const CalendarIsSupported = () => booleanToString(calendar.isSupported());
