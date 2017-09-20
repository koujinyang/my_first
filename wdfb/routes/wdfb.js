var express = require('express');
var http = require('http');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('wdfb')
});
/**
 *@describe 获取分局
 * @author 寇金阳
 * @date 2017/9/11
 */
router.get('/getfj',(req,ress)=>{
    function request() {
    return new Promise((resolve,reject)=>{
        const option={
            hostname:'43.240.139.5',
            port:8080,
            path:'/maptagging/v1/branch-offices',
            method:'GET',
            headers:{
                'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
            }
        };
    const  reqs=http.request(option,(res)=>{
        res.setEncoding('utf8');
    const conteneType=res.headers['content-type'];
    let error;
    if(res.statusCode!==200){
        var resMsg=res.statusMessage;
        error =new Error(resMsg);
    }else if(!/^application\/json/.test(conteneType)){
        error=new Error(`请求头类型错误`);
    }
    if(error){
        res.resume();
        reject(error);
    }
    let rawData='';
    res.on('data',(chunk)=>{rawData += chunk});
    res.on('end',()=>{
        try {
            let parseData = JSON.parse(rawData);
    resolve(parseData);
} catch(e) {
        reject(e);
    }
});
});
    reqs.on('error',(e)=>{
        console.error(`请求遇到问题: ${e.message}`);
    throw (error);
});
    reqs.end();
})
}
request().then((e)=>{
    ress.send(e);
})
});
/**
 *@describe  分局下面的派出所个数
 * @author 寇金阳
 * @date 2017/9/11
 */
router.get('/getPcsSl',(req,ress)=>{
    var fjBm=req.query.fjBm;
    function request() {
        return new Promise((resolve, reject) => {
            const option={
                hostname:'43.240.139.5',
                port:8080,
                path:'/maptagging/v1/branch-office/'+fjBm+'/polices',
                method:'GET',
                headers:{
                    'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
                }
            };
            const  reqs=http.request(option,(res)=>{
                res.setEncoding('utf8');
                const conteneType=res.headers['content-type'];
                let error;
                if(res.statusCode!==200){
                    var resMsg=res.statusMessage;
                    error =new Error(resMsg);
                }else if(!/^application\/json/.test(conteneType)){
                    error=new Error(`请求头类型错误`);
                }
                if(error){
                    res.resume();
                    reject(error);
                }
                let rawData='';
                res.on('data',(chunk)=>{rawData += chunk});
                res.on('end',()=>{
                    try {
                        let parseData = JSON.parse(rawData);
                        resolve(parseData);
                    } catch(e) {
                        reject(e);
                    }
                });
            });
            reqs.on('error',(e)=>{
                console.error(`请求遇到问题: ${e.message}`);
                throw (error);
            });
            reqs.end();
        })
    }
    request().then((e)=>{
        ress.send(e);
    })
});
/**
 *@describe 获取网点1-派出所
 * @author 寇金阳
 * @date 2017/9/7
 */
router.get('/getTypeOne',(req,ress)=>{
    function request() {
        return new Promise((resolve,reject)=>{
            const option={
                hostname:'43.240.139.5',
                port:8080,
                path:'/maptagging/v1/wd/positions?type=1',
                method:'GET',
                headers:{
                    'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
                }
            };
            const reqs=http.request(option,(res)=>{
                res.setEncoding('utf8');
                const contentType = res.headers['content-type'];
                let error;
                if(res.statusCode!==200){
                    var resMsg = res.statusMessage;
                    error = new Error(resMsg);
                }else if(!/^application\/json/.test(contentType)){
                    error = new Error(`请求头类型错误`);
                }
                if(error){
                    res.resume();
                    reject(error);
                }
                let rawData = '';
                res.on('data',(chunk)=>rawData += chunk);
                res.on('end',()=>{
                    try {
                        let parseData = JSON.parse(rawData);
                        resolve(parseData);
                    } catch(e) {
                        reject(e);
                    }
                })
            });
            reqs.on('error',(e)=>{
                console.error(`请求遇到问题: ${e.message}`);
                throw (error);
            });
            reqs.end();
        })

    }
    request().then((e)=>{
        ress.send(e);
    })


});
/**
 *@describe 获取两证均能办理的中心站类型2
 * @author 寇金阳
 * @date 2017/9/7
 */
router.get('/getTypeTwo',(req,ress)=>{
    function request() {
        return new Promise((resolve,reject)=>{
            const option={
                hostname:'43.240.139.5',
                port:8080,
                path:'/maptagging/v1/wd/positions?type=2',
                method:'GET',
                headers:{
                    'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
                }
            };
            const reqs=http.request(option,(res)=>{
                res.setEncoding('utf8');
                const contentType = res.headers['content-type'];
                let error;
                if(res.statusCode!==200){
                    var resMsg = res.statusMessage;
                    error = new Error(resMsg);
                }else if(!/^application\/json/.test(contentType)){
                    error = new Error(`请求头类型错误`);
                }
                if(error){
                    res.resume();
                    reject(error);
                }
                let rawData = '';
                res.on('data',(chunk)=>rawData += chunk);
                res.on('end',()=>{
                    try {
                        let parseData = JSON.parse(rawData);
                        resolve(parseData);
                    } catch(e) {
                        reject(e);
                    }
                })
            });
            reqs.on('error',(e)=>{
                console.error(`请求遇到问题: ${e.message}`);
                throw (error);
            });
            reqs.end();
        })

    }
    request().then((e)=>{
        ress.send(e);
    })


});
/**
 *@describe 获取能办理居住证的中心站 类型3
 * @author 寇金阳
 * @date 2017/9/7
 */
router.get('/getTypeThr',(req,ress)=>{
    function request() {
        return new Promise((resolve,reject)=>{
            const option={
                hostname:'43.240.139.5',
                port:8080,
                path:'/maptagging/v1/wd/positions?type=3',
                method:'GET',
                headers:{
                    'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
                }
            };
            const reqs=http.request(option,(res)=>{
                res.setEncoding('utf8');
                const contentType = res.headers['content-type'];
                let error;
                if(res.statusCode!==200){
                    var resMsg = res.statusMessage;
                    error = new Error(resMsg);
                }else if(!/^application\/json/.test(contentType)){
                    error = new Error(`请求头类型错误`);
                }
                if(error){
                    res.resume();
                    reject(error);
                }
                let rawData = '';
                res.on('data',(chunk)=>rawData += chunk);
                res.on('end',()=>{
                    try {
                        let parseData = JSON.parse(rawData);
                        resolve(parseData);
                    } catch(e) {
                        reject(e);
                    }
                })
            });
            reqs.on('error',(e)=>{
                console.error(`请求遇到问题: ${e.message}`);
                throw (error);
            });
            reqs.end();
        })

    }
    request().then((e)=>{
        ress.send(e);
    })


});
/**
 *@describe 获取能办理登记卡的中心站 类型4
 * @author 寇金阳
 * @date 2017/9/7
 */
router.get('/getTypeFour',(req,ress)=>{
    function request() {
        return new Promise((resolve,reject)=>{
            const option={
                hostname:'43.240.139.5',
                port:8080,
                path:'/maptagging/v1/wd/positions?type=4',
                method:'GET',
                headers:{
                    'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
                }
            };
            const reqs=http.request(option,(res)=>{
                res.setEncoding('utf8');
                const contentType = res.headers['content-type'];
                let error;
                if(res.statusCode!==200){
                    var resMsg = res.statusMessage;
                    error = new Error(resMsg);
                }else if(!/^application\/json/.test(contentType)){
                    error = new Error(`请求头类型错误`);
                }
                if(error){
                    res.resume();
                    reject(error);
                }
                let rawData = '';
                res.on('data',(chunk)=>rawData += chunk);
                res.on('end',()=>{
                    try {
                        let parseData = JSON.parse(rawData);
                        resolve(parseData);
                    } catch(e) {
                        reject(e);
                    }
                })
            });
            reqs.on('error',(e)=>{
                console.error(`请求遇到问题: ${e.message}`);
                throw (error);
            });
            reqs.end();
        })

    }
    request().then((e)=>{
        ress.send(e);
    })


});
router.get('/getXxxx',(req,ress)=>{
    function request() {
        return new Promise((resolve,reject)=>{
            var wdbm=req.query.code;
            const option={
                hostname:'43.240.139.5',
                port:8080,
                path:'/maptagging/v1/wd/detail/'+wdbm,
                method:'GET',
                headers:{
                    'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
                }
            };
            const reqs=http.request(option,(res)=>{
                res.setEncoding('utf8');
                const contentType = res.headers['content-type'];
                let error;
                if(res.statusCode!==200){
                    var resMsg = res.statusMessage;
                    error = new Error(resMsg);
                }else if(!/^application\/json/.test(contentType)){
                    error = new Error(`请求头类型错误`);
                }
                if(error){
                    res.resume();
                    reject(error);
                }
                let rawData = '';
                res.on('data',(chunk)=>rawData += chunk);
                res.on('end',()=>{
                    try {
                        let parseData = JSON.parse(rawData);
                        resolve(parseData);
                    } catch(e) {
                        reject(e);
                    }
                })
            });
            reqs.on('error',(e)=>{
                console.error(`请求遇到问题: ${e.message}`);
                throw (error);
            });
            reqs.end();
        })

    }
    request().then((e)=>{
        ress.send(e);
    })
});
/**
 *@describe获取照片信息
 * @author 寇金阳
 * @date 2017/9/8
 */
router.get('/getXp',(req,ress)=>{
    function request() {
        return new Promise((resolve,reject)=>{
            var xpname=req.query.dataPhoto;
            const option={
                hostname:'43.240.139.5',
                port:8080,
                path:'/maptagging/v1/wdimage?name='+xpname,
                method:'GET',
                headers:{
                    'X-Api-Key':'14e1b600b1fd579f47433b88e8d85291'
                }
            };
            const reqs=http.request(option,(res)=>{
                res.setEncoding("binary");
                // res.setHeader("Content-Type", "image/jpeg");
                const contentType = res.headers['content-type'];
                let error;
                if(res.statusCode!==200){
                    var resMsg = res.statusMessage;
                    error = new Error(resMsg);
                }else if(!/^image\/jpg/.test(contentType)){
                    error = new Error(`请求头类型错误`);
                }
                if(error){
                    res.resume();
                    reject(error);
                }
                let rawData = '';
                res.on('data',(chunk)=>rawData += chunk);
                res.on('end',()=>{
                    try {
                        fs.writeFile("../public/images/downImg/"+xpname, rawData, "binary", function(err){
                            if(err){
                                console.log("down fail");
                            }
                            // console.log("down success");
                        });
                        resolve(rawData);
                    } catch(e) {
                        reject(e);
                    }

                })
            });
            reqs.on('error',(e)=>{
                console.error(`请求遇到问题: ${e.message}`);
                throw (error);
            });
            reqs.end();
        })

    }
    request().then((e)=>{
        ress.send("111");
    })
});
module.exports = router;