import React, { useState } from "react";
import Modal from "./lib/components/Modal";

export function Example() {
  const [displayModal, setDisplayModal] = useState(true);

  return (
    <Modal
      isVisible={displayModal}
      message={"write your message here!"}
      handleClose={() => setDisplayModal(false)}
    />
  );
}
