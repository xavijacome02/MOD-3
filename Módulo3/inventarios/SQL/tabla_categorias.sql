drop table if exists categorias;
create table categorias(
codigo_cat serial not null primary key,
nombre varchar(100) not null,
categoria_padre int,
foreign key (categoria_padre) references categorias (codigo_cat)
);
insert into categorias (nombre,categoria_padre)values
('Materia Prima',null),
('Proteinas',1),
('Salsas',1),
('Punto de Venta', null),
('Bebidas',4),
('Con Alcohol',5),
('Sin Alcohol',5);

select * from categorias;
