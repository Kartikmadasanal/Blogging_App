
import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import FooterBar from "../Components/Footer";
import Header from "../Components/Header";
import { UserContext, UserContextProvider } from "../contaxt/UserContext";

function Contact() {

  const { user } = useContext(UserContext);

  return (
    <UserContextProvider>  
    <div>
      <Header />

      <div className="max-w-lg mx-auto p-3 w-full">

        <form action="#">
          <div className="mb-6 mt-3">
            <Label htmlFor="email" className="mb-2 block">
              Your email
            </Label>
            <TextInput id="email" name="email" placeholder="Your_gmail@.com" type="email" />
          </div>
          <div className="mb-6">
            <Label htmlFor="subject" className="mb-2 block">
              Subject
            </Label>
            <TextInput id="subject" name="subject" placeholder="Let us know how we can help you" />
          </div>
          <div className="mb-6">
            <Label htmlFor="message" className="mb-2 block">
              Your message
            </Label>
            <Textarea id="message" name="message" placeholder="Your message..." rows={4} />
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-full">
              Send message
            </Button>
          </div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <a href="mailto:info@company.com" className="hover:underline">
              kartikmadasanal@gmail .com
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <a href="tel:2124567890" className="hover:underline">
              8867975992
            </a>
          </p>
        </form>
      </div>
      <FooterBar />
    </div>
    </UserContextProvider>
  
  );
}

export default Contact;