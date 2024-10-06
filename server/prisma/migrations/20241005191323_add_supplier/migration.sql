/*
  Warnings:

  - You are about to drop the `Label` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductLabels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProductLabels" DROP CONSTRAINT "_ProductLabels_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductLabels" DROP CONSTRAINT "_ProductLabels_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "supplierId" INTEGER;

-- DropTable
DROP TABLE "Label";

-- DropTable
DROP TABLE "_ProductLabels";

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_name_key" ON "Supplier"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;
