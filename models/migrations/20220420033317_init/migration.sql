-- CreateTable
CREATE TABLE "user_game" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_game_biodata" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "about" TEXT NOT NULL,

    CONSTRAINT "user_game_biodata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_game_history" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "game" VARCHAR(255) NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "user_game_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_game_username_key" ON "user_game"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_game_email_key" ON "user_game"("email");

-- AddForeignKey
ALTER TABLE "user_game_biodata" ADD CONSTRAINT "user_game_biodata_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_game"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_game_history" ADD CONSTRAINT "user_game_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_game"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
