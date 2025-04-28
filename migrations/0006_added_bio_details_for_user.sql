-- AlterTable
ALTER TABLE "User" ADD COLUMN "bio" TEXT;
ALTER TABLE "User" ADD COLUMN "bluesky" TEXT;
ALTER TABLE "User" ADD COLUMN "facebook" TEXT;
ALTER TABLE "User" ADD COLUMN "instagram" TEXT;
ALTER TABLE "User" ADD COLUMN "linkedin" TEXT;
ALTER TABLE "User" ADD COLUMN "threads" TEXT;
ALTER TABLE "User" ADD COLUMN "tiktok" TEXT;
ALTER TABLE "User" ADD COLUMN "twitter" TEXT;
ALTER TABLE "User" ADD COLUMN "youtube" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
PRAGMA foreign_keys=on;
