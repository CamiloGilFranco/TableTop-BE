import { NextFunction, Response } from "express";
import { AuthUser } from "../auth/auth.types";
import { getUserById } from "../api/users/users.services";
import { getRestaurantByUser, getRestaurantByVenueId } from "../api/restaurants/restaurants.services";
import { RESTAURANT_ADMIN_ROLE } from "../../constants/roles";

export const isRestaurantAdmin = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user: testUser } = req;
    console.log("🚀 ~ file: isRestaurantAdmin.ts:14 ~ testUser:", testUser)
    
    if (!req.user) {
      return res.status(403).json({ message: "Access denied" });
    }

    const user = await getUserById(req.user);
    const restaurantAdminRole = RESTAURANT_ADMIN_ROLE;

    if (user && user.user_role === restaurantAdminRole) {
      const { venue_id } = req.params.venue_id
      ? req.params
      : req.body;
      const restaurant = await getRestaurantByVenueId(venue_id);    
      const venueRestaurant = await getRestaurantByVenueId(venue_id);

      if (restaurant && venueRestaurant && restaurant.id_restaurant === venueRestaurant.id_restaurant) {
        next();
      } else {
        res.status(403).json({
          message:
            "Access denied: user is not an admin of the specified restaurant",
        });
      }
    } else {
      res
        .status(403)
        .json({ message: "Access denied: user is not a restaurant admin" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
