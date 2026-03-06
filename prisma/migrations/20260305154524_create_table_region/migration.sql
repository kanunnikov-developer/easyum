-- CreateTable
CREATE TABLE "regions" (
    "id" TEXT NOT NULL,
    "subdomain" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "preposutional" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "metro" TEXT NOT NULL,
    "map" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "regions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "regions_subdomain_key" ON "regions"("subdomain");
