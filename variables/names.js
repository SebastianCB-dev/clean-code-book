/* You have to create the variable's names in English, using CamelCase */

//bad
const yyyymmdstr = moment().format('YYYY/MM/DD');
//better
const currentDate = moment().format('YYYY/MM/DD');


//bad
class AbstractUser { }
//better
class User { }



//bad
getUserInfo();
getClientData();
getCustomerRecord();
//better
getUser()

// * ARRAYS. countriesNames
//bad
const fruit = ['manzana', 'platano', 'fresa'];
// regular
const fruitList = ['manzana', 'platano', 'fresa'];
// good
const fruits = ['manzana', 'platano', 'fresa'];
// better
const fruitNames = ['manzana', 'platano', 'fresa'];

// * Boolean, is, can, has
//bad
const open = true;
const write = true;
const fruit2 = true;
// good
const isOpen = true;
const canWrite = true;
const hasFruit = true;

// * Numbers, max, min, total
//bad
const fruits4 = 3;
//better
const maxFruits = 5;
const minFruits = 1;
const totalFruits = 3;

// * Functions. Represent actions

//bad
createUserIfNotExists()
updateUserIfNotEmpty()
sendEmailIfFieldsValid()
//better
createUser()
updateUser()
sendEmail()