
var k;
var arr=[]

for(var i=1;i<=16;i++){    
    // console.log(i)

    $(".c"+i).click(function(){


        arr.push(this);
            $(this).css("background-color", "red")
        if(arr.length==3){
            // arr.pop();
            var ss = arr.shift();
            console.log("hh")
            $(ss).css("background-color", "blue")
        }      
    })
}


