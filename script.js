//1.Verilmiş 4 rəqəmli ədədin rəqəmlərinin cəmini tap.Misal=>1657-->1+6+5+7=19
var num=2024
var cem=0
var a
count=0
while(num>=1){
    a=num%10
    num=(num-a)/10
    cem+=a
    count++
}
if(count==4){
    console.log(cem)
}
else{
    console.log("eded 4reqemli deyil")
}


//2. Verilmiş ədədin tək ve ya cüt ədəd olduğunu yoxla
var num=777
var a
a=num%10
if(a%2==0){
    console.log("eded cutdur")
}
else{
    console.log("eded tekdir")
}


//3.SWITCH operatoru ile yoxla.
// Verilmiş ədəddin 1-ile 12 arasinda oluğunu yoxla.(1 ve 12 özüdə daxil olmaq şərti ilə) Əgər bu ədəd                   1 olarsa-"Yanvar" sozunu
// 2 olarsa-"Fevral" sozunu 
//            ...
          
// 12 olarsa-"Dekabr" sozunu yaz  
var eded="9"
switch(eded){
    case eded="1":
    console.log("Yanvar")
    break;
    
    case eded="2":
    console.log("Fevral")
    break;
    
    case eded="3":
    console.log("Mart")
    break;
    
    case eded="4":
    console.log("Aprel")
    break;
    
    case eded="5":
    console.log("May")
    break;
    
    case eded="6":
    console.log("Iyun")
    break;
    
    case eded="7":
    console.log("Iyul")
    break;
    
    case eded="8":
    console.log("Avqust")
    break;
    
    case eded="9":
    console.log("Sentyabr")
    break;
    
    case eded="10":
    console.log("Oktyabr")
    break;
    
    case eded="11":
    console.log("Noyabr")
    break;
    
    default:
        console.log("Dekabr") 
}


//4.Verilmiş 3 reqemli ededdin I ve III reqemlerinin cemi II reqeme beraberdirmi? Beli ve Xeyr cavabini yaz ekrana
var num=223
var a
var b=0
var c=0
while(num>=1){
    a=num%10
    if(num>=100|| num<10){
        b+=a
    }
    else if(10<=num<=100){
        c+=a
    }
    num=(num-a)/10
}
if(b==c){
    console.log("beli")
}
else{
    console.log("xeyr")
}


//5.Her hansi bir eded daxil et.
   
// Bu ededin daxilde 5 reqemi varsa o zaman ekrana bu ededin reqemleri cemini cixart;
   
// Eger 5 reqemi yoxdursa o zaman ekrana bu ededin reqemleri hasilini cixart.
var num=157
var a
var cem=0
var hasil=1
var count=0
while(num>=1){
    a=num%10
    cem+=a
    hasil*=a
    if(a==5){
        count++
    }
    num=(num-a)/10
}
if(count>0){
    console.log(cem)
}
else{
    console.log(hasil)
}


//6.20`dən 60`a qədər cüt ədədlərin cəmini tək ədədlərin isə hasilini tapan algorithm yaz.
num=20
var cem=0
var hasil=1
while(num<=60){
    if(num%2==0){
        cem+=num
    }
    else{
        hasil*=num
    }
    num++
}
console.log("cut ededlerin cemi  "+cem)
console.log("tek ededlerin hasili  "+hasil)


//7.1-1000 qədər ədədlərin içərisində həm 7-ə, həmdə 8-ə bölünənlərin siyahisi
for (let i = 1; i < 1000; i++) {
    if(i%56==0)
    console.log(i)
}


//8.Verilmiş bir ədədin polidnom olub olmadiğin yoxlayan algoritm.Misal=>151 tərsidə düzüdə eynidir.Bu polidnomdur.
var num=727
var num2
var yeninum=""
var a
num2=num
while(num>=1){
    a=num%10
    yeninum+=a
    num=(num-a)/10
}
if (num2 == parseInt(yeninum)){
    console.log("Polinomdur")
}
else{
    console.log("Polinom deyil")
}


//9.3 dənə 6 rəqəmli ədəd verilib. Hər birinin 10 faizini tapib nəticələri topla. Alinan cavabin 10% tap.
var num1=923773
var num2=209388
var num3=473938
var cem=0
var a
cem=(num1+num2+num3)
a=cem*10/100
console.log(a)


//10.Verilmish 3 reqemli ededdin reqemleri cemi I reqemin kvadratina beraberdirmi? Beli ve Xeyr cavabini yaz ekrana
var num=499
var a
var cem=0
var b
while(num>=10){
    a=num%10
    cem+=a
    num=(num-a)/10
}
b=num**2
if(b==cem){
    console.log("beli")
}
else{
    console.log("xeyr")
}