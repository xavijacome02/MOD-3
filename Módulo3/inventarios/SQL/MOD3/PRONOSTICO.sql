drop table if exists pronostico;
create table pronostico(
codigo_pronostico serial primary key,
usuario char(10) not null,
partido int not null,
marcador_1 int not null,
marcador_2 int not null,
foreign key (usuario) references usuario(cedula),
foreign key (partido) references partidos_competencia(codigo_partido)
);

insert into pronostico (usuario,partido,marcador_1,marcador_2)values
('0954841441',2,2,1),
('1203116122',1,1,0);
select * from pronostico

select marcador_1,marcador_2 from pronostico 
where usuario='0954841441'

select usuario, marcador_1,marcador_2 from pronostico
where partido=1