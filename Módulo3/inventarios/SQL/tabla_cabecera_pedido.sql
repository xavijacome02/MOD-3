drop table if exists cabecera_pedido;
create table cabecera_pedido(
numero serial primary key,
proveedor varchar(13) not null,
fecha timestamp without time zone not null,
estado char(1) not null,
foreign key (proveedor) references proveedores(identificador),
foreign key(estado)references estados_pedidos(codigo)
);
insert into cabecera_pedido(proveedor,fecha,estado)values
('1792285747','20/11/2023','R'),
('1792285747001','20/11/2023','R');
select * from cabecera_pedido;
