CREATE TABLE "public"."player_role"("player_id" uuid NOT NULL, "role" text NOT NULL, "rank" integer NOT NULL, PRIMARY KEY ("player_id","role") , FOREIGN KEY ("player_id") REFERENCES "public"."player"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("role") REFERENCES "public"."PlayerRole"("role") ON UPDATE restrict ON DELETE restrict);
