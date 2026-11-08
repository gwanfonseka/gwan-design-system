export const CONTACT_LIMITS = { name: 80, email: 254, message: 5000 };

export interface ContactFieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The name is shown in the auto-reply, which goes to whatever address was entered, so a
// link here would let someone send their own content from this domain.
const LINK_OR_MARKUP = /[<>\r\n]|:\/\/|\bwww\.|\b[\w-]+\.[a-z]{2,}\b/i;

/** Used by the form for instant feedback and by the server action as the real check. */
export const validateContact = (name: string, email: string, message: string): ContactFieldErrors => {
  const errors: ContactFieldErrors = {};
  const n = name.trim();
  const e = email.trim();
  const m = message.trim();

  if (!n) errors.name = "Name is required.";
  else if (n.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (n.length > CONTACT_LIMITS.name) errors.name = `Name must be at most ${CONTACT_LIMITS.name} characters.`;
  else if (LINK_OR_MARKUP.test(n)) errors.name = "Name can't contain links.";

  if (!e) errors.email = "Email is required.";
  else if (e.length > CONTACT_LIMITS.email || !EMAIL.test(e)) errors.email = "Enter a valid email address.";

  if (!m) errors.message = "Message is required.";
  else if (m.length < 10) errors.message = "Message must be at least 10 characters.";
  else if (m.length > CONTACT_LIMITS.message) {
    errors.message = `Message must be at most ${CONTACT_LIMITS.message} characters.`;
  }

  return errors;
};
