import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedFacilities = async (prisma: PrismaClient): Promise<void> => {
  const facilitiesList = [
    "Pago con tarjeta",
    "Zona de parking",
    "zona de parking gratuito",
    "Valet parking",
    "Zona infantil",
    "Zona al aire libre",
    "Música en vivo",
    "Wi-Fi",
    "Pantalla para eventos deportivos",
    "Eventos especiales",
    "vista panorámica",
    "Cocina en vivo",
    "Conectores de carga en mesas",
  ];

  const facilities = [];

  for (let i = 0; i < facilitiesList.length; i++) {
    const facility = {
      facility_name: facilitiesList[i],
    };

    facilities.push(facility);
  }

  await prisma.facilities.createMany({
    data: facilities,
  });

  console.log("Facilities created!");
};

export default seedFacilities;
