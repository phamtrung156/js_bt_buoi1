// Bài 1: tính tiền lương nhân viên 
// viết chương trình tính tiền lương nhân viên 
// lương 1 ngày : 100 . 000
// số ngày làm là : 29
// Công thức tính lương : lương 1 ngày * số ngày làm

var luongNgay = 100000;
var ngayCong = 29;

var luongThang = (luongNgay * ngayCong) ;

console.log("Lương của nhân viên trong tháng là : " + luongThang + " VNĐ");

// // Bài 2 : tính giá trị trung bình 
// viết chương trình nhập vào 5 số thực 
// Tính giá trị trung bình của 5  số này và xuất ra màn hình
// gợi ý : giá trị trung bình là tổng 5 số người dùng nhập chia cho 5

var a = 10;
var b = 4;
var c = 5;
var d = 6;
var e = 7;

var trungBinh = ((a + b + c + d + e) / 5);

console.log("Giá trị trung bình của 5 số thực là : " + trungBinh);

// Bài 3 : quy đổi tiền
// giá USD hiện nay là 23.500
// viết chương trình quy đổi từ usd sang vnd
// người dùng nhập vào 40$. 

var giaUsd = 23500;
var usd = 40;

var quyDoiVND = (giaUsd * usd );

console.log("Số tiền VND bạn đổi được là : " + quyDoiVND + " VND" );

// Bài 4 : tính tổng 2 ký số: 
// viết chương tình tính kí số 
// N = 499393
// tính tông 2 ký số. 4 + 9 + 9 + …….. =.  ?

var n = 499393;
var tramNgan = Math.floor(n / 100000);
var chucNgan = Math.floor(n % 100000 / 10000);
var hangNgan = Math.floor(n % 10000 / 1000 );
var hangTram = Math.floor(n % 1000 / 100);
var hangChuc = Math.floor(n % 100 / 10);
var hangDonVi = (n % 10);

var sum = (tramNgan + chucNgan +hangNgan + hangTram + hangChuc + hangDonVi);

console.log("tổng 2 ký số là : " + sum)
