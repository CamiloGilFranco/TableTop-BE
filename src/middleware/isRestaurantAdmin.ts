import { NextFunction, Response } from "express";
import { AuthUser } from "../auth/auth.types";
import { getUserById } from "../api/users/users.services";
import { getRestaurantByVenueId } from "../api/restaurants/restaurants.services";
import { RESTAURANT_ADMIN_ROLE } from "../../constants/roles";

export const isRestaurantAdmin = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {    
    if (!req.user) {
      return res.status(403).json({ message: "Access denied" });
    }

    const user = await getUserById(req.user);
    const restaurantAdminRole = RESTAURANT_ADMIN_ROLE;

    if (user && user.user_role === restaurantAdminRole) {
      const venue_id = req.params.venue_id
        ? req.params.venue_id
        : req.body.restaurantsId_restaurant;
      const restaurant = await getRestaurantByVenueId(venue_id);

      if (restaurant) {
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
