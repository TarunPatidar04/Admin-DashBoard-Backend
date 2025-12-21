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
    next(error);
  }
};