import { IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { Title } from "./Title";

export function Contact() {
  return (
    <div className="mt-16" id="contact">
      <Title>My Contacts</Title>
      <p className="mt-10">
        If you're interested in working together, feel free to reach out through
        any of the channels below. I'd love to connect and maybe even become
        part of your project or team.
      </p>

      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="mailto:contatoiranadryan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong className="flex items-center gap-2 mb-1 text-lg text-secondary">
            <IconMail stroke={2} size={28} />
            E-mail
          </strong>
          contatoiranadryan@gmail.com
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=5591980589159"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong className="flex items-center gap-2 mb-1 text-lg text-secondary">
            <IconBrandWhatsapp stroke={2} size={28} />
            WhatsApp
          </strong>
          +55 91 98058-9159
        </a>
      </div>
    </div>
  );
}
