DROP DATABASE IF EXISTS cms;
CREATE DATABASE cms;

use cms;

create table department (
    id int auto_increment,
    name varchar(30), primary key(id)
);

create table role (
    id int not null auto_increment,
    title varchar(30),
    salary decimal (6,2),
    department_id int,
    primary key(id),
    foreign key(department_id) references department(id)
);

create table employee (
    id int auto_increment,
    first_name varchar(30),
    last_name varchar(30),
    role_id int null,
    primary key(id),


)