import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "../components/FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { AlertProvider, useAlertContext } from "../context/alertContext";
import Alert from "../components/Alert";

const ContactMePage = () => {
  const formRef = useRef(null);
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { values, errors, touched, getFieldProps, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        email: "",
        type: "hireMe" | "openSource" | "other",
        comment: "Message me",
      },
      onSubmit: () => {
        submit(values, formRef);
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().required().email("Invalid email address"),
        type: Yup.string().optional(),
        comment: Yup.string()
          .required("Required")
          .min(5, "Must be at least 5 characters"),
      }),
    });
  // Show an alert when the form is submitted successfully
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      // Reset the form if the response is successful
      if (response.type === "success") resetForm();
    }
  }, [response]);
  let { value: placeholder, ...restOfCommentsProps } = getFieldProps("comment");
  return (
    <FullScreenSection isDarkBackground spacing={8}>
      <VStack w="100%" p={24} alignItems="flex-start" id="contactme-section">
        <Heading as="h1">Contact me</Heading>
        <Box rounded="md" w="100%">
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="input-white"
          >
            <VStack spacing={4}>
              <FormControl isInvalid={touched.firstName && errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...getFieldProps("firstName")}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...getFieldProps("email")}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  color="blackAlpha.900"
                  {...getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={touched.comment && errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={150}
                  placeholder={placeholder}
                  {...restOfCommentsProps}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      <Alert />
    </FullScreenSection>
  );
};

export default ContactMePage;
