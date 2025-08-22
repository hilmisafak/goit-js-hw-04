"use strict";
/* 
profile nesnesi, bir oyun platformundaki kullanıcının profiline aittir. Özellikleri arasında profil adı username ve oyunda geçirilen playTime olarak belirtilen aktif saatler bulunmaktadır.
const profile = {
	username: "Jacob",
  playTime: 300,
};
profile nesnesini özellikleriyle çalışmak için metodlarla tamamlayın.

changeUsername(newName) metodu, bir dizeyi (yeni ad) newName parametresi olarak almalı ve username özelliğinin değerini yeni değerle değiştirmelidir. Hiçbir şey döndürmez.
updatePlayTime(saatler) metodu, bir sayıyı (saat miktarı) hours parametresi olarak almalı ve playTime özelliğinin değerini artırmalıdır. Hiçbir şey döndürmez.
getInfo() metodu, <Username> has <amount> active hours! formatında bir dize döndürmelidir, burada <Username>, profil adıdır ve <amount>, oyun saatlerinin miktarıdır.
Fonksiyonunuzu tanımladıktan sonra aşağıdaki kodu alıp yapıştırın, böylece işlevin doğru çalışıp çalışmadığını kontrol edebilirsiniz. Sonuçlar konsola yazdırılacaktır.
*/

const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
