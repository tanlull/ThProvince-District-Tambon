select * from province where ProvinceThai like 'พัทลุง';

select * from district  where ProvinceID = 93;

select * from tambon  where districtID = 9310;

select * from postal where TambonID  = 931001;


# Get  district  from province 
select d.DistrictThaiShort 
from province p,district d
where p.ProvinceThai  like 'พัทลุง'
and p.ProvinceID  =d.ProvinceID ;


# Get Tambon from district
select t.TambonThaiShort 
from district d,tambon t
where d.districtthaishort = 'ป่าพะยอม'
and d.DistrictID =t.DistrictID;

# Get Postal from district
select t.TambonThaiShort 
from district d,tambon t
where d.districtthaishort = 'ป่าพะยอม'
and d.DistrictID =t.DistrictID;