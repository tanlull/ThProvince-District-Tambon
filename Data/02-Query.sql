select * from Province where ProvinceThai like 'พัทลุง';

select * from District  where ProvinceID = 93;

select * from Tambon  where districtID = 9310;

select * from Postal where TambonID  = 931001;


# Get  district  from province 
select d.DistrictThaiShort 
from Province p,District d
where p.ProvinceThai  like 'พัทลุง'
and p.ProvinceID  =d.ProvinceID ;


# Get Tambon from district
select t.TambonThaiShort 
from Province p,District d,Tambon t
where p.ProvinceThai  like 'พัทลุง'
and p.ProvinceID  =d.ProvinceID 
and d.DistrictID =t.DistrictID
and d.DistrictThaiShort = 'ป่าพะยอม'


# Get Postal from district
select post.PostCode 
from Province p,District d,Tambon t,Postal post
where p.ProvinceThai  like 'พัทลุง'
and p.ProvinceID  =d.ProvinceID 
and d.DistrictID =t.DistrictID
and d.DistrictThaiShort = 'ป่าพะยอม'
and t.TambonID = post.TambonID 
and t.TambonThaiShort = 'บ้านพร้าว'