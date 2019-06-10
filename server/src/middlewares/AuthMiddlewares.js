import ApiError from '../Helpers/ErrorClass';

export default class AuthMiddlewares {
    static ValidateParams(req, res, next) {
        try {
            if(req.body.firstName) {
                throw new ApiError(400, 'firstname is required.')
            }
            next();
        } catch (error) {
            res.status(error.statusCode || 500).json({
                success: false,
                message: error.message
            });
        }
    }
}