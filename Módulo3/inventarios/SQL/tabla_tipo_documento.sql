drop table if exists tipo_documento;
create table tipo_documento(
codigo char(1) primary key,
descripcion varchar(100) not null
);
insert into tipo_documento (codigo,descripcion)values
('C','Cedula'),
('R','RUC');
SELECT * FROM tipo_documento;