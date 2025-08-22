"use strict";
/* 
isEnoughCapacity(products, containerSize) adında bir fonksiyon yaz, bu fonksiyon verilen ürünlerin tümünün konteynıra paketlerken sığıp sığmayacağını hesaplar.

Fonksiyon iki parametre alır:

products — Ürünlerin adlarını içeren ve miktarlarını değer olarak içeren bir nesne. Örneğin, { apples: 2, grapes: 4 }.
containerSize — Konteynerin içine sığabileceği maksimum ürün miktarı.
Fonksiyon, ürünlerin konteynıra sığıp sığmayacağını kontrol ederek sonucu döndürmelidir. Yani, products nesnesindeki toplam ürün miktarını hesaplayıp bu miktarın containerSize'a eşit veya daha az olduğunda true, aksi takdirde false değerini döndürmelidir.

Aşağıdaki kodu al ve kendi fonksiyonunu tanımladıktan sonra çalıştırarak doğruluğunu kontrol et. Sonuçlar konsola yazdırılacaktır.
*/

function isEnoughCapacity(products, containerSize) {
  let totalProducts = 0;
  for (const product in products) {
    totalProducts += products[product];
  }
  return totalProducts <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
