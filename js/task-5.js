/*
Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли запрещенное слово то функция возвращает true, 
если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.

const checkForSpam = function(message) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

const checkForSpam = function(message) {
  const messageInput = message.toLowerCase();  
  const messageSplit = messageInput.split(' ');
    for(let word of message) { 
    console.log(messageSplit.includes('sale') || messageSplit.includes('[spam]'));    
  }
}
 
