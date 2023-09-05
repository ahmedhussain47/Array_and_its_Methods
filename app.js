//Array And Its Methods
var a
var ary=[]
for (var x = 0; x<5; x++){
    a = prompt("ENTER VALUES TO PRINT IN LI FORM: ")
    ary[x] = a;
    document.write("<li>",ary[x] , "</li>")
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.writeln("<br/> Array ",fruits)
document.writeln("<br/> Upper Case ",fruits[1].toUpperCase())
document.writeln("<br/> Lower Case ",fruits[1].toLowerCase())
document.writeln("<br/> Length",fruits.length)
document.writeln("<br/> Length",fruits.length)
fruits.pop()
document.writeln("<br/> Pop: ",fruits)
fruits.push("Ahmed","Raza","Hussain")
document.writeln("<br/> push: ",fruits)
fruits.shift("Ahmed")
document.writeln("<br/> shift: ",fruits)
fruits.unshift("Ahmed")
document.writeln("<br/> unshift: ",fruits)
fruits.splice(2,1,"Maheen")
document.writeln("<br/> spice: ",fruits)


var ary = [[1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20]]
for(var a=0;a<4;a++){
    for(var b=0;b<5;b++){
        document.writeln(ary[a][b])

    }
    document.writeln("<br>")
}
var arr = ['ahmed','araza','ahmed','hussain','muhammad','ali']
document.writeln(ary[1][2])
x=ary[0][4] = 'ahmed'
document.writeln(ary.reverse(),"<br><br>")

var sl = arr.slice(1,4)
document.writeln(sl,"<br><br>")
document.writeln(arr,"<br><br>")
arr.splice(2,0,'ashar','raza','hottie','rubab')
document.writeln(arr,"<br><br>")
document.writeln(arr.join(' - '),"<br><br>")
var array2 = '22iu4i24u'
var var1 = Array.isArray(arr)
if (var1 == true){
    document.writeln("Yes it is ",var1)
}
else{
    document.writeln("<br><br>No it isnt")
}
var var2 = Array.isArray(array2)
if (var2 == true){
    document.writeln("<br><br>Yes it is ",var2)
}
else{
    document.writeln("No it isnt<br><br>")
}

var n = arr.indexOf('ahmed',1)
document.writeln("It is avaiable ",n) //-1 means unable to find
document.writeln('<br>',arr.includes('ahmed')) //checks wheather sth is available in array or not
var age = [12,15,11,82,18,22]
var agecheck = age.some(adultage)
var agecheck = age.every(adultage)

function adultage(age){
    return age >=18
}
document.writeln("<br>yes adults are here ",agecheck)
document.writeln("<br>Everyone must be 18+ ",agecheck)
var agecheck = age.find(adultage)
document.writeln("<br>who is first 18+: ",agecheck)
var agecheck = age.filter(adultage)
document.writeln("<br>all 18+: ",agecheck)
document.writeln("<br>Array to String conversion: <br>",arr.toString())

arr.forEach(function(val)
{
    document.write("<br>",val)
})
var count = 0;
arr.forEach(function(val)
{   
    if(val=='ahmed'){
        count++;
    }
})
document.write("<br><br>Ahmed appared: ",count," Times in array")
