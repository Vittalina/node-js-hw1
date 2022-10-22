const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(data);
  console.table(result);
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(data);
  const getContact = result.find((contact) => contact.id === contactId);
  console.table(getContact);
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(data);
  const newData = result.filter((contact) => contact.id !== contactId);
  console.table(newData);
  fs.writeFile(contactsPath, JSON.stringify(newData));
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf8");
  const result = JSON.parse(data);
  result.push({ name, email, phone });
  console.table(result);
  fs.writeFile(contactsPath, JSON.stringify(result));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
