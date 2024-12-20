drop table if exists historial_stock;
create table historial_stock(
codigo serial primary key,
fecha timestamp without time zone not null,
referencia varchar(100) not null,
producto int not null,
cantidad int not null,
foreign key (producto) references productos(codigo)
);
insert into historial_stock(fecha,referencia,producto,cantidad)values
('20/11/2023 19:59','PEDIDO 1',1,100),
('20/11/2023 19:59','PEDIDO 1',4,50),
('20/11/2023 20:00','PEDIDO 2',1,10),
('20/11/2023 20:00','VENTA 1',1,-5),
('20/11/2023 20:00','VENTA 1',4,1);
select * from historial_stock;