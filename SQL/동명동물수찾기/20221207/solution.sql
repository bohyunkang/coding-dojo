SELECT name, COUNT(name) AS count
FROM animal_ins
GROUP BY NAME
HAVING name IS NOT NULL AND COUNT(name) > 1
ORDER BY name;
