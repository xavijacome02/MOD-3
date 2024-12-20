drop table if exists productos;

create table productos(
codigo serial not null primary key,
nombre varchar(100) not null,
udm varchar(3) not null,
precio_venta money not null,
tiene_IVA boolean not null,
coste money not null,
categoria int not null,
stock int not null,
foreign key (udm) references unidades_medida(nombre),
foreign key (categoria) references categorias(codigo_cat)
);

insert into productos(nombre,udm,precio_venta,tiene_IVA,coste,categoria,stock)values
('Coca cola pequeña','u',0.5804,true,0.3729,7,105),
('Salsa de tomate','kg',0.95,true,0.8736,3,0),
('Mostaza','kg',0.95,true,0.89,3,0),
('Fuze Tea','u',0.8,true,0.7,7,49);

select * from productos;