import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";
import Copyright from "./Copyright";
import SocialMediaBar from "./SocialMediaBar";

export default function Footer() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <ContactBox />
        <ContactForm />
      </div>
      ;
      <div>
        {" "}
        <SocialMediaBar />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
}
