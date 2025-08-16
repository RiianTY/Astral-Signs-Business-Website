import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Form, Input, Button, Textarea } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import DefaultLayout from "@/layouts/default";
import "@/styles/globals.css";
import { toast } from "sonner";
import { title, subtitle } from "@/components/primitives";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [action, setAction] = useState("");

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        // Initialize EmailJS with your service ID, template ID, and user ID
        .sendForm("service_80rmige", "template_fbcrfmp", form.current, {
          publicKey: "z_l982_kfuBRNqYZ4",
        })
        .then(
          () => {
            return toast("Thanks for contacting us", {
              description: "Well get back to you as soon as possible.",
              action: {
                label: "X",
                onClick: () => console.log("Undo"),
              },
            });
          },
          (error: { text: string }) => {
            console.error("FAILED...", error.text);
            return toast.error("Failed to send message", {
              description: "Please try again later.",
              action: {
                label: "X",
                onClick: () => console.log("Error"),
              },
            });
          }
        );
    } else {
      console.error("Form reference is null.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title() + "text-left"}>Contact Us</h1>
      <p className={subtitle({ class: "mt-2" }) + " text-center"}>
        We would love to hear from you! Please fill out the form below.
      </p>
      <div className="flex flex-col mb-10 md:mt-10 md:flex-row gap-4 ">
        <div className="flex md:h-130 md:w-100 w-80 ">
          <div className="inline-block max-w-lg text-left">
            <div className="md:text-left">
              <h2 className={subtitle()}>Call Us On:</h2>
              <p className=" mt-4 ">
                Mobile:{" "}
                <a className="underline" href="tel:+447901556211">
                  07901556211
                </a>
              </p>
              <p className=" mt-4 mb-8 ">
                Tel:{" "}
                <a className="underline" href="tel:01323507297">
                  01323507297
                </a>
              </p>
            </div>
          </div>
        </div>

        <Form
          className="w-full max-w-xs flex items-center flex-col gap-4"
          encType="multipart/form-data"
          ref={form}
          onReset={() => setAction("reset")}
          onSubmit={sendEmail}
        >
          <Input
            isRequired
            errorMessage="Please enter a valid username"
            label="First Name"
            labelPlacement="inside"
            name="first_name"
            type="text"
            size={"sm"}
          />

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Last Name"
            labelPlacement="inside"
            name="last_name"
            type="text"
          />

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="inside"
            name="user_email"
            type="email"
          />

          <Input
            errorMessage="Please enter a valid phone number"
            label="Phone number"
            labelPlacement="inside"
            name="user_phone"
            type="number"
          />

          <Input
            errorMessage="Please enter a budget"
            label="Budget"
            labelPlacement="inside"
            name="user_budget"
            className="appearance-none"
            type="number"
          />

          <Textarea
            errorMessage="Please enter a budget"
            label="Additional info"
            labelPlacement="inside"
            name="user_message"
            type="text"
          />
          <div className="flex w-full gap-2">
            <Button
              className={
                buttonStyles({
                  variant: "shadow",
                }) +
                " w-3/4 bg-gradient-to-r from-[#B5D969] to-[#9ed130] text-black"
              }
              color="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button className="w-1/4" type="reset" variant="flat">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default function Contact() {
  return (
    <DefaultLayout>
      <ContactForm />
    </DefaultLayout>
  );
}
