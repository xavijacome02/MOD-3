drop table if exists partidos_competencia;

create table partidos_competencia(
codigo_partido serial primary key,
equipo_1 char(3) not null,
equipo_2 char(3) not null,
fecha timestamp not null,
foreign key (equipo_1) references registrar_equipos(codigo_equipo),
foreign key (equipo_2) references registrar_equipos(codigo_equipo)
);

insert into partidos_competencia (equipo_1,equipo_2,fecha)values
('ECU','ARG','2024-09-28 14:30:00'),
('ESP','ECU','2023-09-20 13:30:00'),
('CHL','COL','2024-12-12 12:00:00');

select * from partidos_competencia;

select codigo_partido, equipo_1,equipo_2 from partidos_competencia 
where date(fecha)='2024-09-28'