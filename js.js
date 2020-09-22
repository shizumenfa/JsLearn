/* var age = 20;
console.log(isNaN(age));
var usname = 'suchao';
console.log(isNaN(usname));

console.log(age.toString());
console.log(String(age));
console.log(age + '');

var num = '201';
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(Number(num));
console.log(num - 0);

var str = 0;
console.log(Boolean(str));
str = 1;
console.log(Boolean(str));
str = undefined;
console.log(Boolean(str));
str = null;
console.log(Boolean(str));

console.log(5 > 3 && 3 < 5);
console.log(5 < 3 && 5 > 3);
console.log(5 > 3 || 3 < 5);
console.log(5 < 3 || 5 > 3);
var and = 5 > 3;
console.log(and);
console.log(!and);

console.log(123 && 456);
console.log(123 || 456);

str = str + 1;
console.log(str);
str += 1;
console.log(str);

var popUp = prompt('输入成绩')
if (popUp == 100) {
    alert('你真np');
} else if (popUp >= 90) {
    alert('你真不错');
} else if (popUp >= 60) {
    alert('有点意思');
}

var usname = prompt('请输入姓名')
switch (usname) {
    case '苏超':
        console.log('你的成绩是100');
        break;
    case '孟凡琦':
        console.log('你的成绩是垃圾');
        break;
    default:
        console.log('名字你都输入不对啊');
}

for (let i = 1; i <= 10; i++) {
    console.log('我爱说垃圾话');

}

var str = '';
for (var i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5; j++) {
        str = str + '★';
    }
    str += '\n';
}
console.log(str);

var han = prompt('han');
var lie = prompt('lie');
var str = '';
for (var i = 1; i <= han; i++) {
    for (let k = 1; k < lie; k++) {
        str += '★';

    }
    str += '\n';
}
console.log(str);

var i = 1;
while (i <= 10) {
    console.log('你妈死了');
    i++;
}

do {
    console.log('尼玛死了' + i + '次');
    i++;
} while (i <= 20);

for (var i = 0; i <= 10; i++) {
    if (i == 4) {
        continue;
    }
    console.log('你妈死了' + i + '次');
}

for (var i = 0; i <= 10; i++) {
    if (i == 4) {
        break;
    }
    console.log('你妈死了' + i + '次');
}

var arr = [1, 2, 3, 4, 5];
console.log(arr.length);
console.log(arr[0]);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);

}
arr.length = 6;
console.log(arr.length);
arr[5] = 6;
console.log(arr[5]);
arr[4] = 7;
console.log(arr[4]);

function star(han, lie) {
    var str = '';
    for (var i = 1; i <= han; i++) {
        for (var j = 1; j <= lie; j++) {
            str += '★';

        }
        str += '\n';
    }
    return str;
}
var h = prompt('hang');
var l = prompt('lie');
parseInt(h);
parseInt(l);
console.log(star(h, l));


function fn1() {
    console.log(111);
    fn2();
    console.log('fn1');
}

function fn2() {
    console.log(222);
    console.log('fn2');
}
fn1();

var obj = {
    name: 'suchao',
    sex: 'nan'
}
for (var k in obj) {
    // console.log(k);
    console.log(obj[k]);
}


//字面量
var obj = {
    usname: 'suchao',
    sex: 'nan',
    age: '20',
    sayHi: function() {
        console.log('我是你的爸爸');
    }
}
console.log(obj.usname);
console.log(obj.sex);
console.log(obj.age);
obj.sayHi();

//new Object
var obj = new Object();
obj.name = 'suchao';
obj.age = '20';
obj.sex = 'nan';
obj.sayHi = function() {
    console.log('我还是你的爸爸');
}
console.log(obj.name);
console.log(obj.sex);
console.log(obj.age);
obj.sayHi();


//构造函数
function obj(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sing = function(sang) {
        console.log(sang);
    }
}
var suchao = new obj('苏超', '20', '男');
console.log(suchao);
suchao.sing('动漫歌曲');

var menfanqi = new obj('孟凡琦', '15', '男');
console.log(menfanqi);
menfanqi.sing('我是大笨蛋');

console.log(suchao.name);
for (var k in suchao) {
    console.log(k);
}
for (var i in menfanqi) {
    console.log(suchao[i]);
}


var num = 3.4;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
var abs = -3;
console.log(Math.abs(abs));
*/

var date = new Date('2023/5/23');
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());