import React, { useState } from "react";
import { Modal } from "@cedcommerce/ounce-ui";
import { Button } from "@cedcommerce/ounce-ui";
import { Card } from "@cedcommerce/ounce-ui";
function ModalComponent(props) {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <Card>
        <Button
          onClick={function noRefCheck() {
            setFlag(true);
          }}
        >
          View
        </Button>
        <Modal
          open={flag}
          modalSize="large"
          secondaryAction={{
            content: "Close",
            loading: false,
            onClick: function noRefCheck() {
              setFlag(false);
            },
          }}
        >
          <h1>Contact info</h1>
          <hr></hr>
          <h3>Phone: {props.phone}</h3>
          <h3>Website: {props.website}</h3>
        </Modal>
      </Card>
    </div>
  );
}

export default ModalComponent;
