

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
import mammoth from "mammoth";
import { ChakraProvider } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { document } from "postcss";

const initValues = { name: "", email: "", subject: "", message: "", file: [], cover_letter: [] };

const initState = { isLoading: false, error: "", values: initValues };

type Props = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    file?: HTMLFormElement | null
    cover_letter?: HTMLFormElement | null;

}

const Apply = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [isSSR, setIsSSR] = useState<boolean>(true)
    const form = useRef<HTMLFormElement>(null)
    const router = useRouter()
    const toast = useToast();
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


    const sendEmail = () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            emailjs.sendForm(
                // TODO: getting an error here with emailjs
                process.env.emailJs_service!,
                process.env.emailJs_template!,
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
            }, 5500);

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
    console.log({ values })


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
                                    onSubmit={sendEmail}
                                    className=""
                                    id="apply"
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

                                        <FormControl
                                            isRequired
                                            isInvalid={touched.file! && !values.file}
                                            mb={5}
                                        >

                                            <FormLabel>
                                                Attach your resume:
                                            </FormLabel>
                                            <Input
                                                type="file"
                                                id="fileUpload"
                                                name="file"
                                                className=""
                                                value={values.file}
                                                onChange={handleChange}
                                            />
                                        </FormControl>

                                        <FormControl
                                            placeholder="optional"
                                            isInvalid={touched.cover_letter! && !values.cover_letter}
                                            mb={5}
                                        >

                                            <FormLabel>
                                                Cover Letter: (optional)
                                            </FormLabel>
                                            <Input
                                                type="file"
                                                name="cover_letter"
                                                className=""
                                                value={values.cover_letter}
                                                onChange={handleChange}
                                            />
                                        </FormControl>

                                        <Button
                                            className=" hover:bg-slate-700 hover:text-white transition-all duration-400 ease-out"
                                            variant="outline"
                                            colorScheme="white"
                                            isLoading={isLoading}
                                            disabled={
                                                !values.name ||
                                                !values.email ||
                                                !values.cover_letter ||
                                                !values.file ||
                                                !values.message
                                            }
                                            onClick={sendEmail}
                                        >
                                            Send
                                        </Button>
                                    </Container>
                                </form>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={textVariant(0.5)}
                            className="flex flex-col items-center justify-center text-black h-screen">
                            <h2 className="font-poppins text-2xl  max-[425px]:text-[18px] max-[425px]:p-3 h-screen">
                                Thank you for applying for Tripp in Trucking
                                <br />
                                We will review your application and someone will

                                <br />
                                reach out in case that your skills match our needs!
                                <br />
                            </h2>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </ChakraProvider >
    );
};

export default Apply;