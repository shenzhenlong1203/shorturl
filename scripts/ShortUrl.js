var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function short(url) {
    var key = 'shenzhenlong';
    md5.update(key + url);
    var urlHash = md5.digest('hex');
    var len = urlHash.length;
    var short_url_list = new Array();
    for (var i = 0; i < 4; i++) {
        var urlHash_piece = urlHash.substr(i*len/4, len/4);
        var hex = parseInt(urlHash_piece, 16) & 0x3fffffff;

        var short_url = "http://t.cn/";

        for (var j = 0; j < 6; j++) {
            short_url += charset[hex & 0x0000003d];
            hex = hex >> 5;
        }

        short_url_list.push(short_url);
    }
  return short_url_list;
}

var url = "http://www.cnblogs.com/zemliu/";
var res = short(url);
console.log(res);