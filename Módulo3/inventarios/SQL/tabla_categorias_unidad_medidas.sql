drop table if exists categorias_unidad_medidas;

create table categorias_unidad_medidas(
codigo char(1) not null primary key,
nombre varchar(100) not null
);

insert into categorias_unidad_medidas(codigo,nombre)values
('U','Unidades'),
('V','Volumen'),
('P','Peso');
select * from categorias_unidad_medidas;