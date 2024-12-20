drop table if exists detalle_venta;
create table detalle_venta(
codigo serial primary key,
cabecera_Venta int not null,
producto int not null,
cantidad int not null,
precio_venta money not null,
subtotal money not null,
subtotal_iva money not null,
foreign key (cabecera_Venta) references cabecera_venta(codigo),
foreign key (producto) references productos(codigo)
);
insert into detalle_venta(cabecera_Venta,producto,cantidad,precio_venta,subtotal,subtotal_iva)values
(1,1,5,0.58,2.9,3.25),
(1,4,1,0.36,0.36,0.4);
select * from detalle_venta