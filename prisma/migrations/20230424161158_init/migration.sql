-- CreateTable
CREATE TABLE "restaurants" (
    "id_restaurant" TEXT NOT NULL,
    "restaurant_path" TEXT NOT NULL,
    "restaurant_name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "main_photo" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "number_of_sales" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id_restaurant")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "document_number" TEXT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,
    "contact_email" BOOLEAN NOT NULL,
    "contact_sms" BOOLEAN NOT NULL,
    "contact_wpp" BOOLEAN NOT NULL,
    "user_role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "restaurantsId_restaurant" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "cuisine_categories" (
    "id_cuisine_category" TEXT NOT NULL,
    "cuisine_category" TEXT NOT NULL,
    "cuisine_photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cuisine_categories_pkey" PRIMARY KEY ("id_cuisine_category")
);

-- CreateTable
CREATE TABLE "cuisines_per_restaurant" (
    "id_cuisine_per_restaurant" TEXT NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "cuisine_category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cuisines_per_restaurant_pkey" PRIMARY KEY ("id_cuisine_per_restaurant")
);

-- CreateTable
CREATE TABLE "restaurant_photos" (
    "id_restaurant_photo" TEXT NOT NULL,
    "photo_link" TEXT NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restaurant_photos_pkey" PRIMARY KEY ("id_restaurant_photo")
);

-- CreateTable
CREATE TABLE "dishes" (
    "id_dish" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "dishes_categoriesId_dishes_category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "dishes_pkey" PRIMARY KEY ("id_dish")
);

-- CreateTable
CREATE TABLE "dishes_categories" (
    "id_dishes_category" TEXT NOT NULL,
    "dishes_category" TEXT NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "dishes_categories_pkey" PRIMARY KEY ("id_dishes_category")
);

-- CreateTable
CREATE TABLE "facilities_per_venue" (
    "id_facility_per_venue" TEXT NOT NULL,
    "facility" TEXT NOT NULL,
    "restaurant_venuesId_restaurant_venue" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facilities_per_venue_pkey" PRIMARY KEY ("id_facility_per_venue")
);

-- CreateTable
CREATE TABLE "facilities" (
    "id_facility" TEXT NOT NULL,
    "facility_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "facilities_pkey" PRIMARY KEY ("id_facility")
);

-- CreateTable
CREATE TABLE "restaurant_venues" (
    "id_restaurant_venue" TEXT NOT NULL,
    "name_venue" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "venue_photo" TEXT NOT NULL,
    "phone_number" TEXT,
    "open_hour" TEXT NOT NULL,
    "close_hour" TEXT NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restaurant_venues_pkey" PRIMARY KEY ("id_restaurant_venue")
);

-- CreateTable
CREATE TABLE "reservations" (
    "id_reservation" TEXT NOT NULL,
    "date_hour" TIMESTAMP(3) NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "restaurant_venuesId_restaurant_venue" TEXT NOT NULL,
    "usersUser_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id_reservation")
);

-- CreateTable
CREATE TABLE "user_phone_numbers" (
    "id_user_phone_number" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "usersUser_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_phone_numbers_pkey" PRIMARY KEY ("id_user_phone_number")
);

-- CreateTable
CREATE TABLE "user_addresses" (
    "id_address" TEXT NOT NULL,
    "address_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "usersUser_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_addresses_pkey" PRIMARY KEY ("id_address")
);

-- CreateTable
CREATE TABLE "orders" (
    "id_order" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "usersUser_id" TEXT NOT NULL,
    "user_addressesId_address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id_order")
);

-- CreateTable
CREATE TABLE "order_details" (
    "id_order_detail" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "ordersId_order" TEXT NOT NULL,
    "dishesId_dish" TEXT NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("id_order_detail")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id_review" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "restaurantsId_restaurant" TEXT NOT NULL,
    "usersUser_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id_review")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_restaurant_path_key" ON "restaurants"("restaurant_path");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_restaurant_name_key" ON "restaurants"("restaurant_name");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_logo_key" ON "restaurants"("logo");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_main_photo_key" ON "restaurants"("main_photo");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_document_number_key" ON "users"("document_number");

-- CreateIndex
CREATE UNIQUE INDEX "cuisine_categories_cuisine_category_key" ON "cuisine_categories"("cuisine_category");

-- CreateIndex
CREATE UNIQUE INDEX "cuisine_categories_cuisine_photo_key" ON "cuisine_categories"("cuisine_photo");

-- CreateIndex
CREATE UNIQUE INDEX "facilities_facility_name_key" ON "facilities"("facility_name");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cuisines_per_restaurant" ADD CONSTRAINT "cuisines_per_restaurant_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cuisines_per_restaurant" ADD CONSTRAINT "cuisines_per_restaurant_cuisine_category_fkey" FOREIGN KEY ("cuisine_category") REFERENCES "cuisine_categories"("cuisine_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_photos" ADD CONSTRAINT "restaurant_photos_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dishes" ADD CONSTRAINT "dishes_dishes_categoriesId_dishes_category_fkey" FOREIGN KEY ("dishes_categoriesId_dishes_category") REFERENCES "dishes_categories"("id_dishes_category") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dishes_categories" ADD CONSTRAINT "dishes_categories_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facilities_per_venue" ADD CONSTRAINT "facilities_per_venue_facility_fkey" FOREIGN KEY ("facility") REFERENCES "facilities"("facility_name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facilities_per_venue" ADD CONSTRAINT "facilities_per_venue_restaurant_venuesId_restaurant_venue_fkey" FOREIGN KEY ("restaurant_venuesId_restaurant_venue") REFERENCES "restaurant_venues"("id_restaurant_venue") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restaurant_venues" ADD CONSTRAINT "restaurant_venues_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_restaurant_venuesId_restaurant_venue_fkey" FOREIGN KEY ("restaurant_venuesId_restaurant_venue") REFERENCES "restaurant_venues"("id_restaurant_venue") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_phone_numbers" ADD CONSTRAINT "user_phone_numbers_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_addresses" ADD CONSTRAINT "user_addresses_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_addressesId_address_fkey" FOREIGN KEY ("user_addressesId_address") REFERENCES "user_addresses"("id_address") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_ordersId_order_fkey" FOREIGN KEY ("ordersId_order") REFERENCES "orders"("id_order") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_dishesId_dish_fkey" FOREIGN KEY ("dishesId_dish") REFERENCES "dishes"("id_dish") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_usersUser_id_fkey" FOREIGN KEY ("usersUser_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
