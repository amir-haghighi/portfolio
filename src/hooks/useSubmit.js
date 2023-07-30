import { useState } from "react";

import emailjs from "@emailjs/browser";

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data, formRef) => {
    setLoading(true);
    try {
      emailjs
        .sendForm(
          "service_6ltaoq9",
          "template_ip42lrt",
          formRef.current,
          "U3kvLHAo1OPgqqaVi"
        )
        .then(
          (result) => {
            setResponse({
              type: "success",
              message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
            });
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    }
    setLoading(false);
  };

  return { isLoading, response, submit };
};

export default useSubmit;
