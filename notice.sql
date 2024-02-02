CREATE TABLE "intro" (
  "id" SERIAL PRIMARY KEY,
  "title" "char (20)",
  "txt" varchar(4095)
);

CREATE TABLE "question" (
  "id" SERIAL PRIMARY KEY,
  "question" varchar(1023),
  "writer" varchar(31),
  "division" varchar(31)
);

CREATE TABLE "answer" (
  "id" SERIAL PRIMARY KEY,
  "questionid" int,
  "answer" varchar(1023),
  "writer" varchar(31)
);

CREATE TABLE "Board" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar(31),
  "bodytext" varchar(4095),
  "writer" varchar(31),
  "division" varchar(31),
  "createdate" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

ALTER TABLE "answer" ADD FOREIGN KEY ("questionid") REFERENCES "question" ("id");
