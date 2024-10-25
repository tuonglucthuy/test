// alert('Hello World');

//     Khai bao bien
// var myFirsVariable = "Hello World";
// alert(myFirsVariable)

//     Hằng
// const pi = 3.14;
// alert(pi);

//     Toán tử
// var soA =10;
// var soB =5;
// var ketQua = 0;

// Phép cộng  :   var ketQua = soA + soB;
// Phép trừ   :   var ketQua = soA - soB;
// Phép nhân  :   var ketQua = soA*soB;
// Phép chia :   var ketQua = soA / soB;

//     Decrement
// ketQua = --soA

//     Phép so sánh
// >  <  !=  ==   >=   <=

// ketQua = soA == 10;
// ketQua = soA > soB ;

//     && : và
// ketQua = (soA !=0) && (soB <10);

//     || : hoặc
// ketQua = (soA !=0) && (soB < 10) || (soA<soB)

//     Kiểu dữ liệu
// String
// var ten ="Đỗ Mạnh Tường";

//     Number
// var tuoi = 20;

//     boolean
// var coOrkhong = false;

//     Đổi dữ liệu
// var year ="2024";
// var ten = ten.replace("Đỗ","Mạnh");

//     Viết thường
// ten = ten.toLowerCase();
//     Viết hoa
// ten = ten.toUpperCase();

// var diaChi ={
//     thanhPho:"Nam Định",
//     huyen :"Xuân Trường",
//     xa :"Xuân Hồng",
// }
// var thongTinSinhVien = {
//     hoVaTen: "Đỗ Mạnh Tường",
//     tuoi :20,
//     gioiTinh :true,
//     diaChi :diaChi
// }

// var namSinh = nam - thongTinSinhVien.tuoi;
// var ketQua = "Tôi tên là :"+thongTinSinhVien.hoVaTen + " , số tuổi của tôi năm nay là:"+thongTinSinhVien.tuoi 
//              +" , tôi sống ở " +thongTinSinhVien.diaChi.thanhPho;

//     typeof(): Kiểm tra dữ liệu
// ketQua = typeof(thongTinSinhVien.hoVaTen)      

// length :Đo độ dài của chuỗi

// toUpperCase() : Viết hoa
// toLowerCase() : Viết thường   

// var ketQua = thongTinSinhVien.hoVaTen.replace("Đỗ Mạnh","Lục Thủy");
// var ketQua = thongTinSinhVien.hoVaTen.length;
// var ketQua = thongTinSinhVien.hoVaTen[2];

// var myString ="Hello world";
// var ketQua = myString.slice(0,3);         //slice(1, 3) sẽ bắt đầu từ chỉ số 1 và kết thúc ngay trước chỉ số 3.
//     Tìm kiếm ký tự trong chuỗi ;
// var ketQua = myString.indexOf('e');       //indexOf() :trả về vị trí xuất hiện đầu tiên của một giá trị trong một chuỗi.
// var ketQua = myString.includes('a');      //includes() :trả về true nếu mảng chứa một phần tử được chỉ định:

// var tuoi = 20;
// var ketQua = `Tôi năm nay ${tuoi} tuổi`;
// var ketQua = thongTinSinhVien.hoVaTen.startsWith("Mạnh");

//     Kiểu number
// Number(num) +1 : ép kiểu
//     Thuộc tính của number

// var num = "123";
// Number(num) + 1 ;

//     Hàm Date()
// Lấy ngày,tháng,năm
//     getFullYear() :Lấy ra năm
//     getMonth() :Lấy ra tháng,tính từ 0
//     getDay() :Lấy ra thứ
//     getDate():Lấy ra ngày trong tháng
// Lấy giờ phút giây
//     .getHours();
//     .getMinutes();
//     .getSeconds();
// So sánh hai đối tượng: < , >


// var ketQua = new Date();
// var ketQua = new Date('2024-09-23');
// var homNay = new Date();
// var homQua = new Date("2024-09-24");
// var ketQua = homNay.getMonth();
// var ketQua = homNay > homQua

//     Mảng(Array)
// indexOf()         :tìm phần tử đầu trong mảng
// lastIndexOf       :tìm phần tử cuối trong mảng
// Array.isArray     :kiểm tra xem có phải mảng không
    
//     Phương thức
// var a , b , c , d;
// a = new Array(1,2,3);
// b= 'JScrip';
// c = new Array(42,"VBScript");
// d = a.concat(b,c);
// var ketQua = d;
// Returns the array [1,2,3,"JScrip",42,"VBscrip"]

// var arr = [1,2,3,4,5,2];
// var ketQua = arr.indexOf(2);
// var ketQua = arr.lastIndexOf(2);
// var ketQua = Array.isArray(arr);

// arr[5] = 1;
// var ketQua = arr.join("");
// var ketQua = arr.pop();
// arr.pop("")            // arr.pop() : Hiện ra phần tử bị xóa của mảng
// arr.unshift("Đầu");    // arr.unshift() : Thêm phần tử vào đầu mảng
// arr.push("Cuối");      // arr.push("")  : THêm phần tử vào cuối mảng
// arr.reverse();         // arr.reverse() : Đảo lại các phần tử của mảng
// var ketQua = arr;

//         if...else....
//     vd 1
// var ketQua = "Chào buổi";
// var thoiGian = new Date().getHours();
// if(thoiGian > 1 && thoiGian >= 6){
//     ketQua = ketQua + " đêm";
// }
// else if(thoiGian > 6 && thoiGian <=12){
//     ketQua = ketQua + " sáng";
// }
// else if(thoiGian > 12 && thoiGian <=18){
//     ketQua = ketQua + " chiều ";
// }
// else{
//     ketQua = ketQua + " tối";
// }
//     vd2
// var ketQua = "Sinh viên năm :";
// var khoa = 67; 

// if(khoa < 66){
//     ketQua = "Đã tốt nghiệp";
// }
// else if(khoa == 66){
//     ketQua = ketQua + "4";
// }
// else if(khoa == 67){
//     ketQua = ketQua + "3";
// }
// else if(khoa == 68){
//     ketQua = ketQua + "2";
// } 
// else if(khoa == 69){
//     ketQua = ketQua + "1";
// } 
// else {
//     ketQua = "Không có khoá học này";
// }

//     Bài tập về nhà !!!
// var ketQua = "Sinh viên sinh năm ";

// var namSinh = 2004;

// if(namSinh <= 2002){
//     ketQua = "Đã tốt nghiệp";
// }
// else if(namSinh == 2003){
//     ketQua = ketQua + "cuối";
// }
// else if(namSinh == 2004){
//     ketQua = ketQua + "3";
// }
// else if(namSinh == 2005){
//     ketQua = ketQua + "2";
// }
// else if(namSinh == 2006){
//     ketQua = ketQua + "nhất";
// }
// else{
//     ketQua = "Năm sinh không phù hợp";
// }

//         Kiểm tra chẵn lẻ
//     Cách 1:
// var so = 2000000000000000000000000000000000000000000000000000000000001;
// var soCuoi = so[so.length-1];
// if (soCuoi%2 == 0 ){
//     ketQua = `Đây là số ${so} là số chẵn`;
// }
// else{
//     ketQua = `Đây là số ${so} là số lẻ`;
// }
//     Cách 2:
// ketQua = 1000n%2n === 0n ? "Số chẵn" : "Số lẻ";

// var soA ,soB , soC;
// var soA = 5;
// var soB = 4;
// var soC = 3;
// var max = soA ;
// if(soB >max){
//     max =soB;
// }
// if(soC > max){
//     max = soC;
// }
// ketQua = max;


//         switch.....case...
// var d = new Date();
// theDay = d.getDay();
// switch(theDay){
//     case 5:
//         document.write("Finally Friday");
//         break;
//     case 6:
//         document.write("Super Sunday");
//         break;
//     case 0:
//         document.write("Sleepy Sunday");
//         break;
//     default:
//         document.write("I'm looking forward to this weekend");
// }

// Tháng 1,3,5,7,8,10,12 có 31 ngày
// Tháng 4,6,9,11 có 30 ngày
// Tháng 2 có 28 ngày

// var t = new Date();
// var theMonth = t.getMonth() + 1;

// switch(theMonth){
//     case 1 :
//     case 3 :
//     case 5 :
//     case 7 :
//     case 8 :
//     case 10 :
//     case 12 :
//         document.write("Tháng "+ theMonth +" có 31 ngày");
//         break;
//     case 4:
//     case 6 :
//     case 9 :
//     case 11:
//         document.write("Tháng "+ theMonth +" có 30 ngày");
//         break;
//     default:
//         document.write("Tháng "+ theMonth +" có 28 ngày");
//         break;
// }

//         for
// var arr = ["A","B","C","D","E","F","G"];
// for(var i =0; i <arr.length;i++ ){
//     document.write("Xin chào " + arr[i] + "<br>");
// }

// var number = [2,3,6,9,13,27];
// var soChan = [];
// var soLe = [];
// for(var i =0 ; i<number.length;i++){
//     if(number[i]%2==0){
//         number[i]=number[i]*2;
//         soChan.push(number[i]);
//     }else{
//         number[i]=number[i]*3;
//         soLe.push(number[i]);
//     }
// }
// document.write("Mảng đầu :"+number +"<br>") 
// document.write("Số chẵn :"+soChan +"<br>");
// document.write("Số lẻ :"+soLe);

// var arr=[true,false,true,false,true,false,true,false,true,false,true]
// var quaMon = 0;
// var camThi = 0;
// for(var i =0;i<arr.length;i++){
//     if(arr[i] == true){
//         quaMon+=1;
//     }else{
//         camThi+=1;
//     }
// }
// document.write("Số người qua môn :"+quaMon +"<br>"+"Số người bị cấm thi :"+camThi)

// var ten = ["Nguyễn Thị Diệu An","Phạm Văn An ","Đỗ Việt Anh ","Lê Công Thái Anh ","Nguyễn Bùi Quang Anh ",
//     "Nguyễn Lê Minh Anh ","Phạm Quốc Bảo ","Hoàng Thị Tân Bình ","Nguyễn Đức Chính ","Bùi Văn Công ","Vũ Thành Công ",
//     "Nguyễn Minh Cường ","Phạm Quốc Cường ","Trần Mạnh Cường ","Phạm Thu Dung ","Trần Mạnh Dũng ","Lê Hoàng Dương ",
//     "Nguyễn Đình Dương ","Trần Ngọc Đại ","Trần Mạnh Đạt ","Đào Bá Đức ","Đặng Văn Đức ","Trần Vĩnh Giáp ","Đặng Cao Hậu ",
//     "Nguyễn Trung Hiếu ","Trần Mỹ Hoa ","Lê Văn Hồ ","Nguyễn Thế Hơn ","Đoàn Văn Hùng ","Nguyễn Thị Huyền ","Nguyễn Văn Kiên ",
//     "Bùi Thế Linh ","Hồ Văn Luân ","Dương Đức Mạnh ","Đậu Bá Mạnh ","Đặng Văn Minh ","Nguyễn Quang Minh ","Vũ Đức Minh ","Tô Hoàng Nam ",
//     "Vũ Thị Kim Ngân © ","Nguyễn Khả Nguyên ","Đinh Duy Nhất ","Trần Thị Yến Nhi ","Bùi Đức Nhương ","Mai Văn Phong ","Phạm Duy Phong ",
//     "Trần Duy Phong ","Nguyễn Huy Phúc ","Nguyễn Như Quỳnh ","Hoàng Minh Thành ","Bùi Trung Thông ","Bùi Việt Tiến ","Nguyễn Đình Trọng ",
//     "Phạm Xuân Trường ","Nguyễn Anh Tú ","Hoàng Công Tuấn ","Đỗ Mạnh Tường ","Nguyễn Thái Vinh ","Nguyễn Thế Vinh ","Nguyễn Đình Vượng ",
//     "Nguyễn Hà Vy "];

// Hiển thị người họ "Nguyễn"
// var hoNguyen =0;
// var dem = 0;
// for(var i= 0;i<ten.length;i++){
//     if(ten[i].startsWith("Nguyễn")){
//         dem++;
//         document.write(dem + ten[i] +"<br>");
//     }
// }

// Hiển thị người không phải họ "Nguyễn"
// var hoNguyen =0;
// var dem = 0;
// for(var i= 0;i<ten.length;i++){
//     if(! ten[i].startsWith("Nguyễn")){
//         dem++;
//         document.write(dem + ten[i] +"<br>");
//     }
// }

//     Tính điểm những người họ Nguyễn
// var danhSach = [
//     {
//         Ten: "Nguyễn Thị Diệu An",
//         monHoc: {
//             java: {
//                 diemA: 10,
//                 diemB: 6,
//                 diemC: 7,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 5,
//                 diemC: 7,
//                 diemChu: ""
//             },
//         },
//     },
//     {
//         Ten: "Phạm Văn An",
//         monHoc: {
//             java: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//         },

//     },
//     {
//         Ten: "Nguyễn Lê Minh Anh",
//         monHoc: {
//             java: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//         },

//     }
// ];
// var diem = 0;
// for (var i = 0;i< danhSach.length; i++){
//     if(danhSach[i].Ten.startsWith("Nguyễn")){
//         var monJava = danhSach[i].monHoc.java;
//         var mondotNet = danhSach[i].monHoc.dotNet;
//         // tính điểm chữ cho môn Java
//         // document.write(danhSach.Ten[i] + "<br>");
//         diem = (monJava.diemA*0.6 + monJava.diemB*0.3 + monJava.diemC*0.1);
//         if(diem <= 10 && diem >= 8.5 ){
//             monJava.diemChu = "A"
//         }
//         else if(diem < 8.5 && diem >= 7){
//             monJava.diemChu = "B"
//         }
//         else if(diem < 7 && diem >= 5.5){
//             monJava.diemChu = "C"
//        }
//         else if(diem < 5.5 && diem >= 4){
//             monJava.diemChu = "D"
//         }
//         else if(diem < 4){
//             monJava.diemChu = "F"
//         }
//         else{
//             monJava.diemChu = "Không có dữ liệu"
//         }
//         // tính điểm chữ cho môn dotNet
//         diem = (mondotNet.diemA*0.6 + mondotNet.diemB*0.3 + mondotNet.diemC*0.1)
//         if(diem <= 10 && diem >= 8.5 ){
//             mondotNet.diemChu = "A"
//         }
//         else if(diem < 8.5 && diem >= 7){
//             mondotNet.diemChu = "B"
//         }
//         else if(diem < 7 && diem >= 5.5){
//             mondotNet.diemChu = "C"
//        }
//         else if(diem < 5.5 && diem >= 4){
//             mondotNet.diemChu = "D"
//         }
//         else if(diem < 4){
//             mondotNet.diemChu = "F"
//         }
//         else{
//             mondotNet.diemChu = "Không có dữ liệu"
//         }
//         document.write(danhSach[i].Ten + "<br>");
//         document.write( "Điểm Java: " + monJava.diemChu + "<br>");
//         document.write( "Điểm DotNet: " + mondotNet.diemChu + "<br>");
//     }
// }

// Dùng function

var danhSach = [
    {
        Ten: "Nguyễn Thị Diệu An",
        monHoc: {
            java: {
                diemA: 10,
                diemB: 6,
                diemC: 7,
                diemChu: ""
            },
            dotNet: {
                diemA: 6,
                diemB: 5,
                diemC: 7,
                diemChu: ""
            },
        },
    },
    {
        Ten: "Phạm Văn An",
        monHoc: {
            java: {
                diemA: 5,
                diemB: 4,
                diemC: 3,
                diemChu: ""
            },
            dotNet: {
                diemA: 6,
                diemB: 7,
                diemC: 8,
                diemChu: ""
            },
        },

    },
    {
        Ten: "Nguyễn Lê Minh Anh",
        monHoc: {
            java: {
                diemA: 6,
                diemB: 7,
                diemC: 8,
                diemChu: ""
            },
            dotNet: {
                diemA: 5,
                diemB: 4,
                diemC: 3,
                diemChu: ""
            },
        },

    }
];

function tinhDiemChu(diemA, diemB, diemC){
    var diemSo = diemA * 0.6 + diemB * 0.3 + diemC * 0.1;
    var diemChu = "";
    if(diemSo >= 8){
        diemChu = "A";
    } 
    else if(diemSo >= 7 && diemSo < 8){
        diemChu = "B";
    }
    else if(diemSo >= 6 && diemSo < 7){
        diemChu = "C";
    }
    else if(diemSo >= 4 && diemSo < 6){
        diemChu = "D";
    }
    else{
        diemChu = "F";
    }
    return  {diemSo: diemSo, diemChu: diemChu};
}

for (var i = 0; i < danhSach.length; i++) {
    if (danhSach[i].Ten.startsWith("Nguyễn")) {
        var monJava = danhSach[i].monHoc.java;
        var monDotNet = danhSach[i].monHoc.dotNet;
        
        // Tính điểm chữ cho người họ "Nguyễn"
        var javaResults = tinhDiemChu(monJava.diemA, monJava.diemB, monJava.diemC);
        var dotNetResults = tinhDiemChu(monDotNet.diemA, monDotNet.diemB, monDotNet.diemC);

        // Gán điểm chữ vào đối tượng
        monJava.diemChu = javaResults.diemChu;
        monDotNet.diemChu = dotNetResults.diemChu;
        
        // In kết quả chỉ cho người họ "Nguyễn"
        document.write(danhSach[i].Ten + "<br>");
        document.write("----------Điểm Java----------"+"<br>Điểm số: " + javaResults.diemSo + ", <br>Điểm chữ: " + monJava.diemChu + "<br>");
        document.write("----------Điểm DotNet----------"+ "<br>Điểm số:" + dotNetResults.diemSo + ",<br> Điểm chữ: " + monDotNet.diemChu + "<br><br><br>");
    }
}


// var so = 10;
// while(so<5){
//     document.write(so);
//     so++;
// }

// do{
//     document.write(so);
//     so++;
// }
// while(so<5)


// POPUP BOXES

// Confirm Box
// -Cú pháp
//  var r = confirm("sometext")
// -Ví dụ
// var r =confirm("Press a button")
// if(r==true){
// document.write("You pressted OK!")
// else{
//    document.write("You ")
// }  
// }

// Prompt Box
// -Cú pháp : prompt("sometext","default value")
// -Ví dụ:
// var r = prompt("Text","type here")
//    document.write(r)
