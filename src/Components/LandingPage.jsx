import React from "react";
import { useEffect } from "react";
import { Grid } from "@cedcommerce/ounce-ui";
import { useState } from "react";
import { Card } from "@cedcommerce/ounce-ui";
import { Progressbar } from "@cedcommerce/ounce-ui";
import { Button } from "@cedcommerce/ounce-ui";
import ModalComponent from "./ModalComponent";
function LandingPage() {
  // UseState That Holds API Data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch API Data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((val) => {
        for (let i = 0; i < val.length; i++) {
          let obj = {
            id: val[i].id,
            name: val[i].name,
            email: val[i].email,
            action: (
              // Call Modal Component
              <ModalComponent phone={val[i].phone} website={val[i].website} />
            ),
          };
          // Set Into State
          data.push(obj);
          setData([...data]);
        }
      });
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
              {
                align: "center",
                dataIndex: "action",
                key: "action",
                title: "Action",
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
