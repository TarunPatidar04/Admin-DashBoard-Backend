import { Contact } from "../models/contact.models.js";


export const contactForm = async (req, res, next) => {
  try {
    const { username, email, message } = req.body;
    const contact = await Contact.create({
      username,
      email,
      message
    });
    res.status(201).send({
      message: "Contact form submitted successfully",
      contact: contact
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).send({
      message: "Internal Server Error",
    });
    // next(error);
  }
};