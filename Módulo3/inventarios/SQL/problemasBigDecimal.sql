select p.codigo as codigo_prod,p.nombre as nombre_producto,um.nombre as nombre_udm, 
um.descripcion as descripcion_udm, 
cast(p.precio_venta as decimal(6,2)),p.tiene_iva, cast(p.coste as decimal(5,4)),p.categoria,c.nombre as nombre_categoria,p.stock
from productos p, unidades_medida um, categorias c 
where p.udm=um.nombre 
and p.categoria=c.codigo_cat 
and upper(p.nombre) like '%M%'