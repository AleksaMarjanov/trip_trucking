"use client";

import {
    Button,
    ButtonGroup,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import ReCAPTCHA from 'react-google-recaptcha'
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";
import emailjs from "@emailjs/browser";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

type Props = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const Form = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [isSSR, setIsSSR] = useState<boolean>(true)
    const form = useRef<HTMLFormElement>(null)
    const toast = useToast();
    const router = useRouter()
    const recaptchaRef = useRef<HTMLFormElement>(null)
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState<Props>({});

    const { isLoading, error, values } = state;

    const onBlur = (event: { target: HTMLInputElement }) =>
        setTouched((prev) => ({ ...prev, [event.target.name]: true }));

    const handleChange = (event: { target: HTMLInputElement }) =>

        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [event.target.name]: event.target.value,
            },
        }));

    const sendEmail = (event: HTMLFormElement) => {
        event?.preventDefault()


        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            emailjs.sendForm(
                process.env.emailJs_service!,
                process.env.emailJs_contact!,
                form.current!,
                process.env.emailJs_API
            );
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
            setTimeout(() => {
                setIsFormSubmitted(true);
            }, 1500);
            setTimeout(() => {
                router.push('/')
            }, 4500)
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                // TODO: Getting error type of unknown
                // @ts-ignore
                error: error.message,
            }));
        }
    };


    // * Added SSR to be false, client component gives hydration errors!!
    useEffect(() => {
        setIsSSR(false)
    }, [])

    if (isSSR) return null;

    return (
        <ChakraProvider>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[1240px] m-auto p-4">
                <motion.div
                >
                    {!isFormSubmitted ? (
                        <motion.div
                            className="flex flex-col items-center justify-center">
                            <div className="w-full">
                                <form
                                    encType="multipart/form-data"
                                    method="post"
                                    ref={form}
                                    //@ts-ignore
                                    onSubmit={sendEmail}
                                >
                                    <Container maxW="750px" mt={12} className="text-black">
                                        {error && (
                                            <Text color="red.300" my={4} fontSize="xl">
                                                {error}
                                            </Text>
                                        )}

                                        <FormControl
                                            isRequired
                                            // @ts-ignore
                                            isInvalid={touched.name && !values.name}
                                            mb={5}
                                        >
                                            <Input
                                                type="text"
                                                name="name"
                                                errorBorderColor="red.300"
                                                placeholder="Name"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={onBlur}
                                            />
                                            <FormErrorMessage>Required</FormErrorMessage>
                                        </FormControl>

                                        <FormControl
                                            isRequired
                                            // @ts-ignore
                                            isInvalid={touched.email && !values.email}
                                            mb={5}
                                        >
                                            <Input
                                                type="email"
                                                name="email"
                                                errorBorderColor="red.300"
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={onBlur}
                                            />
                                            <FormErrorMessage>Required</FormErrorMessage>
                                        </FormControl>


                                        <FormControl
                                            isRequired
                                            // @ts-ignore
                                            isInvalid={touched.message && !values.message}
                                            mb={5}
                                        >
                                            <Textarea
                                                type="text"
                                                name="message"
                                                rows={4}
                                                placeholder="Your Message"
                                                errorBorderColor="red.300"
                                                value={values.message}
                                                // @ts-ignore
                                                onChange={handleChange}
                                                // @ts-ignore
                                                onBlur={onBlur}
                                            />
                                            <FormErrorMessage>Required</FormErrorMessage>
                                        </FormControl>
                                        {/* @ts-ignore */}
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                            onChange={sendEmail}
                                        />

                                        <button
                                            type="submit"
                                            className="mt-6 border border-black rounded-xl px-4 py-2 hover:bg-slate-700 hover:text-white transition-all duration-400 ease-out"
                                            onClick={() => sendEmail}
                                        >
                                            Send
                                        </button>
                                    </Container>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={textVariant(0.4)}
                            className="flex flex-col items-center justify-center text-black ">
                            <span className="font-poppins text-4xl md:text-5xl  px-12 ">
                                Thank you for getting in touch with us!
                                <br />
                                We will get back to you as soon as possible
                                <br />
                            </span>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </ChakraProvider >
    );
};

export default Form;
