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
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import Alert from "./Alert";

const LandingSection = () => {
  const buttonRef = useRef(null);
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const { values, errors, touched, getFieldProps, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        email: "",
        type: "hireMe" | "openSource" | "other",
        comment:
          "A message from the user This message should be more than 25 chracters",
      },
      onSubmit: () => {
        submit("", values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().required().email("Invalid email address"),
        type: Yup.string().optional(),
        comment: Yup.string()
          .required("Required")
          .min(25, "Must be at least 25 characters"),
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
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <Alert />
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
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
                  height={250}
                  {...getFieldProps("comment")}
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
    </FullScreenSection>
  );
};

export default LandingSection;
