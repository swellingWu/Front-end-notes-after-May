//=> 在 ts 中拥有类型系统: 
function aivide(a: number, b: number): number {//- 我们可以在函数后 : 类型来标注该函数的返回值
    return a / b;//‘ 当函数没有返回值或返回值的类型不正确时将报错
}
//=> 而当我们不需要任何返回值时
const logger = (message: string): void => {
    console.log(message);
    //' 当我们返回值时将会出错， :void 代表将不返回任何值
    //=> return 'return str'
}
//=> 返回错误时
const throwError = (message: string): never => {//- :never 将抛出一个错误并提前退出函数，不返回任何值
    throw new Error(message)
}


const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}
const logWeather = (forcast: {date: Date,weather: string}): void => {
                          // {date, weather}: {date: Date, weather: string}
    console.log(forcast.date);
    console.log(forcast.weather)
}

logWeather(todaysWeather)