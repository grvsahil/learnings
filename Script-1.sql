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

alter table dishes rename column name to dish_name;

alter table cook rename column name to cook_name;

select dishes.dish_name,cook.cook_name from dishes inner join cook on dishes.cuisine  = cook.speciality ;

select * from dishes left join cook on dishes.cuisine  = cook.speciality ;

select * from dishes right join cook on dishes.cuisine  = cook.speciality ;


create table orders(
order_id int primary key,
order_time timestamp default NOW(),
dish_ordered varchar(20)
);

insert into orders(order_id,dish_ordered) values(1,'Noodles'),(2,'Butter Chicken'),(3,'Pizza');

create table customers(cust_id int auto_increment primary key, cust_name varchar(30), order_placed int, FOREIGN KEY (order_placed) REFERENCES orders  (order_id)   );

insert into customers(cust_name,order_placed) values ('Anil Ambani',1),('Anil Ambani',2),('Anil Ambani',3),('Suresh Raina',2),('Tim Jordan',3);



SELECT * from orders

select * from orders inner join customers on orders.order_id = customers.order_placed ;

select customers.cust_name,customers.order_placed,orders.order_time from orders inner join customers on orders.order_id = customers.order_placed order by cust_name ;

select * from orders right join customers on orders.order_id = customers.order_placed;
