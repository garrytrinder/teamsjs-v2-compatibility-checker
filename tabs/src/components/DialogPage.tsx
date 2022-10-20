import { Flex, Segment, Form, FormButton, FormInput } from "@fluentui/react-northstar";
import { dialog } from "@microsoft/teams-js";

const DialogPage = () => {
    return (
        <Flex column={true} gap={"gap.small"} padding={"padding.medium"}>
            <Segment>
                <Form
                    onSubmit={(event, data) => {
                        const formData = new FormData(event.currentTarget as any);
                        const json: any = {};
                        formData.forEach((value, key) => (json[key] = value));
                        dialog.submit(json, 'c939f284-fdf2-4024-b38f-dece4ca29914');
                    }}
                >
                    <FormInput
                        label="First name"
                        name="firstname"
                        id="first-name"
                        required
                        showSuccessIndicator={false}
                    />
                    <FormButton content="Submit" primary />
                </Form>
            </Segment>
        </Flex>
    );
}

export default DialogPage;
