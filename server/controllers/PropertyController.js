import Property from "../models/Property.js";
import User from "../models/User.js";

class PropertyController {
    static async getAllProperties(req, res) {
        try {
            const properties = await Property.find();

            return res.status(200).json({
                success: true,
                message: 'Get properties success',
                data: properties
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
            });
        }
    }

    static async getPropertyById(req, res) {
        try {
            const { id } = req.params;
            const userId = req.user.id;

            const property = await Property.findById(id);

            if (!property) {
                return res.status(404).json({
                    success: false,
                    message: 'Property not found'
                });
            }

            await Property.findByIdAndUpdate(id, { $inc: { visitCount: 1 } }, { new: true });

            /** ADDING TO VIEWED DOCUMENT IN USERS COLLECTION */
            await User.findByIdAndUpdate(userId, { $addToSet: { viewedProperties: id } });

            return res.status(200).json({
                success: true,
                message: 'Get property success',
                data: property
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
            });
        }
    }

    static async getUserViewedProperties(req, res) {
        try {
            const userId = req.user.id
            const user = await User.findById(userId)

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found'
                })
            }

            // Mengambil detail dari setiap properti yang telah dilihat
            const viewedProperties = await Promise.all(
                user.viewedProperties.map(async (propertyId) => {
                    return await Property.findById(propertyId);
                })
            );

            return res.status(200).json({
                success: true,
                message: 'Get user viewed properties success',
                data: viewedProperties
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
            })
        }
    }
}

export default PropertyController;
