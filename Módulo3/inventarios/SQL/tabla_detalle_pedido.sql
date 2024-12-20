drop table if exists detalle_pedido;
create table detalle_pedido(
codigo serial primary key,
cabecera_pedido int not null,
producto int not null,
cantidad_solicitada int not null,
subtotal money not null,
cantidad_recibida int not null,
foreign key (cabecera_pedido) references cabecera_pedido(numero),
foreign key (producto) references productos(codigo)
);
insert into detalle_pedido(cabecera_pedido,producto,cantidad_solicitada,subtotal,cantidad_recibida)values
(1,1,100,37.29,100),
(1,4,50,11.8,50),
(2,1,10,3.73,10);
select * from detalle_pedido;