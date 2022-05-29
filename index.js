// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let favMonicaColor = new Set()
favMonicaColor.add('Yellow');
favMonicaColor.add('Pink');
favMonicaColor.add('White');
favMonicaColor.add('Purple');

let favMonicaResto = new Set()
favMonicaResto.add('Bento');
favMonicaResto.add('Sushi');
favMonicaResto.add('Pancake');
favMonicaResto.add('Eggy');
favMonicaResto.add('Tempura');
favMonicaResto.add('Padang');
favMonicaResto.add('Tteok');


let favWendyColor = new Set();
favWendyColor.add('Blue');
favWendyColor.add('Black');
favWendyColor.add('Grey');

let favWendyResto = new Set();
favWendyResto.add('Tempura');
favWendyResto.add('Bento');
favWendyResto.add('Sushi');
favWendyResto.add('Pancake');
favWendyResto.add('Padang');
favWendyResto.add('Katsu');
favWendyResto.add('Geprek');
favWendyResto.add('Pancake');
favWendyResto.add('Eggy');


const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age : 17,
    email: 'monica@dingdong.com',
    favoriteColor : favMonicaColor,
    isHavePet : "Yes",
    education : [{"name": "SD", "city": "Jakarta", "graduate":"2016"}, {"name": "SMP 02", "city": "Jakarta", "graduate":"2019"}, {"name": "SMA 03", "city": "Tangerang"}],
    favoriteRestaurant : favMonicaResto,
};
const secondUser = {
    name : 'Wendy',
    gender : 'Male',
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : favWendyColor,
    isHavePet : "No",
    education : [
            {'name':"SD 02", 'city': "Jakarta", 'graduate':'2010'},
            {'name':'SMP 03', 'city':'Bogor', 'graduate':'2013'},
            {'name':'SMA 01', 'city':'Surabaya', 'graduate':'2016'},
            {'name':'Universitas Maju', 'city':'Tangerang'}
    ]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};