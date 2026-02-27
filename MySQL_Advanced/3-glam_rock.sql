-- script to list all databses
SELECT name AS band_name, 
IFNULL(split, 2024) - formed AS lifespan
FROM bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;