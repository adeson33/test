//client客户端（http : //192.168.1.10:8080)

var XMLHttpRequest = require('xhr2');

function xhrRequest(){
    //创建xhr对象

    const xhr = new XMLHttpRequest();

    //catch the request status by onreadystate change event
    
    //must specify this event before open
    //otherwise can't receive readyState 0 and 1

    xhr.onreadystatechange = () =>
    {
        console.log(xhr.status);

        console.log(xhr.readyState);
    }

    //捕获错误
    xhr.onerror = err =>{
        console.log('error:', err);
    }

    //init request
    xhr.open('GET' , "http://192.168.1.10:7701/config", true);

    //发送请求
    xhr.send(null);
}

xhrRequest();