/** @format */

import React from "react";
import { UserDataType, FormErrorsType } from "../components/Form";

type ContextType = {
  users: UserDataType[] | null;
  formErrors: FormErrorsType | null;
  setFormErrorsWrapper: (name: string, value: string) => void;
};

const Context = React.createContext<ContextType | null>(null);

export default Context;
