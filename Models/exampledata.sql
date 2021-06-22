--  psql --file=Models/exampledata.sql TennisBudsDatabase
TRUNCATE TABLE "Players";
INSERT INTO "Players" ("Name", "Email", "Telephone", "Court", "Zip", "Rating") VALUES ('Alex Andre', 'aaa@gmail.com', '111-111-1111', 'Fossil Park', 33710, 4.0);
INSERT INTO "Players" ("Name", "Email", "Telephone", "Court", "Zip", "Rating") VALUES ('Betty Benson', 'bbb@gmail.com', '222-222-2222', 'Lazarillo Park', 33711, 3.0);
INSERT INTO "Players" ("Name", "Email", "Telephone", "Court", "Zip", "Rating") VALUES ('Carl Clark', 'ccc@gmail.com', '333-333-3333', 'Fossil Park', 33712, 5.0);
INSERT INTO "Players" ("Name", "Email", "Telephone", "Court", "Zip", "Rating") VALUES ('Dennis Dent', 'ddd@gmail.com', '444-444-4444', 'Lakeside Parl', 33713, 3.5);


INSERT INTO "Challenges" ("PlayerId", "CreatedAt", "Match", "Format", "Date", "Time", "Court") VALUES (1, '2020-01-01 14:23:55', '3 Sets of 6', 'Doubles', '2021-07-01', '7:00', 'Fossil Park');
INSERT INTO "Challenges" ("PlayerId", "CreatedAt", "Match", "Format", "Date", "Time", "Court") VALUES (1, '2020-01-01 18:00:00', '5 Sets of 6', 'Singles', '2021-08-01', '18:00', 'Lakeside Park');