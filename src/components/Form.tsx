/** @format */

import { CircularProgress } from "@mui/material";
import React, { useState, useContext, useEffect, useRef } from "react";
import createNewUsers from "../API/createNewUsers";
import FormInput from "./FormInput";
import Context from "../utilis/context";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validateUserName,
} from "../utilis/validateInput";
import { Button, Error } from "../utilis/styledcomponents";
import { inputs } from "../utilis/inputsArray";
import updateUser from "../API/updateUser";

export type FormErrorsType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
};

type DefaultFormDataType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  id: string;
};

export type UserDataType = {
  fname: string;
  lname: string;
  username: string;
  email: string;
  id: string;
  avatar?: string;
};

const defaultFormData = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  id: "",
};

export type FormPropsModalType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  userData?: UserDataType;
};

export type DefaultResponseType = {
  status: string;
  message: string;
  user: UserDataType;
};

export const Form = ({ setIsOpen, userData }: FormPropsModalType) => {
  const [formData, setFormData] =
    useState<DefaultFormDataType>(defaultFormData);
  const [createResponse, setCreateResponse] =
    useState<DefaultResponseType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCompleteFormState, setIsCompleteFormState] =
    useState<boolean>(false);

  const { formErrors, setFormErrorsWrapper } = useContext(Context);

  useEffect(() => {
    if (userData) {
      const { fname, lname, username, email, id } = userData;
      const editedData = {
        firstName: fname,
        lastName: lname,
        userName: username,
        email: email,
        id: id,
      };
      setFormData(editedData);
    }
  }, [userData]);

  const addNewUser = async () => {
    try {
      setLoading(true);
      const response = await createNewUsers(
        formData.firstName,
        formData.lastName,
        formData.userName,
        formData.email
      );
      setCreateResponse(response);
      return response;
    } catch {
      setLoading(false);
    }
  };

  const handleEdit = (name: string, value: string) => {
    console.log(name, value);
    validateInput(name, value);
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const updateUserFun = async () => {
    try {
      setLoading(true);
      const response = await updateUser(
        formData.firstName,
        formData.lastName,
        formData.userName,
        formData.email,
        formData.id
      );

      setCreateResponse(response);
      return response;
    } catch {
      setLoading(false);
    }
  };

  const isValidForm = () => {
    return Object.values(formErrors).every(
      (currentValue) => currentValue === ""
    );
  };

  const isEmptyForm = () =>
    Object.entries(formData)
      .filter(([k, v]) => k !== "id" && k !== "avatar")
      .every(([k, v]) => v === "");

  const isCompleteForm = () => {
    const completedForm = Object.entries(formData)
      .filter(([k, v]) => k !== "id")
      .every(([k, v]) => v !== "");

    if (completedForm) {
      setIsCompleteFormState(true);
    }
    return completedForm;
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (isValidForm() && isCompleteForm()) {
      if (formData.id) {
        updateUserFun();
      } else {
        addNewUser();
      }
    }
  };

  const validateInput = (name: string, value: string) => {
    switch (name) {
      case "firstName":
        validateFirstName(value, setFormErrorsWrapper);
        break;
      case "lastName":
        validateLastName(value, setFormErrorsWrapper);
        break;
      case "userName":
        validateUserName(value, setFormErrorsWrapper);
        break;
      case "email":
        validateEmail(value, setFormErrorsWrapper);
        break;
      default:
        break;
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const closeModal = () => {
    setIsOpen(false);
    reloadPage();
  };

  // const inputRef = useRef<HTMLInputElement>(null);

  return !createResponse ? (
    <form>
      {inputs.map(({ id, text, name, type }) => (
        <FormInput
          key={id}
          text={text}
          id={id}
          name={name}
          type={type}
          value={formData[name as keyof DefaultFormDataType]}
          formErrors={formErrors[name as keyof FormErrorsType]}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleEdit(name, event.target.value)
          }
        />
      ))}
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Button
          onClick={handleSubmit}
          variant="contained"
          type="button"
          color="secondary"
          disabled={!isValidForm() || isEmptyForm()}
        >
          submit
        </Button>
      )}
      {!isCompleteFormState ? (
        <Error>you must complete all fields</Error>
      ) : null}
    </form>
  ) : (
    <>
      <p> {createResponse.message}</p>
      <Button onClick={closeModal} variant="contained" color="secondary">
        OK
      </Button>
    </>
  );
};
export default Form;
