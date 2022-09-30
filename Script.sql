create database FoodPanda;
use FoodPanda;

create table dishes(
id int auto_increment primary key,
name varchar(50),
cuisine varchar(50)
);

insert into dishes(name,cuisine) values ('Noodles','Chinese'),('Momos','Chinese'),('Pizza','Continental'),('Sushi','Japanese'),('Butter Chicken','Indian'),
('Chicken Burger','Continental'),('Soya Chaap','Indian');

create table cook(
id int auto_increment primary key,
name varchar(50),
speciality varchar(50)
);

insert into cook(name,speciality) values('Gaurav','Indian'),('Manav','Chinese'),('Karan','Continental'),('Rashmi','Japanese');


select dishes.name,cook.name from dishes inner join cook on dishes.cuisine  = cook.speciality ;

alter table dishes rename column name to dish_name;
alter table cook rename column name to cook_name;


select dishes.dish_name,cook.cook_name from dishes inner join cook on dishes.cuisine  = cook.speciality ;

create table orders(
order_id int auto_increment primary key,
order_time timestamp default NOW(),
dish_ordered varchar(20),
ordered_by varchar(30)
);

select dishes.dish_name,cook.cook_name from dishes inner join cook on dishes.cuisine  = cook.speciality ;





