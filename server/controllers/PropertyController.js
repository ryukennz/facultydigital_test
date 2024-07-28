import Property from "../models/Property.js";

class PropertyController {
    static async getAllProperties(req, res) {
        try {
            const properties = await Property.find()

            return res.status(200).json({
                success: true,
                message: 'Get properties success',
                properties
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error',
            })
        }
    }

    static async getPropertyById(req, res) {
        try {
            const { id } = req.params
            const property = await Property.findById(id)

            if (!property) {
                return res.status(404).json({
                    success: false,
                    message: 'Property not found'
                })
            }

            const incrementPropertyVisitCount = await Property.findByIdAndUpdate(id, { $inc: { visitCount: 1 } }, { new: true })

            console.log(incrementPropertyVisitCount, ">>");

            return res.status(200).json({
                success: true,
                message: 'Get property success',
                property
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

export default PropertyController