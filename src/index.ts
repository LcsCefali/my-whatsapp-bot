import { client } from "./server";

client.on("message", async (message: any) => {
  const {name, pushname, shortName} = await message.getContact();
  const chat = await message.getChat();

  if (chat.isGroup) return false;

  const userMessage = message.body;
  const validationHi = /oi/i;
  const validationOw = /ow/i;
  const validationOu = /ou/i;
  const validationDay = /bom dia/i;
  const validationAfternoon = /boa tarde/i;
  const validationMan = /man/i;
  const validationMan1 = /men/i;
  const validationCefa = /cef/i;
  const validationEai = /eai/i;
  const validationEai1 = /e ai/i;
  const validationViniciao = /ai nego/i;
  const defaultMessage = "Cefali's Bot:\n";

  if(userMessage.match(validationHi)) {
    message.reply(
      `${defaultMessage}Ola ${pushname}, logo o Lucas irá responde-lo(a)!`
    );
  } else if(userMessage.match(validationDay)) {
    message.reply(
      `${defaultMessage}Bom dia ${pushname}, logo o Lucas irá responde-lo(a)!`
    );
  } else if(userMessage.match(validationAfternoon)) {
    message.reply(
      `${defaultMessage}Boa tarde ${pushname}, logo o Lucas irá responde-lo(a)!`
    );
  } else if(userMessage.match(validationMan)) {
    message.reply(
      `${defaultMessage}Eai mano, já respondo!`
    );
  } else if(userMessage.match(validationMan1)) {
    message.reply(
      `${defaultMessage}Eai mano, já respondo!`
    );
  } else if(userMessage.match(validationOu)) {
    message.reply(
      `${defaultMessage}Solta o verbo.`
    );
  } else if(userMessage.match(validationOw)) {
    message.reply(
      `${defaultMessage}Solta o verbo.`
    );
  } else if(userMessage.match(validationCefa)) {
    message.reply(
      `${defaultMessage}Fala ai mano(a), já já ele vê.`
    );
  } else if(userMessage.match(validationEai) || userMessage.match(validationEai1)) {
    message.reply(
      `${defaultMessage}Fala ai mano(a), já já ele vê.`
    );
  } else if(userMessage.match(validationViniciao)) {
    message.reply(
      `${defaultMessage}Fala ai Viniciao.😎`
    );
  }
});
