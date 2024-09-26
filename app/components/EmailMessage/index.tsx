import React from "react";
import { Html } from "@react-email/components";
import { FormData } from "../contact";

export const EmailMessage: React.FC<Readonly<FormData>> = ({
  // name,
  // email,
  // message,
}) => {
  return <Html lang="en">Email</Html>;
};
