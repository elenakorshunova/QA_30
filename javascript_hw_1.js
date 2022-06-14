// // КОД С ЗАНЯТИЯ

// //типы данных

// let user_name = "Elena"
// console.log(user_name)


// let age = 32
// console.log(age)

// // let person = user_name + " " + age
// //console.log(person)

// console.log(user_name + " " + age)

// let user_age = 30
// let work_period = 10
// let total_time = user_age + work_period

// console.log("total_time = " + total_time, typeof (total_time))


// let morning = false
// console.log("morning = ", morning, typeof (morning))


// let evening = true
// console.log("evening = ", evening, typeof (evening))


// // булевый тип данных через операцию сравнения

// let apple = 10
// let cherry = 20

// let compare = apple <= cherry
// // console.log("Compare is", compare)


// // операции условий

// if (compare) {
//     console.log("Compare is", compare)

// } else {
//     console.log("!Compare is", false)


// }



//ДЗ

let item_1 = 5
console.log("item_1 = ", item_1)

let item_2 = 3
console.log("item_2 = ", item_2)

let item_3 = 3
console.log("item_2 = ", item_1 + item_2)

let item_4 = "Yolochka"
console.log("item_4 = ", item_4)

console.log("string = ", item_3 + item_4)
console.log("item_3x4 = ", item_3 * item_4)

let item_5 = item_3
let item_6 = 15

console.log(typeof item_6)
let item_6_type = Number()
console.log(typeof item_6_type)

console.log("item_6 == ", item_6, "item_6_type ==", item_6_type)

let item_7 = item_6 = String(item_6)
console.log(typeof item_6)

item_7_type = String()
console.log("item_7 == ", item_7,"item_7_type == ", item_7_type)

let age_1 = 10
let age_2 = 18
let age_3 = 60


if (age_1 =10) {
    console.log("age_1 = 10")
} else {
    console.log("проверка не пройдена")
}

if(age_1 < age_2) {
    console.log("you don't have access cause your age is " + age_1 + " it's less then")
}

if(age_1 >= age_2 && age_1 < age_3) {
    console.log("welcome!")
}

if(age_1 > age_3) {
    console.log("keep calm and watch Culture channel")
} else {
    console.log("technical work")
}


