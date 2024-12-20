drop table if exists proveedores;
create table proveedores(
identificador varchar(13) primary key,
tipo_documento char(1) not null,
nombre varchar(100) not null,
telefono varchar(10) not null,
correo varchar(100) not null,
direccion varchar(100) not null,
foreign key (tipo_documento) references tipo_documento(codigo)
);
insert into proveedores(identificador,tipo_documento,nombre,telefono,correo,direccion)values
('1792285747','C','Santiago Mosquera','0992920306','zantycb89@gmail.com','Cumbayork'),
('1792285747001','R','Snack SA','0992920398','sanck@gmail.com','La Tola');
select * from proveedores;
