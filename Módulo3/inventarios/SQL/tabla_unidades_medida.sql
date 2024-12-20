drop table if exists unidades_medida;
create table unidades_medida(
codigo serial not null primary key,
nombre varchar(3) not null unique,
descripcion varchar(100) not null,
categoria_udm char(1) not null,
foreign key(categoria_udm) references categorias_unidad_medidas(codigo)
);
insert into unidades_medida(nombre,descripcion,categoria_udm)values
('ml','mililitros','V'),
('l','litros','V'),
('u','unidad','U'),
('d','docena','U'),
('g','gramos','P'),
('kg','kilogramos','P'),
('lb','libras','P');
select * from unidades_medida;