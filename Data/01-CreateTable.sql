create table Province(
ProvinceID INT ,
ProvinceThai VARCHAR(200) NOT NULL,
ProvinceEng VARCHAR(200) NOT NULL,
Region VARCHAR(200) NOT NULL,
PRIMARY KEY (ProvinceID)
);

create table District(
ProvinceID INT,
DistrictID INT,
DistrictThaiShort VARCHAR(200) NOT NULL,
DistrictEngShort VARCHAR(200) NOT NULL,
DistrictCNT INT,
PRIMARY KEY (DistrictID),
FOREIGN KEY (ProvinceID) REFERENCES Province(ProvinceID)
);

create table Tambon(
DistrictID INT,
TambonID INT,
TambonThaiShort  VARCHAR(200) NOT NULL,
TambonEngShort  VARCHAR(200) NOT NULL,
PRIMARY KEY (TambonID),
FOREIGN KEY (DistrictID) REFERENCES District(DistrictID)
);


create table  Postal (
  TambonID int DEFAULT NULL,
  PostCode int DEFAULT NULL,
  TambonThaiShort varchar(200) NOT NULL,
  DistrictThaiShort varchar(200) NOT NULL,
  ProvinceThai varchar(200) NOT NULL,
  Region varchar(200) NOT NULL,
  INDEX (TambonID) ,
  FOREIGN KEY (TambonID) REFERENCES Tambon (TambonID)
);