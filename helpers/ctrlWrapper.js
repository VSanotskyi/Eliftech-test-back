const ctrlWrapper = (ctrl) => {
    return async (req, res, next) => {
        try {
            await ctrl(req, res)
        } catch (e) {
            next(e)
        }
    }
}

export {ctrlWrapper}