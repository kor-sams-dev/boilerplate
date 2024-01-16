import React from "react";
import { Card } from "../../components/compound/Card";

export const CompoundComponentPage = () => {
  return (
    <Card value="test">
      <Card.Header>
        <h1>Header</h1>
      </Card.Header>
      <Card.Body>
        <h1>Body</h1>
      </Card.Body>
      <Card.Footer>
        <h1>Footer</h1>
      </Card.Footer>
    </Card>
  );
};
