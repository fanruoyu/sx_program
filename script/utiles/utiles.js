const getCookie = (target) => {
    var value;
    document.cookie.split('; ').forEach((key) => {
        let _key = key.split('=')
        if (_key[0] === target) {
            value = _key[1]
        }
    })
    return value
}
const setCookie = (val, data) => {
    document.cookie = val + '=' + data
}
const  delCookie = (name) => {//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间   
    let date = new Date();   
    date.setTime(date.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null)
    document.cookie = name + " = " + cval + ";expires = " + date.toGMTString();   
}
// 时间日期方法
const getDateStr = (data) => {
    let dataStr = data.getFullYear() + '-' + addZero(data.getMonth()) + '-' + addZero(data.getDate())
    return dataStr
}
// 添零方法
const addZero = (num) => {
   return num = num >= 10? num: '0' + num
}
export { getCookie, setCookie, delCookie, getDateStr }