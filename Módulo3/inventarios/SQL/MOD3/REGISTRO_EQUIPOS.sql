drop table if exists registrar_equipos;

create table registrar_equipos(
codigo_equipo char(3) primary key,
nombre varchar (20) not null
);

insert into registrar_equipos(codigo_equipo,nombre)values
('DEU','Alemania'),
('ARG','Argentina'),
('CHL','Chile'),
('COL','Colombia'),
('ECU','Ecuador'),
('ESP','España');
select * from registrar_equipos