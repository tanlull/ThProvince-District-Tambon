create table province(
ProvinceID INT ,
ProvinceThai VARCHAR(200) NOT NULL,
ProvinceEng VARCHAR(200) NOT NULL,
Region VARCHAR(200) NOT NULL,  
PRIMARY KEY (ProvinceID)
); 
INSERT INTO ProvinceDB.province (ProvinceID,ProvinceThai,ProvinceEng,Region) VALUES
	 (10,'กรุงเทพมหานคร','Bangkok','ภาคกลาง'), 
	 (11,'สมุทรปราการ','Samut Prakan','ภาคกลาง'),
	 (12,'นนทบุรี','Nonthaburi','ภาคกลาง'),
	 (13,'ปทุมธานี','Pathum Thani','ภาคกลาง'),
	 (14,'พระนครศรีอยุธยา','Phra Nakhon Si Ayutthaya','ภาคกลาง');