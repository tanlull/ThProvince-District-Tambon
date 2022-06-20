# To Run
```
docker-compose up
```

# API Usage

### Define username /password in config.js 
file : config.js 
```
auth:{
    secretKey:"MySecretKeyOfNT",
    username: "nt",
    password: "ntntnt",

  }
```

# Login with 
Method Post : http://localhost:3000/login

json Body:
```
{
    "username":"nt",
    "password":"ntntnt"
}
```
Return Message :
```{
    "message": "ok",
    "authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudCIsImlhdCI6MTY1NTcxOTU0MTE1M30.SuK9uumbvGr2PRD_vgRNOngvHj8NoRNlG4GjCY7yF4w"
}```

### Get All Provinces in Thailand
Method Get : http://localhost:3000/provinces
Header :  
```
     authorization = <authorization code from login>
```
Return : 
```
{"data":[{"province":"กระบี่"},{"province":"กรุงเทพมหานคร"},{"province":"กาญจนบุรี"},{"province":"กาฬสินธุ์"},{"province":"กำแพงเพชร"},{"province":"ขอนแก่น"},{"province":"จันทบุรี"},{"province":"ฉะเชิงเทรา"},{"province":"ชลบุรี"},{"province":"ชัยนาท"},{"province":"ชัยภูมิ"},{"province":"ชุมพร"},{"province":"ตรัง"},{"province":"ตราด"},{"province":"ตาก"},{"province":"นครนายก"},{"province":"นครปฐม"},{"province":"นครพนม"},{"province":"นครราชสีมา"},{"province":"นครศรีธรรมราช"},{"province":"นครสวรรค์"},{"province":"นนทบุรี"},{"province":"นราธิวาส"},{"province":"น่าน"},{"province":"บึงกาฬ"},{"province":"บุรีรัมย์"},{"province":"ปทุมธานี"},{"province":"ประจวบคีรีขันธ์"},{"province":"ปราจีนบุรี"},{"province":"ปัตตานี"},{"province":"พระนครศรีอยุธยา"},{"province":"พะเยา"},{"province":"พังงา"},{"province":"พัทลุง"},{"province":"พิจิตร"},{"province":"พิษณุโลก"},{"province":"ภูเก็ต"},{"province":"มหาสารคาม"},{"province":"มุกดาหาร"},{"province":"ยะลา"},{"province":"ยโสธร"},{"province":"ร้อยเอ็ด"},{"province":"ระนอง"},{"province":"ระยอง"},{"province":"ราชบุรี"},{"province":"ลพบุรี"},{"province":"ลำปาง"},{"province":"ลำพูน"},{"province":"ศรีสะเกษ"},{"province":"สกลนคร"},{"province":"สงขลา"},{"province":"สตูล"},{"province":"สมุทรปราการ"},{"province":"สมุทรสงคราม"},{"province":"สมุทรสาคร"},{"province":"สระบุรี"},{"province":"สระแก้ว"},{"province":"สิงห์บุรี"},{"province":"สุพรรณบุรี"},{"province":"สุราษฎร์ธานี"},{"province":"สุรินทร์"},{"province":"สุโขทัย"},{"province":"หนองคาย"},{"province":"หนองบัวลำภู"},{"province":"อ่างทอง"},{"province":"อำนาจเจริญ"},{"province":"อุดรธานี"},{"province":"อุตรดิตถ์"},{"province":"อุทัยธานี"},{"province":"อุบลราชธานี"},{"province":"เชียงราย"},{"province":"เชียงใหม่"},{"province":"เพชรบุรี"},{"province":"เพชรบูรณ์"},{"province":"เลย"},{"province":"แพร่"},{"province":"แม่ฮ่องสอน"}],"meta":{"page":1}}
```

### Get District by specific Province
usage:  http://localhost:3000/provinces/<province_name>/district

example : http://localhost:3000/provinces/พัทลุง/district

Return : 
```
{"data":["กงหรา","ควนขนุน","ตะโหมด","บางแก้ว","ปากพะยูน","ป่าบอน","ป่าพะยอม","ศรีนครินทร์","ศรีบรรพต","เขาชัยสน","เมืองพัทลุง"],"meta":{"page":1}}
```

### Get Tambon by from District and Province
usage:  http://localhost:3000/provinces/<province_name>/district/<district_name>

Example : http://localhost:3000/provinces/พัทลุง/district/ป่าพะยอม

<pre><code>{"data":["บ้านพร้าว","ป่าพะยอม","ลานข่อย","เกาะเต่า"],"meta":{"page":1}}</code></pre>

### Database connection 
edit file = "config.js"

### Initial Data Province District Tumbon in MySQL
sql  file = "create_provincedb.sql"

#### Credit : 
1. Province District Tumbon Data from : https://github.com/ThepExcel/download/raw/master/ThepExcel-Thailand-Tambon.xlsx
2. Node Tutorial from from : https://blog.logrocket.com/build-rest-api-node-express-mysql/
3. API : 

https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces

https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/พัทลุง/district

https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/พัทลุง/district/ป่าพะยอม
