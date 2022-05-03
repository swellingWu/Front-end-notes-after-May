const carMakers = ['ford','toyota','chevy'];
const dates = [new Date(), new Date()];

const carsByMake: String[][] = []
//- 在提取值时进行判断
const car = carMakers[0]
const myCar = carMakers.pop()
//=> 防止不兼容
// carMakers.push(100)
carMakers.map((car: string): string => {
    return car.toUpperCase()
})

//=> 数组类型
const importantDates: (Date | string)[] = [new Date()]
importantDates.push(new Date())
importantDates.push('2022-5-2')

//=> 元组的类型
type Drink = [string,boolean, number]
const pepsi: Drink= ['brown',true,40]
// pepsi[0] = 40//=> 类型错误