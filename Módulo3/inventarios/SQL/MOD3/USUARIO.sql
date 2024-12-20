drop table if exists usuario;
create table usuario(
cedula char(10) primary key,
nombre varchar(20) not null,
apellido varchar(20) not null
);

insert into usuario(cedula,nombre,apellido) values
('0954841441','Edison','Jacome'),
('0916621923','Aida','Hidalgo'),
('1203116122','Dayana','Garcia');


select * from usuario
