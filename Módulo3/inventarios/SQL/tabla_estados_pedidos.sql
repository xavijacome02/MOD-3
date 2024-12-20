drop table if exists estados_pedidos;
create table estados_pedidos(
codigo char(1) primary key,
descripcion varchar(100) not null
);
insert into estados_pedidos(codigo,descripcion) values
('S','Solicitado'),
('R','Recibido');
select * from estados_pedidos