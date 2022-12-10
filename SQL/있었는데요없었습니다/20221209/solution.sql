SELECT ins.animal_id, ins.name 
FROM animal_ins ins JOIN animal_outs outs
WHERE ins.animal_id = outs.animal_id
AND ins.datetime > outs.datetime
ORDER BY ins.datetime;
