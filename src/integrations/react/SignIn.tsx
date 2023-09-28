/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";

export const SignIn = qwikify$(({ onSummit }: { onSummit: Function }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <div className="wrapper__form">
        <img className="logo" src="/images/logo.png" alt="logo" />

        <TextField
          required
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
        />

        <TextField
          style={{ margin: "20px 0" }}
          required
          type="password"
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          fullWidth
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            onSummit();
          }}
        >
          Sign In
        </Button>
      </div>
    </Container>
  );
});
