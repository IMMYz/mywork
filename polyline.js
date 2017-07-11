/**
 * Created by Yz on 2017/4/25.
 */
function addRun(polyline){
    var linePoint=polyline.getPath();//线的坐标串 (点)
    var markers=new Array();
    var pixelStart;
    var pixelEnd;
    var xn;
    var yn;
    var zn;
    var nn;
    for(var i=0;i<linePoint.length-1;i++){//n个点,n-1条直线
        pixelStart=map.pointToPixel(linePoint[i]);//像素坐标转换
        pixelEnd=map.pointToPixel(linePoint[i+1]);

        xn=pixelEnd.x-pixelStart.x;
        yn=pixelEnd.y-pixelStart.y;
        zn=Math.sqrt(xn*xn+yn*yn);//直线长度
        nn=zn/10;//全长/每次移动长度
        alert("I:"+i+"--xn:"+xn+"--yn:"+yn+"--zn:"+zn+"--nn:"+nn);
        var x1=0;
        var y1=0;
        var point1;
        for(var a=1;a<nn;a++){
            x1=pixelStart.x+xn/zn*10*a;
            y1=pixelStart.y+yn/zn*10*a;

//像素坐标转换为经纬度坐标。
            point1=map.pixelToPoint(new BMap.Pixel(x1,y1));
            markers.push(new BMap.Marker(point1));
        }
    }
    var m=1;
    var t=setInterval(function(){
        map.addOverlay(markers[m-1]);
        if(m!=1){
            map.removeOverlay(markers[m-2]);
        }
        if(m==markers.length+1){//运动结束
            clearInterval(t);
        }
        m++;
    },200);
}

//计时器
var s = 0 ;
var s2 = 0;
var time = setInterval(function(){
    console.log("时间1 "+s);
    s++;
},1000);

time = setInterval(function(){
    console.log("时间2 "+s2);
    s2++;
},1000)
clearInterval(time);

var line = {point:{x:102.73,y:25.04,date:1},point:{"x":106.63,"y":26.65,date:3},pont:{x:116.46,y:"39.92",date:2}};
var pointA = {
    "line1":[{
        "x":102.73,
        "y":25.04,
        "date":"1"
    },
        {
            "x":106.63,
            "y":26.65,
            "date":"3"
        },
        {
            "x":116.46,
            "y":39.92,
            "date":"2"
        }]}
function up(x,y){
    return(x.date>y.date)?1:-1;
}
pointA.line1.sort(up);

for(var i=0;i<pointA["line1"].length;i++){
    var a = pointA["line1"][i].date;
    console.log(a);
}
var arr = {a1:[{age:12},{age:1},{age:10}]}
function up(x,y){
    return(x.age>y.age)?1:-1;
}
arr.a1.sort(down);

var arr =[1,3,5,7,10]
var arr2 = []
for(var i = 0;i<arr.length-1;i++){
    console.log(arr[i+1] - arr[i]);
    arr2.push(arr[i+1]-arr[i])
}

<script type="text/javascript" th:src="@{http://api.map.baidu.com/api(v=2.0,ak='DE0abf6cf5580f24857faef21a4b3870')}"></script>

var allOverlay = map.getOverlays();
for(var i =0;i<allOverlay.length;i++){
    if(allOverlay[i].toString()=="[object Marker]"){
        if(allOverlay[i].getLabel().content == "123"){
            allOverlay[i].remove()
        }
    }
}
var min = allMin;
//json对象解析
var pointA = {
    "line1":[
        { "x":102.73,
            "y":25.04,
            "date":"2017/01/01 00:00:00"
        },
        {
            "x":104.06,
            "y":30.57,
            "date":"2017/01/03 00:00:00"
        },
        {
            "x":106.23,
            "y":38.48,
            "date":"2017/01/05 00:00:00"
        },
        {
            "x":91.17 ,
            "y":29.65,
            "date":"2017/01/09 00:00:00"
        }
    ],
    "line2":[
        {
            "x":103.73,
            "y":36.03,
            "date":"2017/01/05 00:00:00"
        },
        {
            "x":118.78,
            "y":32.04,
            "date":"2017/01/09 00:00:00"
        },
        {
            "x":108.35,
            "y":30.83,
            "date":"2017/01/13 00:00:00"
        }
    ]
}
for(var key in pointA){
    console.log(key);
    console.log(pointA[key][0].x)
    console.log(pointA[key].length)
}