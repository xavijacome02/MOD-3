drop table if exists cabecera_venta;
create table cabecera_venta(
codigo serial primary key,
fecha timestamp without time zone not null,
total_sin_iva money not null,
iva int not null,
total_con_iva money not null
);
insert into cabecera_venta(fecha,total_sin_iva,iva,total_con_iva)values
('20/11/2023 20:00',3.26,0.39,3.65);
select * from cabecera_venta;