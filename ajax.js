// 封装的 ajax 方法
function ajax(options) {
    var xhr = null;
    var params = formsParams(options.data);
    // 创建对象
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 连接
    if (options.type == "GET") {
        xhr.open(options.type, options.url + "?" + params, options.async);
        xhr.send(null)
    } else if (options.type == "POST") {
        xhr.open(options.type, options.url, options.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            options.success(xhr.responseText);
        }
    }
    function formsParams(data) {
        var arr = [];
        for (var prop in data) {
            arr.push(prop + "=" + data[prop]);
        }
        return arr.join("&");
    }

}
