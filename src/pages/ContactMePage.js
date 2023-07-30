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
        comment: "",
      },

      validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().required("Required").email("Invalid email address"),
        type: Yup.string().optional(),
        comment: Yup.string()
          .required("Required")
          .min(5, "must be at least 5 letters"),
      }),
      onSubmit: () => {
        submit(values, formRef);
      },
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
    <FullScreenSection isDarkBackground spacing={8} height="auto  ">
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
                  onClick={() => console.log(errors)}
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
                  placeholder="Message me"
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
          <Heading as="h3" size="lg" fontWeight={"normal"} mt={10}>
            my phone number : +989152511664
          </Heading>
          <Heading as="h3" size="lg" fontWeight={"normal"} mt={10} mb={2}>
            my address : Tehran Province, Tehran, Varnoos Alley, Blvd,
            Keshavarz, Iran.
          </Heading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.52507174421606!2d51.39970737375017!3d35.71050584193878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01178d9c009d%3A0xd8a3d6d6704607b2!2sSaharkhiz%20Dormitory!5e0!3m2!1sen!2s!4v1690678206914!5m2!1sen!2s"
            width="300"
            height="200"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </VStack>

      <Alert />
    </FullScreenSection>
  );
};

export default ContactMePage;
