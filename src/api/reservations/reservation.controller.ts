import { Request, Response, NextFunction } from "express";
import {
  createReservation,
  deleteReservation,
  getAllReservations,
  getByIdReservation,
  getReservationsByVenue,
  updateByIdReservation,
} from "./reservation.service";
import { AuthUser } from "../../auth/auth.types";
import { sendNodemailer } from "../../config/nodemailer";
import { reserveEmail } from "../../utils/emails";
import { getUserById } from "../users/users.services";
import { getAllRestaurantById } from "../restaurants/restaurants.services";
import { getByIdRestaurantVenues } from "../restaurantVenues/restaurantVenues.service";

export const getAllReservationsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reservations = await getAllReservations();
    res.status(200).json({ message: "Reservations Found", data: reservations });
  } catch (error) {
    next(error);
  }
};

export const getByIdReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const reservation = await getByIdReservation(id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation Not Found" });
    }
    res.status(200).json({ message: "Reservation Found", data: reservation });
  } catch (error) {
    next(error);
  }
};

export const createReservationController = async (
  req: Request & AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    let user: string;
    user = req.user as string;

    const { id_restaurant, id_venue, date } = req.body;

    const reservation = await createReservation({
      date,
      id_restaurant,
      id_venue,
      user,
    });

    const userData = await getUserById(user);

    const restaurantData = await getAllRestaurantById(id_restaurant);

    const venueData = await getByIdRestaurantVenues(id_venue);

    const dateString = date.replace("T", " / ").replace(":00.000Z", "");

    await sendNodemailer(
      reserveEmail({
        name: userData!.name,
        email: userData!.email,
        reserve: reservation.id_reservation,
        restaurant: restaurantData!.restaurant_name,
        venue: venueData[0].name_venue,
        address: venueData[0].address,
        date: dateString,
      })
    );

    res.status(201).json({ message: "Reservation Created", data: reservation });
  } catch (error) {
    next(error);
  }
};

export const updateByIdReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const reservation = await updateByIdReservation(id, req.body);
    res.status(200).json({ message: "Reservation updated", data: reservation });
  } catch (error) {
    next(error);
  }
};

export const deleteReservationController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const reservation = await deleteReservation(id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation Not Found" });
    }
    res.status(200).json({ message: "Reservation Deleted", data: reservation });
  } catch (error) {
    next(error);
  }
};

export const getReservationsByVenueController = async (
  req: Request,
  res: Response
) => {
  try {
    const { venueId } = req.params;
    const reservations = await getReservationsByVenue(venueId);
    res.status(200).json({
      message: `Reservations for venue ${venueId} retrieved successfully`,
      data: reservations,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
