/*
Напиши скрипт подсчета стоимости гравировки украшений. 
Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, 
и возвращающую цену гравировки всех слов в строке.

const calculateEngravingPrice = function(message, pricePerWord) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */


const calculateEngravingPrice = function(messages, pricePerWord) {
        
    for(let message of messages) {
     const totalPrice = messages.split(' ').length * pricePerWord;
    console.log(totalPrice);
    
    return totalPrice;
  }
};
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  );
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  );
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  );


