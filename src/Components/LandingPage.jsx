import React from "react";
import { useEffect } from "react";
import { Grid } from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { Card } from "@cedcommerce/ounce-ui";
import { Progressbar } from "@cedcommerce/ounce-ui";
function LandingPage() {
  // UseState That Holds API Data
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch API Data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((val) => setData(val));
  }, []);
  return (
    <center>
      <div style={{ width: "50%" }}>
        <h1>Home</h1>
        {/* Display */}
        {data.length !== 0 ? (
          <Grid
            columns={[
              {
                align: "center",
                dataIndex: "id",
                key: "id",
                title: "ID",
                width: 100,
              },
              {
                align: "center",
                dataIndex: "name",
                key: "name",
                title: "Name",
                width: 100,
              },
              {
                align: "center",
                dataIndex: "email",
                key: "email",
                title: "Email",
                width: 100,
              },
            ]}
            dataSource={data}
          />
        ) : (
          <Card>
            <Progressbar animating percentage={20} />
          </Card>
        )}
      </div>
    </center>
  );
}

export default LandingPage;
